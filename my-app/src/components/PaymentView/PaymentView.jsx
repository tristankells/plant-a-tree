import React, { Component } from "react";
import CreditCardForm from "./CreditCardForm";
import ShippingSummary from "./ShippingSummary";

class CreditCardView extends Component {
  state = {};
  render() {
    return (
      <div>
        <h1>Payment</h1>
        <h2 className="bold-underline">Order Summary</h2>
        <div className="raisedbox">
          <span className="bold-underline">Shopping Cart:</span>
          {this.props.children}
          <ShippingSummary address={this.props.address} />
        </div>
        <h2 className="bold-underline">Credit Card Info</h2>
        <CreditCardForm />
      </div>
    );
  }
}

export default CreditCardView;
