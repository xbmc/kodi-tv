import React from 'react';
import { 
  Split,
  SplitItem,
  TextContent,
  Text,
  TextVariants
} from '@patternfly/react-core';
import FormStripeOneTime from 'src/components/FormStripeOneTime'


export default function FormStripe() {
  return (
    <Split hasGutter>
      <SplitItem>
        content
      </SplitItem>
      <SplitItem isFilled>
        <TextContent>
          <Text component={TextVariants.h3}>One Time Donation</Text>
        </TextContent>
        <FormStripeOneTime />
      </SplitItem>
    </Split>  
  )
}