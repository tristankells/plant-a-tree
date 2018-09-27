import React, { Component } from "react";
import "./App.css";
import "./ProductList.css";
import ProductList from "./components/ProductShelf/ProductList";
import ShoppingCart from "./components/ShoppingCart/ShoppingCart";
import Navbar from "./components/Navbar";

//Main parent component
class App extends Component {
  //State tracks all shop products and items contained in the shopping cart
  state = {
    shoppingCart: []
  };

  //Adds a product to the shopping cart array
  addItemToShoppingCart(product) {
    const newShoppingCart = this.state.shoppingCart;

    newShoppingCart.push(product);
    this.setState({ shoppingCart: newShoppingCart });
  }

  //Removes a product from the shopping cart array
  removeItemFromShoppingCart(index) {
    const newShoppingCart = this.state.shoppingCart;
    newShoppingCart.splice(index, 1);
    this.setState({ shoppingCart: newShoppingCart });
  }

  render() {
    return (
      <div className="App">
        <Navbar />
        <div className="App-intro">
          <ShoppingCart
            shoppingCartItems={this.state.shoppingCart}
            handleRemoveItemClick={index =>
              this.removeItemFromShoppingCart(index)
            }
          />
          <ProductList
            handleAddItemClick={product => this.addItemToShoppingCart(product)}
          />
        </div>
      </div>
    );
  }
}

export default App;
