import React, { Component } from "react";
import "../style/Backdrop.css";

export default class Backdrop extends Component {
  
  render() {
    var visibility = "hide";

    if (this.props.backDropVisibility) {
      visibility = "show";
    }

    return(
        <div id="backdrop" onMouseDown={this.props.handleBackdropClick} className={visibility}></div>
    );
  }
}