import React, { Component } from "react";
import CreditCardInput from "react-credit-card-input";

class CreditCardForm extends Component {
  state = {
    cardNumber: "",
    expiry: "",
    cvc: ""
  };

  handleCardNumberChange = value => {
    this.setState({
      cardNumber: value
    });
  };

  handleCardExpiryChange = value => {
    this.setState({
      expiry: value
    });
  };

  handleCardCVCChange = value => {
    this.setState({
      cvc: value
    });
  };

  render() {
    return (
      <div>
        <CreditCardInput
          cardNumberInputProps={{
            value: this.state.cardNumber,
            onChange: input => this.handleCardNumberChange(input.value)
          }}
          cardExpiryInputProps={{
            value: this.state.expiry,
            onChange: this.handleCardExpiryChange
          }}
          cardCVCInputProps={{
            value: this.state.cvc,
            onChange: this.handleCardCVCChange
          }}
          fieldClassName="input"
        />
      </div>
    );
  }
}

export default CreditCardForm;
