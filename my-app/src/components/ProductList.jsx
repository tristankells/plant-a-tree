import React, { Component } from "react";
import Product from "./Product";

//Product list contains all the Product components for the store
class ProductList extends Component {
  render() {
    return (
      <div className="productlist__container">
        {this.props.products.map((product, i) => {
          return (
            <Product
              product={product}
              handleAddItemClick={this.props.handleAddItemClick}
              key={i}
            />
          );
        })}
      </div>
    );
  }
}

export default ProductList;
