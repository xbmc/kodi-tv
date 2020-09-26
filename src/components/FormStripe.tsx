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

const stripePromise = loadStripe('pk_test_AusUaUG7C3wVHkOQCs5WbcaO00ssVzaCom');


export default function FormStripe() {
  return (
    <Grid hasGutter>
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