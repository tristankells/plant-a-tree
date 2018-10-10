import React, { Component } from "react";
import ShippingForm from "./ShippingForm";

class ShippingView extends Component {
  state = {};
  render() {
    return (
      <div className="shipping-view-div">
        <div style={{ font: "Arial Narrow", fontWeight: "bold" }}>
          <br /> SHIPPING INFORMATION
        </div>
        <ShippingForm
          handleAddressUpdate={this.props.handleAddressUpdate}
          handleShippingSubmit={this.props.handleShippingSubmit}
        />
      </div>
    );
  }
}

export default ShippingView;
