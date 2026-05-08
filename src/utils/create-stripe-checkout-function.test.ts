import type { HandlerEvent } from "@netlify/functions";
import { afterEach, describe, expect, it, vi } from "vitest";
import { handler } from "../../netlify/functions/create-stripe-checkout";

const originalStripeSecretKey = process.env.STRIPE_SECRET_KEY;

describe("create stripe checkout function", () => {
  afterEach(() => {
    process.env.STRIPE_SECRET_KEY = originalStripeSecretKey;
    vi.restoreAllMocks();
  });

  it("returns a controlled JSON error when an unexpected handler error occurs", async () => {
    process.env.STRIPE_SECRET_KEY = "sk_test_unexpected_handler_error";
    const consoleError = vi.spyOn(console, "error").mockImplementation(() => {});

    const result = await handler({
      httpMethod: "POST",
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
