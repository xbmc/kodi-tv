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
      stripePromise: props.stripePromise
    };
    this.onChange = (currency, event) => {
      this.setState({ currency });
    };
    this.handleAmountChange = price => {
      this.setState({ price, validated: price === '' ? 'noval' : /^\d+$/.test(price) ? 'success' : 'error' });
    };
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

    const { currency, price, validated, stripePromise } = this.state;

    const handleClick = async (event) => {
      // When the customer clicks on the button, redirect them to Checkout.
      const stripe = await stripePromise;
      const { error } = await stripe.redirectToCheckout({
        lineItems: [
          // Replace with the ID of your price
          {price: currency, quantity: parseInt(price)}
        ],
        mode: 'payment',
        successUrl: 'https://pkscout.github.io/donate/success',
        cancelUrl: 'https://pkscout.github.io/donate',
        });
      };

    return (
      <Form isHorizontal>
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
