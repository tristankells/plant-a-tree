import React, { Component } from "react";
import "./ProfileMenu.css";
import ClearIcon from "@material-ui/icons/Clear";
import Button from "@material-ui/core/Button";

const API = 'https://dog.ceo/api/breed/shiba/images/random';

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
    fetch(API)
    .then(response =>{
      if (response.ok) {
        console.log(response.json());
        return response.json();
      } else {
        throw new Error('Something went wrong with the API call');
      }
    })
    
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
        <ClearIcon className="slider-close-icon" onMouseDown={this.props.handleMouseDown} />
        {this.props.children}

        <div className="account-section__header">ACCOUNT</div>

        <div className="login-section__header"><b>Login:</b></div>

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
          <button className="submit-button" type="submit" value="Log In">Submit</button>
        </form>

        <div className="signup-section__header"><b>New?</b> Sign-up here:</div>

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
          </label>
          <br/>
          <button className="submit-button" type="submit" value="Sign Up">Submit</button>
        </form>
        
      </div>
    );
  }
}
