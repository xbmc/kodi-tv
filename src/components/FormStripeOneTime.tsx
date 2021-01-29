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

class FormStripeOneTime extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currency: 'price_1HVRC7DOVUu6yhjNHWNMz6Zf',
      price: '',
      validated: 'noval',
      donor: '',
      forum: '',
      stripePromise: props.stripePromise
    };
    this.onChange = (currency, event) => {
      this.setState({ currency });
    };
    this.handleAmountChange = price => {
      this.setState({ price, validated: price === '' ? 'noval' : /^\d+$/.test(price) ? 'success' : 'error' });
    };
    this.handleDonorChange = donor => {
      this.setState({ donor })
    }
    this.handleForumChange = forum => {
      this.setState({ forum })
    }
    this.coptions = [
      { value: 'price_1HVRC7DOVUu6yhjNHWNMz6Zf', label: '$ USD', disabled: false },
      { value: 'price_1HVRHSDOVUu6yhjNhOGckxxU', label: '€ EUR', disabled: false },
      { value: 'price_1HVRNRDOVUu6yhjN0BsrpfOo', label: '£ GBP', disabled: false },
      { value: 'price_1HVRNpDOVUu6yhjNyoxCfwmQ', label: '$ CAD', disabled: false },
      { value: 'price_1HVROBDOVUu6yhjNuN2o56Ob', label: '$ AUD', disabled: false },
      { value: 'price_1HVROeDOVUu6yhjN83arFdQo', label: '¥ JPY', disabled: false }
    ];
  }

  render() {

    const { currency, price, validated, donor, forum, stripePromise } = this.state;

    const handleClick = async (event) => {
      // When the customer clicks on the button, redirect them to Checkout.
      let sep = '\u2028'
      let donorname = ''
      if (donor != ''){
        donorname = donor
      }
      let forumname = ''
      if (forum != ''){
        forumname = forum
      }
      let current_datetime = new Date()
      let datetime_str = current_datetime.getFullYear() + (current_datetime.getMonth() + 1) + current_datetime.getDate() + current_datetime.getHours() + current_datetime.getMinutes() + current_datetime.getSeconds() 
      let currency_label = ''
      switch(currency) {
        case 'price_1HVRC7DOVUu6yhjNHWNMz6Zf':
          currency_label = 'USD'
          break;
        case 'price_1HVRHSDOVUu6yhjNhOGckxxU':
          currency_label = 'EUR'
          break;
        case 'price_1HVRNRDOVUu6yhjN0BsrpfOo':
          currency_label = 'GBP'
          break;
        case 'price_1HVRNpDOVUu6yhjNyoxCfwmQ':
          currency_label = 'CAD'
          break;
        case 'price_1HVROBDOVUu6yhjNuN2o56Ob':
          currency_label = 'AUD'
          break;
        case 'price_1HVROeDOVUu6yhjN83arFdQo':
          currency_label = 'JPY'
          break;
      }
      const stripe = await stripePromise;
      const { error } = await stripe.redirectToCheckout({
        lineItems: [
          // Replace with the ID of your price
          {price: currency, quantity: parseInt(price)}
        ],
        mode: 'payment',
        submitType: 'donate',
        clientReferenceId: donorname + sep + forumname,
        successUrl: process.env.GATSBY_SITEURL + '/donate/success-stripe',
        cancelUrl: process.env.GATSBY_SITEURL + '/donate',
        });
      };

    return (
      <Form isHorizontal>
        <FormGroup
          label="Name for Donor Wall"
          type="string"
          fieldId="donor"
        >
          <TextInput
            value={donor}
            id="donor"
            name="donor"
            aria-describedby="donor"
            onChange={this.handleDonorChange}
          />
        </FormGroup>
        <FormGroup
          label="Forum Username"
          type="string"
          fieldId="forum"
        >
          <TextInput
            value={forum}
            id="forum"
            name="forum"
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
          helperTextInvalid="Amount has to be an integer"
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
        <ActionGroup>
          <Button isDisabled={validated !== 'success'} variant="primary" role="link" onClick={handleClick}>Donate</Button>
        </ActionGroup>
      </Form>
    );
  }
}

export default FormStripeOneTime
