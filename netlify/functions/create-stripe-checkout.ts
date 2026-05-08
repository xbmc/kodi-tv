import type { Handler, HandlerEvent } from "@netlify/functions";
import Stripe from "stripe";
import {
  createStripeDonationCheckout,
  getStripeDonationConfig,
  verifyTurnstileToken,
} from "../../src/utils/stripeDonationCheckout";

const jsonHeaders = {
  "content-type": "application/json",
};

export const handler: Handler = async (event: HandlerEvent) => {
  if (event.httpMethod !== "POST") {
    return jsonResponse(405, { error: "Method not allowed." });
  }

  const stripeSecretKey = process.env.STRIPE_SECRET_KEY;
  if (!stripeSecretKey) {
    return jsonResponse(503, { error: "Checkout is temporarily unavailable." });
  }

  const body = parseRequestBody(event.body);
  if (!body) {
    return jsonResponse(400, { error: "Invalid checkout request." });
  }

  const stripe = new Stripe(stripeSecretKey);
  const result = await createStripeDonationCheckout(
    {
      body,
      origin: getSiteOrigin(),
      ip: getClientIp(event),
    },
    {
      config: getStripeDonationConfig(
        process.env.STRIPE_TYPE ||
          process.env.PUBLIC_STRIPE_TYPE ||
          process.env.GATSBY_STRIPE_TYPE,
      ),
      turnstileSecret: process.env.TURNSTILE_SECRET_KEY,
      verifyTurnstile: verifyTurnstileToken,
      createCheckoutSession: params => stripe.checkout.sessions.create(params),
    },
  );

  return jsonResponse(result.statusCode, result.body);
};

function parseRequestBody(body: string | null) {
  if (!body) {
    return null;
  }

  try {
    return JSON.parse(body) as Record<string, unknown>;
  } catch {
    return null;
  }
}

function getSiteOrigin() {
  return (
    process.env.PUBLIC_SITEURL ||
    process.env.GATSBY_SITEURL ||
    process.env.URL ||
    "https://kodi.tv"
  ).replace(/\/+$/, "");
}

function getClientIp(event: HandlerEvent) {
  return (
    event.headers["x-nf-client-connection-ip"] ||
    event.headers["client-ip"] ||
    event.headers["x-forwarded-for"]?.split(",")[0]?.trim()
  );
}

function jsonResponse(statusCode: number, body: Record<string, unknown>) {
  return {
    statusCode,
    headers: jsonHeaders,
    body: JSON.stringify(body),
  };
}
