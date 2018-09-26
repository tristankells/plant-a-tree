import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import ProductList from "./components/ProductList";
import ShoppingCart from "./components/ShoppingCart";
import Navbar from "./components/Navbar";


class App extends Component {
  state = {
    products: [
      {
        name: "birch",
        price: 100
      },
      {
        name: "red wood",
        price: 20
      }
    ],
    shoppingCart: [
      {
        name: "red wood",
        price: 20
      }
    ]
  };

  addItemToShoppingCart(product) {
    const newShoppingCart = this.state.shoppingCart;
    newShoppingCart.push(product);
    this.setState({ shoppingCart: newShoppingCart });
  }

  removeItemFromShoppingCart(index) {
    const newShoppingCart = this.state.shoppingCart;
    newShoppingCart.splice(index, 1);
    this.setState({ shoppingCart: newShoppingCart });
  }

  // handleAddItemClick() {
  //   var testItem = {name:"pine", price:90};
  //   this.addItemToShoppingCart(testItem);
  // }

  render() {
    return (
      <div className="App">
        < Navbar />
        <div className="App-intro">
          <ShoppingCart
            shoppingCartItems={this.state.shoppingCart}
            handleRemoveItemClick={index =>
              this.removeItemFromShoppingCart(index)
            }
          />
          <ProductList
            handleAddItemClick={product => this.addItemToShoppingCart(product)}
            products={this.state.products}
          />
        </div>
      </div>
    );
  }
}

export default App;
