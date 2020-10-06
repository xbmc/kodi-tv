import React from 'react';
import {
  Form,
  FormGroup,
  TextInput,
  FormSelect,
  FormHelperText,
  ActionGroup,
  Button,
} from '@patternfly/react-core';

const queryString = require('query-string');

class FormDonorWall extends React.Component {
  constructor(props) {
    super(props);
    let amount = ''
    let currency = ''
    let type = ''
    let validated = 'noval'
    if (typeof window !== 'undefined' && window.document) {
        let queryParsed = queryString.parse(window.location.search)
        amount = queryParsed.amount
        currency = queryParsed.currency
        type = queryParsed.type
        if (document.referrer.includes('stripe.com')) {
            validated = 'success'
        }
    }
    this.state = {
      forumusername: '',
      donorwallname: '',
      amount: amount,
      currency: currency,
      type: type,
      validated: validated,
    };
    this.handleForumUsernameChange = forumusername => {
      this.setState({ forumusername });
    };
    this.handleDonorWallNameChange = forumusername => {
      this.setState({ forumusername });
    };
  }

  render() {
    const { forumusername, donorwallname, amount, currency, type, validated } = this.state;
    if (validated !== 'success'){
        return ''
    }
    
    return (
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
          <Button isDisabled={validated !== 'success'} variant="primary" type="submit">Submit</Button>
        </ActionGroup>
      </Form>
    );
  }
}

export default FormDonorWall
