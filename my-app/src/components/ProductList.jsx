import React, { Component } from "react";
import Product from "./Product";

//Product list contains all the Product components for the store
class ProductList extends Component {
  state = {
    products: [
      {
        name: "Lemon Tree",
        price: 40.0,
        quantity: 1,
        size: "small",
        img: "/img/trees/lemon_tree2.jpg",
        type: "trees"
      },
      {
        name: "Orange Tree",
        price: 30.0,
        quantity: 1,
        size: "Large",
        img: "/img/trees/orange_tree.jpg",
        type: "trees"
      },
      {
        name: "Evergreen",
        price: 100.0,
        quantity: 1,
        size: "large",
        img: "/img/trees/evergreen.jpg",
        type: "trees"
      },
      {
        name: "Fig Tree",
        price: 20.0,
        quantity: 1,
        size: "small",
        img: "/img/trees/fig_tree.jpg",
        type: "trees"
      },
      {
        name: "Palm",
        price: 80.0,
        quantity: 1,
        size: "medium",
        img: "/img/trees/palm2.jpeg",
        type: "trees"
      },
      {
        name: "Palm #2",
        price: 80.0,
        quantity: 1,
        size: "medium",
        img: "/img/trees/palm3.jpeg",
        type: "trees"
      },
      {
        name: "Gum Tree",
        price: 80.0,
        quantity: 1,
        size: "large",
        img: "/img//trees/gum_tree.png",
        type: "trees"
      },
      {
        name: "Hedge",
        price: 80.0,
        quantity: 1,
        size: "small",
        img: "/img//trees/hedge2.jpeg",
        type: "trees"
      },
      {
        name: "Hedge #2",
        price: 80.0,
        quantity: 1,
        size: "small",
        img: "/img//trees/hedge3.jpg",
        type: "trees"
      },
      {
        name: "Kauri Tree",
        price: 80.0,
        quantity: 1,
        size: "large",
        img: "/img//trees/kauri_tree.jpg",
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

    if (this.props.searchSize === "all") {
    } else {
      products = products.filter(product => {
        return product.size === this.props.searchSize;
      });
    }
    return products;
  };
  render() {
 
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
        { this.props.children }
        </div>
    );
  }
}

export default ProductList;
