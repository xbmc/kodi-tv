import React from 'react';
import {
  Form,
  FormGroup,
  TextInput,
  FormSelect,
  FormHelperText,
  ActionGroup,
  Button,
  Text,
  TextContent,
  TextVariants
} from '@patternfly/react-core';

const queryString = require('query-string');

class FormDonorWall extends React.Component {
  constructor(props) {
    super(props);
    let amount = ''
    let currency = ''
    let type = ''
    let provider = ''
    let validated = 'noval'
    if (typeof window !== 'undefined' && window.document) {
        let queryParsed = queryString.parse(window.location.search)
        amount = queryParsed.amount
        currency = queryParsed.currency
        type = queryParsed.type
        if (document.referrer.includes('stripe.com')) {
            validated = 'success'
            provider = 'Stripe'
        } else if (document.referrer.includes('paypal.com')) {
            validated = 'success'
            provider = 'Paypal'        
        }
    }
    this.state = {
      forumusername: '',
      donorwallname: '',
      amount: amount,
      currency: currency,
      type: type,
      provider: provider,
      validated: validated,
    };
    this.handleForumUsernameChange = forumusername => {
      this.setState({ forumusername });
    };
    this.handleDonorWallNameChange = donorwallname => {
      this.setState({ donorwallname });
    };
  }

  render() {
    const { forumusername, donorwallname, amount, currency, type, provider, validated } = this.state;
    if (validated !== 'success'){
        return ''
    }
    
    return (
      <React.Fragment>
        <TextContent>
          <Text component={TextVariants.h1}>Donation Successful</Text>
          <Text>Thank you for your donation to the Kodi Foundation. You will receive an email receipt from {provider} with the details of your donation. Plese note that if you live in the USA, your donation may qualify as a charitable contribution.</Text>
          <Text component={TextVariants.h2}>Forum and Donor Wall Recognition</Text>
          <Text>If you would like to be recognized on our donor wall or your forum profile, please complete the information below. If you want the donation noted but not your identity, you can put "Anonymous" in the Donor wall name field.</Text>
        </TextContent>
        <Form isHorizontal>
          <input type="hidden" name="amount" value={amount} />
          <input type="hidden" name="currency" value={currency} />
          <input type="hidden" name="type" value={type} />
          <FormGroup label="Forum username" type="text" fieldId="forumusername">
            <TextInput
              value={forumusername}
              id="forumusername"
              name="forumusername"
              aria-describedby="Forum username"
              onChange={this.handleForumUsernameChange}
            />
          </FormGroup>
          <FormGroup label="Donor wall name" type="text" fieldId="donorwallname">
            <TextInput
              value={donorwallname}
              id="donorwallname"
              name="donorwallname"
              aria-describedby="Donor wall name"
              onChange={this.handleDonorWallNameChange}
            />
          </FormGroup>
          <ActionGroup>
            <Button isDisabled={forumusername == '' && donorwallname == ''} variant="primary" type="submit">Submit</Button>
          </ActionGroup>
        </Form>
      </React.Fragment>
    );
  }
}

export default FormDonorWall
