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
      clientReferenceId: props.donorname + sep + props.forumname,
      successUrl: process.env.GATSBY_SITEURL + "/donate/success-stripe",
      cancelUrl: process.env.GATSBY_SITEURL + "/donate",
    });
    // If `redirectToCheckout` fails due to a browser or network
    // error, display the localized error message to your customer
    // using `error.message`.
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      className="my-2 justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-kodi hover:bg-kodi-darker focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-kodi-lighter"
    >
      <span>{props.button_text}</span>
    </button>
  );
}
