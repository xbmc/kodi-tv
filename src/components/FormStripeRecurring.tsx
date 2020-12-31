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
  Stack,
  StackItem
} from '@patternfly/react-core';
import ExclamationCircleIcon from '@patternfly/react-icons/dist/js/icons/exclamation-circle-icon';
import ButtonStripe from 'src/components/ButtonStripe'


class FormStripeOneTime extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currency: 'USD',
      donor: '',
      forum: '',
      stripePromise: props.stripePromise
    };
    this.onChange = (currency, event) => {
      this.setState({ currency });
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

    const { currency, donor, forum, stripePromise } = this.state;
    let level_one = {}
    let level_two = {}
    let level_three = {}
    let level_four = {}
    
    switch(currency) {
      case 'USD':
        level_one = {'price':'price_1HVP1ODOVUu6yhjNAUMDRlrr', 'text': '$5 a month', 'amount': '5'};
        level_two = {'price':'price_1HVP3mDOVUu6yhjNL7qjHUyW', 'text': '$10 a month', 'amount': '10'};
        level_three = {'price':'price_1HVP3kDOVUu6yhjN7kaQEJ8L', 'text': '$25 a month', 'amount': '25'};
        level_four = {'price':'price_1HVP3lDOVUu6yhjN1Z1gYPNf', 'text': '$50 a month', 'amount': '50'};
        break;
      case 'EUR':
        level_one = {'price':'price_1HVTTwDOVUu6yhjNVOWyY3hy', 'text': '€5 a month', 'amount': '5'};
        level_two = {'price':'price_1HVTU9DOVUu6yhjNQjBxH8mv', 'text': '€10 a month', 'amount': '10'};
        level_three = {'price':'price_1HVTULDOVUu6yhjNAMa8cdQg', 'text': '€20 a month', 'amount': '20'};
        level_four = {'price':'price_1HVTUWDOVUu6yhjNmtcktSi7', 'text': '€40 a month', 'amount': '40'};
        break;
      case 'GBP':
        level_one = {'price':'price_1HVTUuDOVUu6yhjNJr8FS5hm', 'text': '£5 a month', 'amount': '5'};
        level_two = {'price':'price_1HVTV4DOVUu6yhjNXZemCrK0', 'text': '£10 a month', 'amount': '10'};
        level_three = {'price':'price_1HVTVEDOVUu6yhjNg0MVZShG', 'text': '£20 a month', 'amount': '20'};
        level_four = {'price':'price_1HVTVTDOVUu6yhjNOpg1jIfU', 'text': '£40 a month', 'amount': '40'};
        break;
      case 'CAD':
        level_one = {'price':'price_1HVTVpDOVUu6yhjNZjhMEWO2', 'text': '$10 a month', 'amount': '10'};
        level_two = {'price':'price_1HVTW1DOVUu6yhjNg1TIoWum', 'text': '$15 a month', 'amount': '15'};
        level_three = {'price':'price_1HVTWCDOVUu6yhjNBjXG9Fe9', 'text': '$35 a month', 'amount': '35'};
        level_four = {'price':'price_1HVTWMDOVUu6yhjNDz4y9Jzt', 'text': '$65 a month', 'amount': '65'};
        break;
      case 'AUD':
        level_one = {'price':'price_1HVTWeDOVUu6yhjNWKXIu8WJ', 'text': '$10 a month', 'amount': '10'};
        level_two = {'price':'price_1HVTWtDOVUu6yhjNMZRWL8bX', 'text': '$15 a month', 'amount': '15'};
        level_three = {'price':'price_1HVTX4DOVUu6yhjNK21runP2', 'text': '$35 a month', 'amount': '35'};
        level_four = {'price':'price_1HVTXJDOVUu6yhjNl3UvxLrr', 'text': '$70 a month', 'amount': '70'};
        break;
      case 'JPY':
        level_one = {'price':'price_1HVTXgDOVUu6yhjNhETVDMbW', 'text': '¥500 a month', 'amount': '500'};
        level_two = {'price':'price_1HVTXtDOVUu6yhjNtDjMUo4W', 'text': '¥1000 a month', 'amount': '1000'};
        level_three = {'price':'price_1HVTYADOVUu6yhjNJoEjtHcY', 'text': '¥2500 a month', 'amount': '2500'};
        level_four = {'price':'price_1HVTYLDOVUu6yhjNziS2gXhj', 'text': '¥5000 a month', 'amount': '5000'};
        break;
    }

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
          <Stack hasGutter>
            <StackItem>
              <ButtonStripe
                stripePromise={stripePromise}
                amount={level_one.amount}
                currency={currency}
                price_id={level_one.price}
                button_text={level_one.text}
              />
            </StackItem>
            <StackItem>
              <ButtonStripe
                stripePromise={stripePromise}
                amount={level_two.amount}
                currency={currency}
                price_id={level_two.price}
                button_text={level_two.text}
              />
            </StackItem>
            <StackItem>
              <ButtonStripe
                stripePromise={stripePromise}
                amount={level_three.amount}
                currency={currency}
                price_id={level_three.price}
                button_text={level_three.text}
              />
            </StackItem>
            <StackItem>
              <ButtonStripe
                stripePromise={stripePromise}
                amount={level_four.amount}
                currency={currency}
                price_id={level_four.price}
                button_text={level_four.text}
              />
            </StackItem>
          </Stack>
        </ActionGroup>
      </Form>
    );
  }
}

export default FormStripeOneTime
