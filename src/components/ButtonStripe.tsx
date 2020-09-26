import React from 'react';
import { Button } from '@patternfly/react-core';


export default function ButtonStripe(props: {
  stripe_promise: any | undefined
  price_id: string | undefined
  mode: string | undefined
  button_text: string | undefined
}) {
  const handleClick = async (event) => {
    // When the customer clicks on the button, redirect them to Checkout.
    const stripe = await props.stripe_promise;
    const { error } = await stripe.redirectToCheckout({
      lineItems: [
        // Replace with the ID of your price
        {price: props.price_id, quantity: 3}
      ],
      mode: props.mode,
      successUrl: 'https://example.com/success',
      cancelUrl: 'https://example.com/cancel',
    });
    // If `redirectToCheckout` fails due to a browser or network
    // error, display the localized error message to your customer
    // using `error.message`.
  };
  return (
    <Button variant="primary" role="link" onClick={handleClick}>
      {props.button_text}
    </Button>
  );
}

