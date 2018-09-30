import React, { Component } from "react";
import "./ProfileMenu.css";
import ClearIcon from "@material-ui/icons/Clear";

export default class ProfileMenu extends Component {
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
        <b>Account login and settings section</b>
      </div>
    );
  }
}
