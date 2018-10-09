import React, { Component } from "react";
import CreditCardForm from "./CreditCardForm";
import ShippingSummary from "./ShippingSummary";

class CreditCardView extends Component {
  state = {};
  render() {
    return (
      <div>
        <h1>Payment</h1>
        
        {this.props.children}
        <ShippingSummary address={this.props.address} />
        <CreditCardForm />
  
      </div>
    );
  }
}

export default CreditCardView;
