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
        img: "/img/birch-trees.jpg",
        type: "tree"
      },
      {
        name: "Red Wood",
        price: 20.0,
        quantity: 1,
        size: "small",
        img: "/img/red-wood.jpg",
        type: "tree"
      },
      {
        name: "Palm",
        price: 80.0,
        quantity: 1,
        size: "small",
        img: "/img/palm-tree.jpg",
        type: "tree"
      },
      {
        name: "Pine",
        price: 80.0,
        quantity: 1,
        size: "medium",
        img: "/img/pine.jpg",
        type: "tree"
      },
      {
        name: "Oak",
        price: 80.0,
        quantity: 1,
        size: "medium",
        img: "/img/tree.jpg",
        type: "tree"
      },
      {
        name: "Shears",
        price: 10.0,
        quantity: 1,
        img: "/img/shears.jpg",
        type: "tools"
      },
      {
        name: "Shovel",
        price: 20.0,
        quantity: 1,
        img: "/img/shovel.jpg",
        type: "tools"
      },
      {
        name: "Brown Pot",
        price: 10.0,
        quantity: 1,
        img: "/img/brown-pot.jpg",
        type: "pots"
      },
      {
        name: "Black Pot",
        price: 15.0,
        quantity: 1,
        img: "/img/black-pot.jpg",
        type: "pots"
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
