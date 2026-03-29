import React from "react";

export default function ButtonStripe(props: {
  stripePromise: any | undefined;
  price_id: string | undefined;
  button_text: string | undefined;
  amount: string | undefined;
  currency: string | undefined;
  donorname: string | undefined;
  forumname: string | undefined;
}) {
  const handleClick = async event => {
    // When the customer clicks on the button, redirect them to Checkout.
    let sep = "\u2028";
    const stripe = await props.stripePromise;
    const { error } = await stripe.redirectToCheckout({
      lineItems: [
        // Replace with the ID of your price
        { price: props.price_id, quantity: 1 },
      ],
      mode: "subscription",
      clientReferenceId: (props.donorname || "") + sep + (props.forumname || ""),
      successUrl:
        (import.meta.env.PUBLIC_SITEURL || import.meta.env.GATSBY_SITEURL) +
        "/donate/success-stripe",
      cancelUrl:
        (import.meta.env.PUBLIC_SITEURL || import.meta.env.GATSBY_SITEURL) +
        "/donate",
    });
    // If `redirectToCheckout` fails due to a browser or network
    // error, display the localized error message to your customer
    // using `error.message`.
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      className="flex items-center justify-center px-8 py-3 mt-2 mb-3 border border-transparent text-base font-medium font-display rounded-xl shadow-xs text-gray-50 bg-kodi-darker transition-all duration-500 ease-out select-none hover:bg-kodi hover:shadow-glow hover:-translate-y-0.5 focus:outline-hidden focus:ring-2 focus:ring-kodi/30"
    >
      <span>{props.button_text}</span>
    </button>
  );
}
