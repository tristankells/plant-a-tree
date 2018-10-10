import React, { Component } from "react";
import "../style/CategoriesMenu.css";
import ClearIcon from "@material-ui/icons/Clear";
import ToggleButton from "@material-ui/lab/ToggleButton";
import ToggleButtonGroup from "@material-ui/lab/ToggleButtonGroup";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";

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
        <div>
          {/* Form for search by catergory */}
          <FormControl className="radioButtonFormControl" component="fieldset">
            <FormLabel component="legend">
              Search By Product Catergory
            </FormLabel>
            <RadioGroup
              value={this.props.searchType}
              exclusive
              onChange={this.handleCatergoryChange}
            >
              <FormControlLabel value="all" control={<Radio />} label={"All"} />
              <FormControlLabel
                value="trees"
                control={<Radio />}
                label={"Trees"}
              />
              <FormControlLabel
                value="tools"
                control={<Radio />}
                label={"Tools"}
              />
              <FormControlLabel
                value="pots"
                control={<Radio />}
                label={" Pots & Containers"}
              />
            </RadioGroup>
          </FormControl>
          {/* Form for search by size */}
          <FormControl className="radioButtonFormControl" component="fieldset">
            <FormLabel component="legend">Search By Product Size</FormLabel>
            <RadioGroup
              value={this.props.searchSize}
              exclusive
              onChange={this.handleSizeChange}
            >
              <FormControlLabel value="all" control={<Radio />} label={"All"} />
              <FormControlLabel
                value="small"
                control={<Radio />}
                label={"Small"}
              />
              <FormControlLabel
                value="medium"
                control={<Radio />}
                label={"Medium"}
              />
              <FormControlLabel
                value="large"
                control={<Radio />}
                label={"Large"}
              />
            </RadioGroup>
          </FormControl>
        </div>
      </div>
    );
  }
}
