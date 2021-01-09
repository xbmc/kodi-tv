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
  Text, TextContent,
} from '@patternfly/react-core';
import ExclamationCircleIcon from '@patternfly/react-icons/dist/js/icons/exclamation-circle-icon';
import config from "../../gatsby-site-config"

class FormPaypal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currency_code: 'USD',
      amount: '',
      validated: 'noval',
      selectedItem: 'One time donation',
      qpselectedItem: 'One+time+donation',
      donor: '',
      forum: '',
    };
    this.onCurrencyCodeChange = (currency_code, event) => {
      this.setState({ currency_code });
    };
    this.handleAmountChange = amount => {
      this.setState({ amount, validated: amount === '' ? 'noval' : /^\d+$/.test(amount) ? 'success' : 'error' });
    };
    this.handleItemNameChange = (_, event) => {
      const { value } = event.currentTarget;
      this.setState({ selectedItem: value });
      if (value == 'recurring') {
        this.setState({qpselectedItem: 'Recurring+(per+month)'})
      } else {
        this.setState({qpselectedItem: 'One+time+donation'})      
      }
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
    const { currency_code, amount, validated, selectedItem, qpselectedItem, donor, forum } = this.state;
    // need to quote plus the selectedItem
    
    return (
      <React.Fragment>
        <TextContent>
          <Text>If you want your name to appear on the donor wall, please provide it in the Name for Donor Wall field. If you want credit for your donation in the forums, please provide your forum username in the Forum Username field.</Text>
        </TextContent>    
      <Form isHorizontal action="https://www.sandbox.paypal.com//cgi-bin/webscr" method="post" accept-charset="UTF-8">
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
      </React.Fragment>
    );
  }
}

export default FormPaypal
