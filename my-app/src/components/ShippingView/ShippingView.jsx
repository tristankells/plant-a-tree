import React, { Component } from "react";
import ShippingForm from "./ShippingForm";

class ShippingView extends Component {
  state = {};
  render() {
    return (
      <div className="shipping-view-div">
        <h2>PLEASE ENTER YOUR SHIPPING INFORMATION</h2>
        <ShippingForm
          handleAddressUpdate={this.props.handleAddressUpdate}
          handleShippingSubmit={this.props.handleShippingSubmit}
        />
      </div>
    );
  }
}

export default ShippingView;
