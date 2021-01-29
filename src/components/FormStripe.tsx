import React from 'react';
import { 
  Grid,
  GridItem,
  TextContent,
  Text,
  TextVariants
} from '@patternfly/react-core';
import FormStripeOneTime from 'src/components/FormStripeOneTime'
import FormStripeRecurring from 'src/components/FormStripeRecurring'
import { loadStripe } from '@stripe/stripe-js';

const stripePromise = loadStripe(process.env.GATSBY_STRIPE_APIKEY);


export default function FormStripe() {
  return (
    <Grid hasGutter>
      <GridItem span={12}>
        <TextContent>
          <Text>If you want your name to appear on the donor wall, please provide it in the Name for Donor Wall field. If you want credit for your donation in the forums, please provide your forum username in the Forum Username field.</Text>
        </TextContent>
      </GridItem>
      <GridItem span={6}>
        <TextContent>
          <Text component={TextVariants.h3}>One Time Donation</Text>
        </TextContent>
        <FormStripeOneTime stripePromise={stripePromise} />
      </GridItem>
      <GridItem span={6}>
        <TextContent>
          <Text component={TextVariants.h3}>Recurring Donation</Text>
        </TextContent>
        <FormStripeRecurring stripePromise={stripePromise} />
      </GridItem>
    </Grid>
  )
}