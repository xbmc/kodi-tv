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
  Radio,
} from '@patternfly/react-core';
import ExclamationCircleIcon from '@patternfly/react-icons/dist/js/icons/exclamation-circle-icon';

class FormPayPalOneTime extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currency_code: 'USD',
      amount: '',
      validated: 'noval',
      donor: '',
      forum: '',
    };
    this.onCurrencyCodeChange = (currency_code, event) => {
      this.setState({ currency_code });
    };
    this.handleAmountChange = amount => {
      this.setState({ amount, validated: amount === '' ? 'noval' : /^\d+$/.test(amount) ? 'success' : 'error' });
    };
    this.handleDonorChange = donor => {
      this.setState({ donor })
    }
    this.handleForumChange = forum => {
      this.setState({ forum })
    }
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
    const { currency_code, amount, validated, donor, forum } = this.state;
    // need to quote plus the selectedItem
    
    return (
      <Form isHorizontal action={process.env.GATSBY_PAYPAL_URL} method="post" accept-charset="UTF-8">
        <input type="hidden" name="business" value="donate-facilitator@xbmc.org" />
        <input type="hidden" name="no_note" value="0" />
        <input type="hidden" name="no_shipping" value="1" />
        <input type="hidden" name="lc" value="en" />
        <input type="hidden" name="on0" value="Donor Name" />
        <input type="hidden" name="on1" value="Forum Name" />
        <input type="hidden" name="cmd" value="_donations" />
        <FormGroup
          label="Name for Donor Wall"
          type="string"
          fieldId="os0"
        >
          <TextInput
            value={donor}
            id="os0"
            name="os0"
            aria-describedby="donor"
            onChange={this.handleDonorChange}
          />
        </FormGroup>
        <FormGroup
          label="Forum Username"
          type="string"
          fieldId="os1"
        >
          <TextInput
            value={forum}
            id="os1"
            name="os1"
            aria-describedby="forum"
            onChange={this.handleForumChange}
          />
        </FormGroup>
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
          fieldId="amount"
          validated={validated}
        >
          <TextInput
            validated={validated}
            value={amount}
            id="amount"
            name="amount"
            aria-describedby="amount"
            onChange={this.handleAmountChange}
          />
        </FormGroup>
        <FormGroup label="Currency" isRequired fieldId="form-currency_code">
          <FormSelect
            value={currency_code}
            onChange={this.onCurrencyCodeChange}
            id="currency_code"
            name="currency_code"
            aria-label="Currency"
          >
            {this.coptions.map((option, index) => (
              <FormSelectOption isDisabled={option.disabled} key={index} value={option.value} label={option.label} />
            ))}
          </FormSelect>
        </FormGroup>
        <ActionGroup>
          <Button isDisabled={validated !== 'success'} variant="primary" type="submit">Donate</Button>
        </ActionGroup>
      </Form>
    );
  }
}

export default FormPayPalOneTime
