import React from 'react';
import { Button } from '@patternfly/react-core';


export default function ButtonStripe(props: {
  stripePromise: any | undefined
  price_id: string | undefined
  button_text: string | undefined
}) {
  const handleClick = async (event) => {
    // When the customer clicks on the button, redirect them to Checkout.
    const stripe = await props.stripePromise;
    const { error } = await stripe.redirectToCheckout({
      lineItems: [
        // Replace with the ID of your price
        {price: props.price_id, quantity: 1}
      ],
      mode: 'subscription',
      successUrl: 'https://pkscout.github.io/donate/success',
      cancelUrl: 'https://pkscout.github.io/donate',
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

