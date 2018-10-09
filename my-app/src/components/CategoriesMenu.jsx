import React, { Component } from "react";
import "../style/CategoriesMenu.css";
import ClearIcon from "@material-ui/icons/Clear";

export default class CategoriesMenu extends Component {
  handleSizeChange = event => {
    this.props.updateSearchSize(event.target.value);
  };
  render() {
    var visibility = "hide";

    if (this.props.menuVisibility) {
      visibility = "show";
    }

    return (
      <div id="leftSliderMenu" className={visibility}>
        <ClearIcon
          className="slider-close-icon"
          onMouseDown={this.props.handleMouseDown}
        />
        <select value={this.props.searchSize} onChange={this.handleSizeChange}>
          <option value="small">small</option>
          <option value="medium">medium</option>
          <option value="large">large</option>
        </select>
      </div>
    );
  }
}
