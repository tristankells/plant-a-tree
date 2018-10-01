import React, { Component } from "react";
import "./Backdrop.css";

export default class Backdrop extends Component {
  
  render() {
    var visibility = "hide";

    if (this.props.backDropVisibility) {
      visibility = "show";
    }

    return(
        <div id="backdrop" className={visibility}></div>
    );
  }
}