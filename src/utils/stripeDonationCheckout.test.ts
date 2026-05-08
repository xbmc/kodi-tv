import { describe, expect, it, vi } from "vitest";
import {
  createStripeDonationCheckout,
  getStripeDonationConfig,
  verifyTurnstileToken,
} from "./stripeDonationCheckout";

const successTurnstile = vi.fn(async () => ({ success: true }));
const failureTurnstile = vi.fn(async () => ({ success: false }));

describe("stripe donation checkout", () => {
  it("creates a one-time checkout session only after Turnstile validation", async () => {
    const createCheckoutSession = vi.fn(async () => ({
      url: "https://checkout.stripe.com/c/pay_123",
    }));

    const result = await createStripeDonationCheckout(
      {
        body: {
          type: "one_time",
          currency: "USD",
          amount: 25,
          donor: "Kodi Friend",
          forum: "friend123",
          turnstileToken: "valid-token",
        },
        origin: "https://kodi.tv",
        ip: "203.0.113.10",
      },
      {
        config: getStripeDonationConfig("test"),
        turnstileSecret: "secret",
        verifyTurnstile: successTurnstile,
        createCheckoutSession,
      },
    );

    expect(successTurnstile).toHaveBeenCalledWith({
      secret: "secret",
      token: "valid-token",
      remoteIp: "203.0.113.10",
    });
    expect(createCheckoutSession).toHaveBeenCalledWith(
      expect.objectContaining({
        mode: "payment",
        submit_type: "donate",
        line_items: [
          {
            price: "price_1HVRC7DOVUu6yhjNHWNMz6Zf",
            quantity: 25,
          },
        ],
        client_reference_id: "Kodi Friend\u2028friend123",
        success_url: "https://kodi.tv/donate/success-stripe",
        cancel_url: "https://kodi.tv/donate/by-stripe",
      }),
    );
    expect(result).toEqual({
      statusCode: 200,
      body: { url: "https://checkout.stripe.com/c/pay_123" },
    });
  });

  it("rejects missing Turnstile tokens before creating Stripe sessions", async () => {
    const createCheckoutSession = vi.fn();

    const result = await createStripeDonationCheckout(
      {
        body: {
          type: "subscription",
          currency: "USD",
          level: "levelOne",
        },
        origin: "https://kodi.tv",
      },
      {
        config: getStripeDonationConfig("test"),
        turnstileSecret: "secret",
        verifyTurnstile: successTurnstile,
        createCheckoutSession,
      },
    );

    expect(result.statusCode).toBe(400);
    expect(result.body.error).toBe("Complete the bot check and try again.");
    expect(createCheckoutSession).not.toHaveBeenCalled();
  });

  it("rejects invalid Turnstile validation before creating Stripe sessions", async () => {
    const createCheckoutSession = vi.fn();

    const result = await createStripeDonationCheckout(
      {
        body: {
          type: "one_time",
          currency: "USD",
          amount: 10,
          turnstileToken: "invalid-token",
        },
        origin: "https://kodi.tv",
      },
      {
        config: getStripeDonationConfig("test"),
        turnstileSecret: "secret",
        verifyTurnstile: failureTurnstile,
        createCheckoutSession,
      },
    );

    expect(result.statusCode).toBe(403);
    expect(result.body.error).toBe("Bot check failed. Please try again.");
    expect(createCheckoutSession).not.toHaveBeenCalled();
  });

  it("rejects arbitrary prices and below-minimum one-time donations", async () => {
    const createCheckoutSession = vi.fn();

    const result = await createStripeDonationCheckout(
      {
        body: {
          type: "one_time",
          currency: "USD",
          amount: 4,
          turnstileToken: "valid-token",
        },
        origin: "https://kodi.tv",
      },
      {
        config: getStripeDonationConfig("test"),
        turnstileSecret: "secret",
        verifyTurnstile: successTurnstile,
        createCheckoutSession,
      },
    );

    expect(result.statusCode).toBe(400);
    expect(result.body.error).toBe("Choose a valid donation amount.");
    expect(createCheckoutSession).not.toHaveBeenCalled();
  });

  it("creates subscription sessions from whitelisted level identifiers", async () => {
    const createCheckoutSession = vi.fn(async () => ({
      url: "https://checkout.stripe.com/c/sub_123",
    }));

    const result = await createStripeDonationCheckout(
      {
        body: {
          type: "subscription",
          currency: "EUR",
          level: "levelThree",
          turnstileToken: "valid-token",
        },
        origin: "https://kodi.tv",
      },
      {
        config: getStripeDonationConfig("prod"),
        turnstileSecret: "secret",
        verifyTurnstile: successTurnstile,
        createCheckoutSession,
      },
    );

    expect(createCheckoutSession).toHaveBeenCalledWith(
      expect.objectContaining({
        mode: "subscription",
        line_items: [
          {
            price: "price_1Im29GDOVUu6yhjNtMwJgsix",
            quantity: 1,
          },
        ],
      }),
    );
    expect(result.statusCode).toBe(200);
  });

  it("returns a controlled error when Turnstile verification throws", async () => {
    const createCheckoutSession = vi.fn();

    const result = await createStripeDonationCheckout(
      {
        body: {
          type: "one_time",
          currency: "USD",
          amount: 10,
          turnstileToken: "valid-token",
        },
        origin: "https://kodi.tv",
      },
      {
        config: getStripeDonationConfig("test"),
        turnstileSecret: "secret",
        verifyTurnstile: vi.fn(async () => {
          throw new Error("network unavailable");
        }),
        createCheckoutSession,
      },
    );

    expect(result).toEqual({
      statusCode: 403,
      body: { error: "Bot check failed. Please try again." },
    });
    expect(createCheckoutSession).not.toHaveBeenCalled();
  });

  it("returns a controlled error when Stripe session creation throws", async () => {
    const result = await createStripeDonationCheckout(
      {
        body: {
          type: "one_time",
          currency: "USD",
          amount: 10,
          turnstileToken: "valid-token",
        },
        origin: "https://kodi.tv",
      },
      {
        config: getStripeDonationConfig("test"),
        turnstileSecret: "secret",
        verifyTurnstile: successTurnstile,
        createCheckoutSession: vi.fn(async () => {
          throw new Error("stripe unavailable");
        }),
      },
    );

    expect(result).toEqual({
      statusCode: 502,
      body: { error: "Unable to start checkout. Please try again." },
    });
  });

  it("does not throw when optional donor metadata is not a string", async () => {
    const createCheckoutSession = vi.fn(async () => ({
      url: "https://checkout.stripe.com/c/pay_123",
    }));

    const result = await createStripeDonationCheckout(
      {
        body: {
          type: "one_time",
          currency: "USD",
          amount: 10,
          donor: { name: "not a string" } as any,
          forum: ["not a string"] as any,
          turnstileToken: "valid-token",
        },
        origin: "https://kodi.tv",
      },
      {
        config: getStripeDonationConfig("test"),
        turnstileSecret: "secret",
        verifyTurnstile: successTurnstile,
        createCheckoutSession,
      },
    );

    expect(createCheckoutSession).toHaveBeenCalledWith(
      expect.objectContaining({
        client_reference_id: "\u2028",
      }),
    );
    expect(result.statusCode).toBe(200);
  });

  it("bounds Turnstile verification requests with an abort signal", async () => {
    const fetchMock = vi.fn(async () => ({
      ok: true,
      json: async () => ({ success: true }),
    }));
    vi.stubGlobal("fetch", fetchMock);

    const result = await verifyTurnstileToken({
      secret: "secret",
      token: "valid-token",
      remoteIp: "203.0.113.10",
    });

    expect(result).toEqual({ success: true });
    expect(fetchMock).toHaveBeenCalledWith(
      "https://challenges.cloudflare.com/turnstile/v0/siteverify",
      expect.objectContaining({
        method: "POST",
        signal: expect.any(AbortSignal),
      }),
    );

    vi.unstubAllGlobals();
  });
});
