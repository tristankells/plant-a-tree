import React, { Component } from "react";
import "./ProfileMenu.css";
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

        <div className="login-section__header"><b>Login / Signup</b></div>

          <label>
          Username:
            <input
              name="username"
              type="text"
              checked={this.props.username}
              onChange={this.props.handleInputChange} />
          </label>
          <br/>
          <label>
            Password:
            <input
              name="password"
              type="password"
              value={this.props.password}
              onChange={this.props.handleInputChange} />
          </label><br/>
          <button className="profile-submit-button" type="submit" value="Log In" onClick={this.props.handleLoginSubmit}>Log In</button>
          <button className="profile-submit-button" type="submit" value="Sign Up" onClick={this.props.signUpSubmit}>Sign Up</button>
        
      </div>
    );
  }
}
export default ProfileMenu;