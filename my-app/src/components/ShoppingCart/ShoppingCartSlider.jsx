import React, { Component } from "react";
import "./css/ShoppingCartSlider.css";
import ShoppingCart from "./ShoppingCart";

export default class ShoppingCartSlider extends Component {
  render() {
    var visibility = "hide";

    if (this.props.menuVisibility) {
      visibility = "show";
    }

    return (
      <div
        id="flyoutMenu"
        onMouseDown={this.props.handleMouseDown}
        className={visibility}
      >
        {this.props.children}
      </div>
    );
  }
}
