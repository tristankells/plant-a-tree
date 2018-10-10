import React, { Component } from "react";
import "../style/CategoriesMenu.css";
import ClearIcon from "@material-ui/icons/Clear";
import ToggleButton from "@material-ui/lab/ToggleButton";
import ToggleButtonGroup from "@material-ui/lab/ToggleButtonGroup";

export default class CategoriesMenu extends Component {
  handleSizeChange = (event, searchSize) => {
    console.log(searchSize);
    this.props.updateSearchSize(searchSize);
  };

  handleCatergoryChange = (event, type) => {
    console.log(type);
    this.props.updateSearchType(type);
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
        <h3>Search By Product Catergory</h3>
        <ToggleButtonGroup
          value={this.props.searchType}
          exclusive
          onChange={this.handleCatergoryChange}
        >
          <ToggleButton value="all">All</ToggleButton>
          <ToggleButton value="trees">Trees</ToggleButton>
          <ToggleButton value="tools">Tools</ToggleButton>
          <ToggleButton value="pots">Pots & Containers</ToggleButton>
        </ToggleButtonGroup>
        <h3>Search By Product Size</h3>
        <ToggleButtonGroup
          value={this.props.searchSize}
          exclusive
          onChange={this.handleSizeChange}
        >
          <ToggleButton value="all">All</ToggleButton>
          <ToggleButton value="small">Small</ToggleButton>
          <ToggleButton value="medium">Medium</ToggleButton>
          <ToggleButton value="large">Large</ToggleButton>
        </ToggleButtonGroup>
      </div>
    );
  }
}
