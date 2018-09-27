import React, { Component } from "react";
import "./App.css";
import "./ProductList.css";
import ProductList from "./components/ProductShelf/ProductList";
import ShoppingCart from "./components/ShoppingCart/ShoppingCart";
import Navbar from "./components/Navbar";
import ShoppingCartSlider from "./components/ShoppingCart/ShoppingCartSlider";

//Main parent component
class App extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      shoppingCart: [],
      visible: false
    };

    this.handleMouseDown = this.handleMouseDown.bind(this);
    this.toggleMenu = this.toggleMenu.bind(this);
  }

  //Adds a product to the shopping cart array
  addItemToShoppingCart(product) {
    var shoppingCart = this.state.shoppingCart,
      itemAlreadyInCart = false,
      indexOfExistingItem = 0;

    //Loop through shopping cart and check if product already within
    shoppingCart.forEach((shoppingCartItem, index) => {
      if (shoppingCartItem.name === product.name) {
        itemAlreadyInCart = true;
        indexOfExistingItem = index;
      }
    });

    //If the item is already in the shopping cart, increase the existing item quantity, otherwise add to shopping cart
    if (itemAlreadyInCart) {
      shoppingCart[indexOfExistingItem].quantity += 1;
    } else {
      shoppingCart.push(product);
    }

    this.setState({ shoppingCart: shoppingCart });
  }

  //Removes a product from the shopping cart array
  removeItemFromShoppingCart(product) {
    var shoppingCart = this.state.shoppingCart,
      indexOfItem = 0;

    //Loop through shopping cart and check if product already within
    shoppingCart.forEach((shoppingCartItem, index) => {
      if (shoppingCartItem.name === product.name) {
        indexOfItem = index;
      }
    });

    //If item has quantity of one, remove it from shiopping cart
    //Else decrease quantity by one
    if (shoppingCart[indexOfItem].quantity === 1) {
      shoppingCart.splice(indexOfItem, 1);
    } else if (shoppingCart[indexOfItem].quantity > 1) {
      shoppingCart[indexOfItem].quantity -= 1;
    }
    this.setState({ shoppingCart: shoppingCart });
  }

  handleMouseDown(e) {
    this.toggleMenu();

    console.log("clicked");
    e.stopPropagation();
  }

  toggleMenu() {
    this.setState({
      visible: !this.state.visible
    });
  }

  render() {
    return (
      <div className="App">
        <Navbar handleMouseDown={this.handleMouseDown} />
        <div className="App-intro">
          <ShoppingCartSlider
            handleMouseDown={this.handleMouseDown}
            menuVisibility={this.state.visible}
          >
            <ShoppingCart
              shoppingCartItems={this.state.shoppingCart}
              handleRemoveItemClick={index =>
                this.removeItemFromShoppingCart(index)
              }
              handleAddItemClick={product =>
                this.addItemToShoppingCart(product)
              }
            />
          </ShoppingCartSlider>

          <ProductList
            handleAddItemClick={product => this.addItemToShoppingCart(product)}
          />
        </div>
      </div>
    );
  }
}

export default App;
