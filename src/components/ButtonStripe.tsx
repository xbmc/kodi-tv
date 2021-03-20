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
    let current_datetime = new Date();
    let datetime_str =
      current_datetime.getFullYear() +
      (current_datetime.getMonth() + 1) +
      current_datetime.getDate() +
      current_datetime.getHours() +
      current_datetime.getMinutes() +
      current_datetime.getSeconds();
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
      className="border border-kodi bg-kodi text-gray-100 rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-kodi-darker focus:outline-none focus:shadow-outline"
    >
      <span>{props.button_text}</span>
    </button>
  );
}
