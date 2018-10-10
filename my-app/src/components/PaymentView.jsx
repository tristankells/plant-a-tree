import React, { Component } from "react";
import CreditCardForm from "./CreditCardForm";
import ShippingSummary from "./ShippingSummary";

class CreditCardView extends Component {
  state = {};

  handlePaymentSubmit = () => {
    alert(
      "Thanks for your order. A confirmation email with your tracking number has sent to " +
        this.props.address.email
    );
  };
  render() {
    return (
      <div>
        <h1>Payment</h1>
        <h2 className="bold-underline">Order Summary</h2>
        <div className="raisedbox">
          <span className="bold-underline">Shopping Cart:</span>
          {this.props.children}
          <br />
          <ShippingSummary address={this.props.address} />
        </div>
        <h2 className="bold-underline">Credit Card Info</h2>
        <CreditCardForm handlePaymentSubmit={this.handlePaymentSubmit} />
      </div>
    );
  }
}

export default CreditCardView;
