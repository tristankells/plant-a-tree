import React, { Component } from "react";
import "../style/CategoriesMenu.css";
import ClearIcon from "@material-ui/icons/Clear";

export default class CategoriesMenu extends Component {
  render() {
    var visibility = "hide";

    if (this.props.menuVisibility) {
      visibility = "show";
    }

    return (
      <div id="leftSliderMenu" className={visibility}>
        <ClearIcon className="slider-close-icon" onMouseDown={this.props.handleMouseDown} />
        {this.props.children}
      </div>
    );
  }
}
