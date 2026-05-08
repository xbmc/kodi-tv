type DonationCurrency = "USD" | "EUR" | "GBP" | "CAD" | "AUD" | "JPY";
type DonationLevel = "levelOne" | "levelTwo" | "levelThree" | "levelFour";
type DonationType = "one_time" | "subscription";

interface PriceLevel {
  price: string;
  text: string;
  amount: string;
}

interface CurrencyMonthly {
  levelOne: PriceLevel;
  levelTwo: PriceLevel;
  levelThree: PriceLevel;
  levelFour: PriceLevel;
}

export interface StripeDonationConfig {
  minCharge: Record<DonationCurrency, number>;
  oneTime: Record<DonationCurrency, string>;
  monthly: Record<DonationCurrency, CurrencyMonthly>;
}

interface CheckoutRequestBody {
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

const currencies: DonationCurrency[] = ["USD", "EUR", "GBP", "CAD", "AUD", "JPY"];
const levels: DonationLevel[] = ["levelOne", "levelTwo", "levelThree", "levelFour"];

const testOneTime = {
  USD: "price_1HVRC7DOVUu6yhjNHWNMz6Zf",
  EUR: "price_1HVRHSDOVUu6yhjNhOGckxxU",
  GBP: "price_1HVRNRDOVUu6yhjN0BsrpfOo",
  CAD: "price_1HVRNpDOVUu6yhjNyoxCfwmQ",
  AUD: "price_1HVROBDOVUu6yhjNuN2o56Ob",
  JPY: "price_1HVROeDOVUu6yhjN83arFdQo",
};

const testMonthly = {
  USD: {
    levelOne: {
      price: "price_1HVP1ODOVUu6yhjNAUMDRlrr",
      text: "$5 a month",
      amount: "5",
    },
    levelTwo: {
      price: "price_1HVP3mDOVUu6yhjNL7qjHUyW",
      text: "$10 a month",
      amount: "10",
    },
    levelThree: {
      price: "price_1HVP3kDOVUu6yhjN7kaQEJ8L",
      text: "$25 a month",
      amount: "25",
    },
    levelFour: {
      price: "price_1HVP3lDOVUu6yhjN1Z1gYPNf",
      text: "$50 a month",
      amount: "50",
    },
  },
  EUR: {
    levelOne: {
      price: "price_1HVTTwDOVUu6yhjNVOWyY3hy",
      text: "€5 a month",
      amount: "5",
    },
    levelTwo: {
      price: "price_1HVTU9DOVUu6yhjNQjBxH8mv",
      text: "€10 a month",
      amount: "10",
    },
    levelThree: {
      price: "price_1HVTULDOVUu6yhjNAMa8cdQg",
      text: "€20 a month",
      amount: "20",
    },
    levelFour: {
      price: "price_1HVTUWDOVUu6yhjNmtcktSi7",
      text: "€40 a month",
      amount: "40",
    },
  },
  GBP: {
    levelOne: {
      price: "price_1HVTUuDOVUu6yhjNJr8FS5hm",
      text: "£5 a month",
      amount: "5",
    },
    levelTwo: {
      price: "price_1HVTV4DOVUu6yhjNXZemCrK0",
      text: "£10 a month",
      amount: "10",
    },
    levelThree: {
      price: "price_1HVTVEDOVUu6yhjNg0MVZShG",
      text: "£20 a month",
      amount: "20",
    },
    levelFour: {
      price: "price_1HVTVTDOVUu6yhjNOpg1jIfU",
      text: "£40 a month",
      amount: "40",
    },
  },
  CAD: {
    levelOne: {
      price: "price_1HVTVpDOVUu6yhjNZjhMEWO2",
      text: "$10 a month",
      amount: "10",
    },
    levelTwo: {
      price: "price_1HVTW1DOVUu6yhjNg1TIoWum",
      text: "$15 a month",
      amount: "15",
    },
    levelThree: {
      price: "price_1HVTWCDOVUu6yhjNBjXG9Fe9",
      text: "$35 a month",
      amount: "35",
    },
    levelFour: {
      price: "price_1HVTWMDOVUu6yhjNDz4y9Jzt",
      text: "$65 a month",
      amount: "65",
    },
  },
  AUD: {
    levelOne: {
      price: "price_1HVTWeDOVUu6yhjNWKXIu8WJ",
      text: "$10 a month",
      amount: "10",
    },
    levelTwo: {
      price: "price_1HVTWtDOVUu6yhjNMZRWL8bX",
      text: "$15 a month",
      amount: "15",
    },
    levelThree: {
      price: "price_1HVTX4DOVUu6yhjNK21runP2",
      text: "$35 a month",
      amount: "35",
    },
    levelFour: {
      price: "price_1HVTXJDOVUu6yhjNl3UvxLrr",
      text: "$70 a month",
      amount: "70",
    },
  },
  JPY: {
    levelOne: {
      price: "price_1HVTXgDOVUu6yhjNhETVDMbW",
      text: "¥500 a month",
      amount: "500",
    },
    levelTwo: {
      price: "price_1HVTXtDOVUu6yhjNtDjMUo4W",
      text: "¥1000 a month",
      amount: "1000",
    },
    levelThree: {
      price: "price_1HVTYADOVUu6yhjNJoEjtHcY",
      text: "¥2500 a month",
      amount: "2500",
    },
    levelFour: {
      price: "price_1HVTYLDOVUu6yhjNziS2gXhj",
      text: "¥5000 a month",
      amount: "5000",
    },
  },
};

const prodOneTime = {
  USD: "price_1Im29HDOVUu6yhjNEERqQVmp",
  EUR: "price_1Im29HDOVUu6yhjN8m0CHTiu",
  GBP: "price_1Im29GDOVUu6yhjNBogHLRnX",
  CAD: "price_1Im29GDOVUu6yhjNAClDxpIU",
  AUD: "price_1Im29GDOVUu6yhjN7yPl8j39",
  JPY: "price_1Im29GDOVUu6yhjNYpVeUHMx",
};

const prodMonthly = {
  USD: {
    levelOne: {
      price: "price_1Im29HDOVUu6yhjNRPKi0RKE",
      text: "$5 a month",
      amount: "5",
    },
    levelTwo: {
      price: "price_1Im29HDOVUu6yhjNXvEYo4bi",
      text: "$10 a month",
      amount: "10",
    },
    levelThree: {
      price: "price_1Im29HDOVUu6yhjNtGFNSi2t",
      text: "$25 a month",
      amount: "25",
    },
    levelFour: {
      price: "price_1Im29HDOVUu6yhjN50Qw1mME",
      text: "$50 a month",
      amount: "50",
    },
  },
  EUR: {
    levelOne: {
      price: "price_1Im29GDOVUu6yhjN0XiYuKTR",
      text: "€5 a month",
      amount: "5",
    },
    levelTwo: {
      price: "price_1Im29GDOVUu6yhjNU83gldqH",
      text: "€10 a month",
      amount: "10",
    },
    levelThree: {
      price: "price_1Im29GDOVUu6yhjNtMwJgsix",
      text: "€20 a month",
      amount: "20",
    },
    levelFour: {
      price: "price_1Im29GDOVUu6yhjNGgZt6iG2",
      text: "€40 a month",
      amount: "40",
    },
  },
  GBP: {
    levelOne: {
      price: "price_1Im29GDOVUu6yhjNZc6uZOSB",
      text: "£5 a month",
      amount: "5",
    },
    levelTwo: {
      price: "price_1Im29GDOVUu6yhjN6CQjHjJ2",
      text: "£10 a month",
      amount: "10",
    },
    levelThree: {
      price: "price_1Im29GDOVUu6yhjNDLGQBpDs",
      text: "£20 a month",
      amount: "20",
    },
    levelFour: {
      price: "price_1Im29GDOVUu6yhjN4k13v7Q4",
      text: "£40 a month",
      amount: "40",
    },
  },
  CAD: {
    levelOne: {
      price: "price_1Im29GDOVUu6yhjN4cvMj0QN",
      text: "$10 a month",
      amount: "10",
    },
    levelTwo: {
      price: "price_1Im29GDOVUu6yhjNn3rOyVUp",
      text: "$15 a month",
      amount: "15",
    },
    levelThree: {
      price: "price_1Im29GDOVUu6yhjNt4bbKzE7",
      text: "$35 a month",
      amount: "35",
    },
    levelFour: {
      price: "price_1Im29GDOVUu6yhjN0coptKBo",
      text: "$65 a month",
      amount: "65",
    },
  },
  AUD: {
    levelOne: {
      price: "price_1Im29GDOVUu6yhjNTPktbNjo",
      text: "$10 a month",
      amount: "10",
    },
    levelTwo: {
      price: "price_1Im29GDOVUu6yhjNJl3N0r18",
      text: "$15 a month",
      amount: "15",
    },
    levelThree: {
      price: "price_1Im29GDOVUu6yhjNoVZF5q2K",
      text: "$35 a month",
      amount: "35",
    },
    levelFour: {
      price: "price_1Im29GDOVUu6yhjNEakdJ83C",
      text: "$70 a month",
      amount: "70",
    },
  },
  JPY: {
    levelOne: {
      price: "price_1Im29GDOVUu6yhjNL3oy44z6",
      text: "¥500 a month",
      amount: "500",
    },
    levelTwo: {
      price: "price_1Im29GDOVUu6yhjNBYLo4Gef",
      text: "¥1000 a month",
      amount: "1000",
    },
    levelThree: {
      price: "price_1Im29GDOVUu6yhjNzzp47nAq",
      text: "¥2500 a month",
      amount: "2500",
    },
    levelFour: {
      price: "price_1Im29FDOVUu6yhjNcK3TXluf",
      text: "¥5000 a month",
      amount: "5000",
    },
  },
};

export function getStripeDonationConfig(type?: string): StripeDonationConfig {
  return {
    minCharge: {
      USD: 5,
      EUR: 5,
      GBP: 4,
      CAD: 7,
      AUD: 7,
      JPY: 500,
    },
    oneTime: type === "prod" ? prodOneTime : testOneTime,
    monthly: type === "prod" ? prodMonthly : testMonthly,
  };
}

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

  if (!token) {
    return checkoutError(400, "Complete the bot check and try again.");
  }

  const turnstile = await dependencies.verifyTurnstile({
    secret: dependencies.turnstileSecret,
    token,
    remoteIp: request.ip,
  });

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

  const session = await dependencies.createCheckoutSession(sessionRequest);
  if (!session.url) {
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
  const response = await fetch(
    "https://challenges.cloudflare.com/turnstile/v0/siteverify",
    {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({
        secret,
        response: token,
        remoteip: remoteIp,
      }),
    },
  );

  if (!response.ok) {
    return { success: false };
  }

  const result = (await response.json()) as { success?: boolean };
  return { success: result.success === true };
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
      amount > 100000
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
  return currencies.includes(currency as DonationCurrency)
    ? (currency as DonationCurrency)
    : null;
}

function normalizeLevel(level?: string): DonationLevel | null {
  return levels.includes(level as DonationLevel) ? (level as DonationLevel) : null;
}

function sanitizeReferenceValue(value?: string) {
  return (value ?? "")
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
