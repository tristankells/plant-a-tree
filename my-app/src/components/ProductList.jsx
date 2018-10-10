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
        type: "trees"
      },
      {
        name: "Red Wood",
        price: 20.0,
        quantity: 1,
        size: "small",
        img: "/img/red-wood.jpg",
        type: "trees"
      },
      {
        name: "Palm",
        price: 80.0,
        quantity: 1,
        size: "small",
        img: "/img/palm-tree.jpg",
        type: "trees"
      },
      {
        name: "Pine",
        price: 80.0,
        quantity: 1,
        size: "medium",
        img: "/img/pine.jpg",
        type: "trees"
      },
      {
        name: "Oak",
        price: 80.0,
        quantity: 1,
        size: "medium",
        img: "/img/tree.jpg",
        type: "trees"
      },
      {
        name: "Shears",
        price: 10.0,
        quantity: 1,
        size: "small",
        img: "/img/shears.jpg",
        type: "tools"
      },
      {
        name: "Shovel",
        price: 20.0,
        quantity: 1,
        size: "medium",
        img: "/img/shovel.jpg",
        type: "tools"
      },
      {
        name: "Brown Pot",
        price: 10.0,
        quantity: 1,
        size: "small",
        img: "/img/brown-pot.jpg",
        type: "pots"
      },
      {
        name: "Black Pot",
        price: 15.0,
        quantity: 1,
        size: "small",
        img: "/img/black-pot.jpg",
        type: "pots"
      }
    ]
  };

  productsFilteredByAllSearch = products => {
    products = this.productsFilteredByType(products);
    products = this.productsFilteredByTreeSize(products);
    return products;
  };

  //Products filtered by catergory
  productsFilteredByType = products => {
   
    if (this.props.searchType === "all") {
    } else {
      products = products.filter(product => {
        return product.type === this.props.searchType;
      });
    }
    return products;
  };
  //Filters products by tree size catergories
  productsFilteredByTreeSize = products => {
    console.log(this.props.searchSize);
    if (this.props.searchSize === "all") {
    } else {
      products = products.filter(product => {
        return product.size === this.props.searchSize;
      });
    }
    return products;
  };
  render() {
    console.log(this.props.searchType);
    return (
      <div className="productlist__container">
        {this.productsFilteredByAllSearch(this.state.products).map(
          (product, i) => {
            return (
              <Product
                product={product}
                handleAddItemClick={this.props.handleAddItemClick}
                key={i}
              />
            );
          }
        )}
      </div>
    );
  }
}

export default ProductList;
