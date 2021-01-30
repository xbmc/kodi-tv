import React from 'react';
import { 
  Grid,
  GridItem,
  TextContent,
  Text,
  TextVariants
} from '@patternfly/react-core';
import FormPayPalOneTime from 'src/components/FormPayPalOneTime'
import FormPayPalRecurring from 'src/components/FormPayPalRecurring'


export default function FormPayPal() {
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
        <FormPayPalOneTime />
      </GridItem>
      <GridItem span={6}>
        <TextContent>
          <Text component={TextVariants.h3}>Recurring Donation</Text>
        </TextContent>
        <FormPayPalRecurring />
      </GridItem>
    </Grid>
  )
}
