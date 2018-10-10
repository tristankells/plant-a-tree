import React, { Component } from "react";
import "../style/CategoriesMenu.css";
import ClearIcon from "@material-ui/icons/Clear";

export default class CategoriesMenu extends Component {
  handleSizeChange = event => {
    this.props.updateSearchSize(event.target.value);
  };

  handleCatergoryChange = event => {
    this.props.updateSearchType(event.target.value);
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
          <option value="all">all</option>
          <option value="small">small</option>
          <option value="medium">medium</option>
          <option value="large">large</option>
        </select>
        <select
          value={this.props.searchCatergory}
          onChange={this.handleCatergoryChange}
        >
          <option value="all">all</option>
          <option value="trees">Trees</option>
          <option value="tools">Tools</option>
          <option value="pots">Pots & Containers</option>
        </select>
      </div>
    );
  }
}
