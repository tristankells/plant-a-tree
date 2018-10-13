import React, { Component } from "react";
import "../style/ProfileMenu.css";
import ClearIcon from "@material-ui/icons/Clear";
import Button from "@material-ui/core/Button";

class ProfileMenu extends Component {
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

        <div className="login-section__header"><b>Signup</b></div>

          <label>
          Username:
            <input
              name="username"
              type="text"
              checked={this.props.username}
              onChange={this.props.handleInputChange} />
          </label><br/>
          <label>
            Password:
            <input
              name="password"
              type="password"
              value={this.props.password}
              onChange={this.props.handleInputChange} />
          </label><br/><br/>
          <label>
            Full name:
            <input
              name="fullName"
              type="text"
              value={this.props.fullname}
              onChange={this.props.handleInputChange} />
          </label><br/>
          <label>
            Email:
            <input
              name="email"
              type="text"
              value={this.props.email}
              onChange={this.props.handleInputChange} />
          </label><br/>
          <label>
            Street & no:
            <input
              name="address"
              type="text"
              value={this.props.address}
              onChange={this.props.handleInputChange} />
          </label><br/>
          <label>
            Suburb:
            <input
              name="town"
              type="text"
              value={this.props.town}
              onChange={this.props.handleInputChange} />
          </label><br/>
          <label>
            City:
            <input
              name="city"
              type="text"
              value={this.props.city}
              onChange={this.props.handleInputChange} />
          </label><br/>
          <label>
            Postcode:
            <input
              name="postcode"
              type="text"
              value={this.props.postcode}
              onChange={this.props.handleInputChange} />
          </label><br/>
          
          <button className="profile-submit-button" type="submit" value="Sign Up" onClick={this.props.signUpSubmit}>Sign Up</button>
        
      </div>
    );
  }
}
export default ProfileMenu;