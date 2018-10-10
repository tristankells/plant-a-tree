import React, { Component } from "react";
import Button from "@material-ui/core/Button/Button";

class ShippingForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fullName: "",
      street: "",
      suburbTown: "",
      city: "",
      postcode: "",
      email: ""
    };

    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleStreetChange = this.handleStreetChange.bind(this);
    this.handleSuburbTownChange = this.handleSuburbTownChange.bind(this);
    this.handleCityChange = this.handleCityChange.bind(this);
    this.handlePostcodeChange = this.handlePostcodeChange.bind(this);
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleEmailChange(event) {
    this.setState({ email: event.target.value });
  }

  handleNameChange(event) {
    this.setState({ fullName: event.target.value });
  }

  handleStreetChange(event) {
    this.setState({ street: event.target.value });
  }

  handleSuburbTownChange(event) {
    this.setState({ suburbTown: event.target.value });
  }

  handleCityChange(event) {
    this.setState({ city: event.target.value });
  }

  handlePostcodeChange(event) {
    this.setState({ postcode: event.target.value });
  }

  handleSubmit(event) {
    if (
      this.state.fullName.length === 0 ||
      this.state.street.length === 0 ||
      this.state.suburbTown.length === 0 ||
      this.state.city.length === 0 ||
      this.state.postcode.length === 0
    ) {
      alert("Please fill all fields");
    } else {
      this.props.handleAddressUpdate({
        fullName: this.state.fullName,
        street: this.state.street,
        suburbTown: this.state.suburbTown,
        city: this.state.city,
        postcode: this.state.postcode,
        email: this.state.email
      });
      this.props.handleShippingSubmit();
    }
    event.preventDefault();
  }
  render() {
    return (
      <div>
        <Button>RETURN TO STORE</Button>
        <div className="raisedbox">
          <form className="shipping-form" onSubmit={this.handleSubmit}>
            <span>Full Name:</span>
            <input
              type="text"
              value={this.state.fullName}
              onChange={this.handleNameChange}
            />
            <span>Email:</span>
            <input
              type="text"
              value={this.state.email}
              onChange={this.handleEmailChange}
            />
            <span>Street No & Name:</span>
            <input
              type="text"
              value={this.state.street}
              onChange={this.handleStreetChange}
            />
            <span>Suburb / Town:</span>
            <input
              type="text"
              value={this.state.suburbTown}
              onChange={this.handleSuburbTownChange}
            />
            <span>City:</span>
            <input
              type="text"
              value={this.state.city}
              onChange={this.handleCityChange}
            />
            <span>Postcode:</span>
            <input
              type="text"
              value={this.state.postcode}
              onChange={this.handlePostcodeChange}
            />
            <input type="submit" value="Submit" />
          </form>
        </div>
      </div>
    );
  }
}

export default ShippingForm;
