import React, { Component } from "react";
import "./css/ShoppingCartSlider.css";
import ClearIcon from "@material-ui/icons/Clear";

export default class ShoppingCartSlider extends Component {
  render() {
    var visibility = "hide";

    if (this.props.menuVisibility) {
      visibility = "show";
    }

    return (
      <div id="flyoutMenu" className={visibility}>
        <ClearIcon className="slider-close-icon" onMouseDown={this.props.handleMouseDown} />
        {this.props.children}
      </div>
    );
  }
}
