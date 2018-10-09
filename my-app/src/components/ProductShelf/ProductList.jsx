import React, { Component } from "react";
import Product from "./Product";

//Product list contains all the Product components for the store
class ProductList extends Component {
  state = {
    products: [
      {
        name: "Birch",
        price: 100.0,
        quantity: 1
      },
      {
        name: "Red Wood",
        price: 20.0,
        quantity: 1
      },
      {
        name: "Palm",
        price: 80.0,
        quantity: 1
      }
    ]
  };
  render() {
    return (
      <div className="productlist__container">
        {this.state.products.map((product, i) => {
        
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
