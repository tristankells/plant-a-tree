import React, { Component } from "react";
import Product from "./Product";

//Product list contains all the Product components for the store
class ProductList extends Component {
  state = {
    products: [
      {
        name: "Birch",
        price: 100.0,
        quantity: 1,
        size: "small"
      },
      {
        name: "Red Wood",
        price: 20.0,
        quantity: 1,
        size: "small"
      },
      {
        name: "Palm",
        price: 80.0,
        quantity: 1,
        size: "small"
      },
      {
        name: "Pine",
        price: 80.0,
        quantity: 1,
        size: "medium"
      },
      {
        name: "Oak",
        price: 80.0,
        quantity: 1,
        size: "medium"
      },
      {
        name: "Ash",
        price: 80.0,
        quantity: 1,
        size: "medium"
      },
      {
        name: "Maple",
        price: 80.0,
        quantity: 1,
        size: "large"
      }
    ]
  };

  //Filters tree by search catergories
  productsFilteredByTree = () => {
    var filteredProducts = this.state.products.filter(product => {
      return product.size === this.props.searchSize;
    });
    return filteredProducts;
  };
  render() {
    return (
      <div className="productlist__container">
        {this.productsFilteredByTree().map((product, i) => {
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
