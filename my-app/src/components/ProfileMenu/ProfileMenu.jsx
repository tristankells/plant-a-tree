import React, { Component } from "react";
import "./ProfileMenu.css";
import ClearIcon from "@material-ui/icons/Clear";

export default class ProfileMenu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isGoing: '',
      numberOfGuests: ''
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit =  this.handleSubmit.bind(this);
    this.signUpSubmit = this.signUpSubmit.bind(this);
  }

  handleSubmit(event) {
    alert('Username entered: ' + this.state.isGoing + ", Password Entered: "+this.state.numberOfGuests);
    event.preventDefault();
  }

  signUpSubmit(event) {
    alert('Call Sign Up');
    event.preventDefault();
  }

  // Input change to handle form changes
  handleInputChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  render() {
    var visibility = "hide";

    if (this.props.menuVisibility) {
      visibility = "show";
    }

    return (
      <div id="profileMenu" className={visibility}>
        <ClearIcon onMouseDown={this.props.handleMouseDown} />
        {this.props.children}
        <br/>
        <b>Account</b>
        <br/>

        <form onSubmit={this.handleSubmit}>
          <label>
          Username:
            <input
              name="isGoing"
              type="text"
              checked={this.state.isGoing}
              onChange={this.handleInputChange} />
          </label>
          <br/>
          <label>
            Password:
            <input
              name="numberOfGuests"
              type="password"
              value={this.state.numberOfGuests}
              onChange={this.handleInputChange} />
          </label><br/>
          <input type="submit" value="Log In" />
        </form>

        <br/><br/>

        <form onSubmit={this.signUpSubmit}>
          <label>
          Username:
            <input
              name="isGoing"
              type="text"
              checked={this.state.isGoing}
              onChange={this.handleInputChange} />
          </label>
          <br/>
          <label>
            Password:
            <input
              name="numberOfGuests"
              type="password"
              value={this.state.numberOfGuests}
              onChange={this.handleInputChange} />
          </label><br/>
          <input type="submit" value="Sign Up" />
        </form>
        
      </div>
    );
  }
}
