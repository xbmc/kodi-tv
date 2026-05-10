import type { HandlerEvent } from "@netlify/functions";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";

const originalStripeSecretKey = process.env.STRIPE_SECRET_KEY;

describe("create stripe checkout function", () => {
  beforeEach(() => {
    vi.resetModules();
  });

  afterEach(() => {
    process.env.STRIPE_SECRET_KEY = originalStripeSecretKey;
    vi.doUnmock("stripe");
    vi.restoreAllMocks();
  });

  it("returns a controlled JSON error when an unexpected handler error occurs", async () => {
    process.env.STRIPE_SECRET_KEY = "sk_test_unexpected_handler_error";
    const consoleError = vi.spyOn(console, "error").mockImplementation(() => {});
    vi.doMock("stripe", () => ({
      default: class Stripe {
        constructor() {
          throw new TypeError("stripe constructor failed");
        }
      },
    }));
    const { handler } =
      await import("../../netlify/functions/create-stripe-checkout");

    const result = await handler({
      httpMethod: "POST",
      headers: {},
      body: JSON.stringify({
        type: "one_time",
        currency: "USD",
        amount: 10,
        turnstileToken: "valid-token",
      }),
    } as HandlerEvent);

    expect(result).toEqual({
      statusCode: 500,
      headers: { "content-type": "application/json" },
      body: JSON.stringify({
        error: "Unable to start checkout. Please try again.",
      }),
    });
    expect(consoleError).toHaveBeenCalledWith(
      "Stripe donation checkout handler failed:",
      expect.any(TypeError),
    );
  });
});
