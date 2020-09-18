import React from 'react';
import {
  Form,
  FormGroup,
  TextInput,
  FormSelect,
  FormHelperText,
  FormSelectOption,
  ActionGroup,
  Button,
} from '@patternfly/react-core';
import ExclamationCircleIcon from '@patternfly/react-icons/dist/js/icons/exclamation-circle-icon';


class FormBitcoin extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currency: 'USD',
      price: '',
      validated: 'noval',
      email: '',
    };
    this.onChange = (currency, event) => {
      this.setState({ currency });
    };
    this.handleAmountChange = price => {
      this.setState({ price, validated: price === '' ? 'noval' : /^\d+$/.test(price) ? 'success' : 'error' });
    };
    this.handleEmailChange = email => {
      this.setState({ email });
    };
    this.coptions = [
      { value: 'USD', label: '$ USD', disabled: false },
      { value: 'EUR', label: '€ EUR', disabled: false },
      { value: 'GBP', label: '£ GBP', disabled: false },
      { value: 'CAD', label: '$ CAD', disabled: false },
      { value: 'AUD', label: '$ AUD', disabled: false },
      { value: 'JPY', label: '¥ JPY', disabled: false }
    ];
  }

  render() {
    const { currency, price, validated, email } = this.state;
    
    return (
      <Form isHorizontal action="https://bitpay.com/checkout" method="post" accept-charset="UTF-8">
        <input type="hidden" name="action" value="checkout" />
        <input type="hidden" name="data" value="ZS/G0X8A4fQ6dmRox0yTiSFLGWWvPxhgaRJ9dSllM6gcuYdrhWI6MyoP8ZoUmNBfevOI9xN4uslrn9pe8X5PnnU1QlbbJi1qXooA3/Ag5taavL202nw2PlHQ6j1m47DyxhmllmGont0OHzzfr/pg513De3/dr3kHv/rAy2oIy3SZYddhYLud0PPvNnwg0wYS9PeWwjFkJGnAwvKmapT/l4+kdOQXS/xak7xHXrC04oIf926H30/mqtRIh6IK58cMFT4CBvgaN/GjWHRLF4dtwQ==" />
        <input type="hidden" name="form_id" value="kodi_donations_form" />
        <FormGroup
          isRequired
          label="Amount"
          type="number"
          helperText={
            <FormHelperText icon={<ExclamationCircleIcon />} isHidden={validated !== 'noval'}>
              Please enter an amount
            </FormHelperText>
          }
          helperTextInvalid="Amount has to be a number"
          helperTextInvalidIcon={<ExclamationCircleIcon />}
          fieldId="price"
          validated={validated}
        >
          <TextInput
            validated={validated}
            value={price}
            id="price"
            name="price"
            aria-describedby="price"
            onChange={this.handleAmountChange}
          />
        </FormGroup>
        <FormGroup label="Currency" isRequired fieldId="form-currency">
          <FormSelect
            value={currency}
            onChange={this.onChange}
            id="currency"
            name="currency"
            aria-label="Currency"
          >
            {this.coptions.map((option, index) => (
              <FormSelectOption isDisabled={option.disabled} key={index} value={option.value} label={option.label} />
            ))}
          </FormSelect>
        </FormGroup>
        <FormGroup label="Email" fieldId="form-orderid">
          <TextInput
            value={email}
            onChange={this.handleEmailChange}
            type="email"
            id="orderID"
            name="orderID"
            aria-describedby="email-helper"
          />
        </FormGroup>
        <ActionGroup>
          <Button isDisabled={validated !== 'success'} variant="primary" type="submit">Donate</Button>
        </ActionGroup>
      </Form>
    );
  }
}

export default FormBitcoin
