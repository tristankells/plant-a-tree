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
        size: "small",
        img: "/img/birch-trees.jpg"
      },
      {
        name: "Red Wood",
        price: 20.0,
        quantity: 1,
        size: "small",
        img: "/img/red-wood.jpg"
      },
      {
        name: "Palm",
        price: 80.0,
        quantity: 1,
        size: "small",
        img: "/img/palm-tree.jpg"
      },
      {
        name: "Pine",
        price: 80.0,
        quantity: 1,
        size: "medium",
        img: "/img/pine.jpg"
      },
      {
        name: "Oak",
        price: 80.0,
        quantity: 1,
        size: "medium",
        img: "/img/tree.jpg"
      },
      {
        name: "Ash",
        price: 80.0,
        quantity: 1,
        size: "medium",
        img: "/img/tree.jpg"
      },
      {
        name: "Maple",
        price: 80.0,
        quantity: 1,
        size: "large",
        img: "/img/tree.jpg"
      }
    ]
  };

  //Filters tree by search catergories
  productsFilteredByTree = () => {
    var filteredProducts = this.state.products;
    if (this.props.searchSize === "all") {
    } else {
      filteredProducts = filteredProducts.filter(product => {
        return product.size === this.props.searchSize;
      });
    }
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
