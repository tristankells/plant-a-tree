import React, { Component } from "react";
import "./CategoriesMenu.css";

export default class CategoriesMenu extends Component {
  render() {
    var visibility = "hide";

    if (this.props.menuVisibility) {
      visibility = "show";
    }

    return (
      <div id="leftSliderMenu" onMouseDown={this.props.handleMouseDown} className={visibility}>
        {this.props.children}
      </div>
    );
  }
}
