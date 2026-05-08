import {
  donationCurrencies,
  donationLevels,
  getStripeDonationPriceConfig,
  type DonationCurrency,
  type DonationLevel,
  type StripeDonationConfig,
} from "../config/stripeDonation";

type DonationType = "one_time" | "subscription";

export type { StripeDonationConfig };

export interface CheckoutRequestBody {
  type?: DonationType;
  currency?: string;
  amount?: number;
  level?: string;
  donor?: string;
  forum?: string;
  turnstileToken?: string;
  website?: string;
}

interface CheckoutRequest {
  body: CheckoutRequestBody;
  origin: string;
  ip?: string;
}

interface TurnstileVerificationRequest {
  secret: string;
  token: string;
  remoteIp?: string;
}

interface CheckoutSessionRequest {
  mode: "payment" | "subscription";
  submit_type?: "donate";
  line_items: { price: string; quantity: number }[];
  client_reference_id: string;
  success_url: string;
  cancel_url: string;
}

interface CheckoutDependencies {
  config: StripeDonationConfig;
  turnstileSecret?: string;
  verifyTurnstile: (
    request: TurnstileVerificationRequest,
  ) => Promise<{ success: boolean }>;
  createCheckoutSession: (
    request: CheckoutSessionRequest,
  ) => Promise<{ url?: string | null }>;
}

const TURNSTILE_VERIFY_TIMEOUT_MS = 5000;
const MAX_ONE_TIME_DONATION_QUANTITY = 100000;

export const getStripeDonationConfig = getStripeDonationPriceConfig;

export async function createStripeDonationCheckout(
  request: CheckoutRequest,
  dependencies: CheckoutDependencies,
) {
  const token = request.body.turnstileToken;

  if (request.body.website) {
    return checkoutError(400, "Unable to start checkout. Please try again.");
  }

  if (!dependencies.turnstileSecret) {
    return checkoutError(503, "Checkout is temporarily unavailable.");
  }

  if (typeof token !== "string" || !token) {
    return checkoutError(400, "Complete the bot check and try again.");
  }

  const turnstile = await verifyTurnstile(dependencies, token, request.ip);

  if (!turnstile.success) {
    return checkoutError(403, "Bot check failed. Please try again.");
  }

  const currency = normalizeCurrency(request.body.currency);
  if (!currency) {
    return checkoutError(400, "Choose a valid donation currency.");
  }

  const sessionRequest = buildSessionRequest(request, dependencies.config, currency);
  if ("error" in sessionRequest) {
    return checkoutError(400, sessionRequest.error);
  }

  const session = await createCheckoutSession(dependencies, sessionRequest);
  if (!session?.url) {
    return checkoutError(502, "Unable to start checkout. Please try again.");
  }

  return {
    statusCode: 200,
    body: { url: session.url },
  };
}

export async function verifyTurnstileToken({
  secret,
  token,
  remoteIp,
}: TurnstileVerificationRequest) {
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), TURNSTILE_VERIFY_TIMEOUT_MS);

  try {
    const form = new URLSearchParams({
      secret,
      response: token,
    });
    if (remoteIp) {
      form.set("remoteip", remoteIp);
    }

    const response = await fetch(
      "https://challenges.cloudflare.com/turnstile/v0/siteverify",
      {
        method: "POST",
        headers: {
          "content-type": "application/x-www-form-urlencoded",
        },
        body: form,
        signal: controller.signal,
      },
    );

    if (!response.ok) {
      return { success: false };
    }

    const result = (await response.json()) as { success?: boolean };
    return { success: result.success === true };
  } catch (error) {
    if (!controller.signal.aborted) {
      console.error("Turnstile verification failed:", error);
    }
    return { success: false };
  } finally {
    clearTimeout(timeout);
  }
}

async function verifyTurnstile(
  dependencies: CheckoutDependencies,
  token: string,
  remoteIp?: string,
) {
  try {
    return await dependencies.verifyTurnstile({
      secret: dependencies.turnstileSecret!,
      token,
      remoteIp,
    });
  } catch (error) {
    console.error("Turnstile verification dependency failed:", error);
    return { success: false };
  }
}

async function createCheckoutSession(
  dependencies: CheckoutDependencies,
  sessionRequest: CheckoutSessionRequest,
) {
  try {
    return await dependencies.createCheckoutSession(sessionRequest);
  } catch (error) {
    console.error("Stripe checkout session creation failed:", error);
    return null;
  }
}

function buildSessionRequest(
  request: CheckoutRequest,
  config: StripeDonationConfig,
  currency: DonationCurrency,
): CheckoutSessionRequest | { error: string } {
  const clientReferenceId = [
    sanitizeReferenceValue(request.body.donor),
    sanitizeReferenceValue(request.body.forum),
  ].join("\u2028");

  if (request.body.type === "one_time") {
    const amount = Number(request.body.amount);
    if (
      !Number.isInteger(amount) ||
      amount < config.minCharge[currency] ||
      amount > MAX_ONE_TIME_DONATION_QUANTITY
    ) {
      return { error: "Choose a valid donation amount." };
    }

    return {
      mode: "payment",
      submit_type: "donate",
      line_items: [{ price: config.oneTime[currency], quantity: amount }],
      client_reference_id: clientReferenceId,
      success_url: `${request.origin}/donate/success-stripe`,
      cancel_url: `${request.origin}/donate/by-stripe`,
    };
  }

  if (request.body.type === "subscription") {
    const level = normalizeLevel(request.body.level);
    if (!level) {
      return { error: "Choose a valid recurring donation." };
    }

    return {
      mode: "subscription",
      line_items: [{ price: config.monthly[currency][level].price, quantity: 1 }],
      client_reference_id: clientReferenceId,
      success_url: `${request.origin}/donate/success-stripe`,
      cancel_url: `${request.origin}/donate/by-stripe`,
    };
  }

  return { error: "Choose a valid donation type." };
}

function normalizeCurrency(currency?: string): DonationCurrency | null {
  return donationCurrencies.includes(currency as DonationCurrency)
    ? (currency as DonationCurrency)
    : null;
}

function normalizeLevel(level?: string): DonationLevel | null {
  return donationLevels.includes(level as DonationLevel)
    ? (level as DonationLevel)
    : null;
}

function sanitizeReferenceValue(value?: string) {
  if (typeof value !== "string") {
    return "";
  }

  return value
    .replace(/\u2028/g, " ")
    .trim()
    .slice(0, 100);
}

function checkoutError(statusCode: number, error: string) {
  return {
    statusCode,
    body: { error },
  };
}
