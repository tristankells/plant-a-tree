import React, { Component } from "react";
import tree from "../tree.jpg";

//Displays an image, name, price and add to shopping cart button for all items in the store
class Product extends Component {
  render() {
    const product = this.props.product;
    return (
      <div className="Product">
        <img src={tree} alt="Image is not ready" />
        <div>Name : {product.name} </div>
        <div>Price : {product.price} </div>
        <button onClick={() => this.props.handleAddItemClick(product)}>
          ADD TO CART
        </button>
      </div>
    );
  }
}

export default Product;
