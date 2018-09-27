import React, { Component } from "react";
import tree from "../tree.jpg";
import Button from "@material-ui/core/Button";
import AddIcon from "@material-ui/icons/Add";

//Displays an image, name, price and add to shopping cart button for all items in the store
class Product extends Component {
  render() {
    const product = this.props.product;
    return (
      <div className="Product">
        <img src={tree} alt="Image is not ready" />
        <br />
        <span className="ProductName"> {product.name} - </span>
        <span> ${product.price.toFixed(2)}</span>
        <br />
        <Button onClick={() => this.props.handleAddItemClick(product)}>
          <AddIcon />
        </Button>
      </div>
    );
  }
}

export default Product;
