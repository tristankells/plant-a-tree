import React, { Component } from "react";
import { Redirect } from 'react-router-dom'
import "./css/ShippingForm.css";

class ShippingForm extends Component {
  state = {
    redirect: false
  }

  setRedirect = () => {
    alert("Bringing you through to the payment section");
    this.setState({
      redirect: true
    })
  }

  renderRedirect = () => {
    if (this.state.redirect) {
      return <Redirect to='/payment' />
    }
  }

  render() {
    return (
      <div>
        <br/>
        <h2 className="title">PLEASE ENTER YOUR SHIPPING INFORMATION</h2>
        <form id="shippingForm" action="">
          <label htmlFor="address">Delivery address:</label>
          <input className="address-input" id="address" type="text"
              onChange={this.props.handleInputChange} placeholder={this.props.address}/>
          <br />
          {this.renderRedirect()}
          <button className="submit-button" type="submit" value="Address Submit" onClick={this.setRedirect}>Continue</button>
        </form>
        {this.props.children}
      </div>
    );
  }
}

export default ShippingForm;
