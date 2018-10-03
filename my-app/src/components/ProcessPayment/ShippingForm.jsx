import React, { Component } from "react";
import "./css/ShippingForm.css";

class ShippingForm extends Component {
  state = {};
  render() {
    return (
      <div>
        <h2>PLEASE ENTER YOUR SHIPPING INFORMATION</h2>
        <form id="shippingForm" action="">
          <label htmlFor="fullNameIn">Full Name:</label>
          <input id="fullNameIn" type="text" />
          <label htmlFor="adressLine1In">Adress Line 1:</label>
          <input id="adressLine1In" type="text" />
          <label htmlFor="adressLine2In">Adress Line 2:</label>
          <input id="adressLine2In" type="text" />
          <label htmlFor="cityIn">City:</label>
          <input id="cityIn" type="text" />
          <label htmlFor="regionIn">Region:</label>
          <input id="regionIn" type="text" />
          <label htmlFor="zipIn">ZIP:</label>
          <input id="zipIn" type="text" />
          <label htmlFor="phoneNumberIn">Phone Number:</label>
          <input id="phoneNumberIn" type="text" />
          <br />
        </form>
        {this.props.children}
      </div>
    );
  }
}

export default ShippingForm;
