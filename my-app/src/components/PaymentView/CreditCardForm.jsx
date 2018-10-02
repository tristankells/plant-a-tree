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
      cardNumber: value
    });
  };

  handleCardCVCChange = value => {
    this.setState({
      cardNumber: value
    });
  };

  render() {
    return (
      <div>
        <CreditCardInput
          cardNumberInputProps={{
            value: this.state.cardNumber,
            onChange: this.handleCardNumberChange
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
