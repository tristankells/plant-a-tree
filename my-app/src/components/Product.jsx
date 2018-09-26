import React, { Component } from "react";
import tree from "../tree.jpg";

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
