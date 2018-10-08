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

        <div className="login-section__header"><b>Login:</b></div>

        <form onSubmit={this.props.handleLoginSubmit}>
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
          <button className="submit-button" type="submit" value="Log In">Submit</button>
        </form>

        <div className="signup-section__header"><b>New?</b> Sign-up here:</div>

        <form onSubmit={this.props.signUpSubmit}>
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
          </label>
          <br/>
          <button className="submit-button" type="submit" value="Sign Up">Submit</button>
        </form>
        
      </div>
    );
  }
}
export default ProfileMenu;