import type { Handler, HandlerEvent } from "@netlify/functions";
import Stripe from "stripe";
import {
  type CheckoutRequestBody,
  createStripeDonationCheckout,
  getStripeDonationConfig,
  verifyTurnstileToken,
} from "../../src/utils/stripeDonationCheckout";

const jsonHeaders = {
  "content-type": "application/json",
};

const STRIPE_CHECKOUT_TIMEOUT_MS = 8000;
const STRIPE_API_VERSION = "2026-04-22.dahlia";

export const handler: Handler = async (event: HandlerEvent) => {
  try {
    return await handleCheckoutRequest(event);
  } catch (error) {
    console.error("Stripe donation checkout handler failed:", error);
    return jsonResponse(500, {
      error: "Unable to start checkout. Please try again.",
    });
  }
};

async function handleCheckoutRequest(event: HandlerEvent) {
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

  const stripe = new Stripe(stripeSecretKey, {
    apiVersion: STRIPE_API_VERSION,
    timeout: STRIPE_CHECKOUT_TIMEOUT_MS,
  });
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
}

function parseRequestBody(body: string | null) {
  if (!body) {
    return null;
  }

  try {
    const parsed = JSON.parse(body) as unknown;
    if (!isPlainObject(parsed)) {
      return null;
    }

    return parsed as CheckoutRequestBody;
  } catch {
    return null;
  }
}

function isPlainObject(value: unknown): value is Record<string, unknown> {
  return (
    typeof value === "object" &&
    value !== null &&
    !Array.isArray(value) &&
    Object.getPrototypeOf(value) === Object.prototype
  );
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
