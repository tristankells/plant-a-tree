import React, { Component } from "react";

class CreditCardForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      cardNumber: "",
      month: 1,
      year: 2018
    };
  }

  handleNameChange = event => {
    this.setState({ name: event.target.value });
  };

  handleCardNumberChange = event => {
    this.setState({ cardNumber: event.target.value });
  };

  handleMonthChange = event => {
    this.setState({ month: event.target.value });
  };

  handleYearChange = event => {
    this.setState({ year: event.target.value });
  };

  handleCVCChange = event => {
    this.setState({ year: event.target.value });
  };

  handleSubmit(event) {
    if (
      this.state.fullName.length === 0 ||
      this.state.steet.length === 0 ||
      this.state.suburbTown.length === 0 ||
      this.state.city.length === 0 ||
      this.state.postcode.length === 0
    ) {
      alert("Please fill all fields");
    } else {
      this.props.handleAddressUpdate({
        fullName: this.state.fullName,
        steet: this.state.steet,
        suburbTown: this.state.suburbTown,
        city: this.state.city,
        postcode: this.state.postcode
      });
      this.props.handleShippingSubmit();
    }
    event.preventDefault();
  }
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>Name on card </label>
        <br />
        <input
          type="text"
          value={this.state.value}
          onChange={this.handleNameChange}
        />
        <br />
        <label>Card number</label>

        <input
          type="text"
          value={this.state.value}
          onChange={this.handleCardNumberChange}
        />

        <label>
          Expiration date
          <br />
          <select value={this.state.month} onChange={this.handleMonthChange}>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
            <option value="9">9</option>
            <option value="10">10</option>
            <option value="11">11</option>
            <option value="12">12</option>
          </select>
          <select value={this.state.year} onChange={this.handleYearChange}>
            <option value="2018">2018</option>
            <option value="2019">2019</option>
            <option value="2020">2020</option>
            <option value="2021">2021</option>
            <option value="2022">2022</option>
            <option value="2023">2023</option>
            <option value="2024">2024</option>
            <option value="2025">2025</option>
            <option value="2026">2026</option>
          </select>
        </label>
        <label>
          CVC
          <br />
          <input
            type="text"
            value={this.state.cvc}
            onChange={this.handleCardNumberChange}
          />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

export default CreditCardForm;
