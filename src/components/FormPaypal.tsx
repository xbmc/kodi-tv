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


class FormPaypal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currency_code: 'USD',
      os0: 'Mention my name',
      os1: '',
      amount: '',
      validated: 'noval',
      selectedItem: 'One time donation',
    };
    this.onCurrencyChange = (currency, event) => {
      this.setState({ currency });
    };
    this.onMentionChange = (os0, event) => {
      this.setState({ os0 });
    };
    this.handleAmountChange = amount => {
      this.setState({ amount, validated: amount === '' ? 'noval' : /^\d+$/.test(amount) ? 'success' : 'error' });
    };
    this.handleForumUsernameChange = os1 => {
      this.setState({ os1 });
    };
    this.handleItemNameChange = (_, event) => {
      const { value } = event.currentTarget;
      this.setState({ selectedItem: value });
    };
    this.coptions = [
      { value: 'USD', label: '$ USD', disabled: false },
      { value: 'EUR', label: '€ EUR', disabled: false },
      { value: 'GBP', label: '£ GBP', disabled: false },
      { value: 'CAD', label: '$ CAD', disabled: false },
      { value: 'AUD', label: '$ AUD', disabled: false },
      { value: 'JPY', label: '¥ JPY', disabled: false }
    ];
    this.doptions = [
      { value: 'Mention my name', label: 'Mention my name', disabled: false },
      { value: 'Don\'t mention my name', label: 'Don\'t mention my name', disabled: false },
    ];
  }

  render() {
    const { currency_code, os0, os1, amount, validated, selectedItem } = this.state;
    
    return (
      <Form isHorizontal action="https://www.paypal.com/cgi-bin/webscr" method="post" accept-charset="UTF-8">
        <input type="hidden" name="business" value="donate@xbmc.org" />
        <input type="hidden" name="no_note" value="0" />
        <input type="hidden" name="no_shipping" value="1" />
        <input type="hidden" name="on0" value="Anonymity" />
        <input type="hidden" name="on1" value="Forum Name" />
        <input type="hidden" name="lc" value="en" />
        <input type="hidden" name="notify_url" value="https://kodi.tv/paypal-ipn-listen" />
        <input type="hidden" name="cmd" value="_donations" />
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
            onChange={this.onCurrencyChange}
            id="currency_code"
            name="currency_code"
            aria-label="Currency"
          >
            {this.coptions.map((option, index) => (
              <FormSelectOption isDisabled={option.disabled} key={index} value={option.value} label={option.label} />
            ))}
          </FormSelect>
        </FormGroup>
        <FormGroup label="Donor List Option" isRequired fieldId="form-os0">
          <FormSelect
            value={os0}
            onChange={this.onMentionChange}
            id="os0"
            name="os0"
            aria-label="Donor List Option"
          >
            {this.doptions.map((option, index) => (
              <FormSelectOption isDisabled={option.disabled} key={index} value={option.value} label={option.label} />
            ))}
          </FormSelect>
        </FormGroup>
        <FormGroup label="Forum Username" type="text" fieldId="os1">
          <TextInput
            value={os1}
            id="os1"
            name="os1"
            aria-describedby="Forum Username"
            onChange={this.handleForumUsernameChange}
          />
        </FormGroup>
        <FormGroup label="Donation Type" isRequired fieldId="item_name">
          <Radio
            isChecked={selectedItem === 'One time donation'}
            name="item_name"
            onChange={this.handleItemNameChange}
            label="One Time Donation"
            id="item_name"
            value="One time donation"
          />
          <Radio
            isChecked={selectedItem === 'recurring'}
            name="item_name"
            onChange={this.handleItemNameChange}
            label="Recurring (per month)"
            id="item_name"
            value="recurring"
          />
        </FormGroup>
        <ActionGroup>
          <Button isDisabled={validated !== 'success'} variant="primary" type="submit">Donate</Button>
        </ActionGroup>
      </Form>
    );
  }
}

export default FormPaypal
