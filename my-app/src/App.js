import React, { Component } from "react";
import "./App.css";
import "./ProductList.css";
import ProductList from "./components/ProductShelf/ProductList";
import ShoppingCart from "./components/ShoppingCart/ShoppingCart";
import Navbar from "./components/Navbar";
import ShoppingCartSlider from "./components/ShoppingCart/ShoppingCartSlider";
import CategoriesMenu from "./components/CategoriesMenu/CategoriesMenu";

import Product from "./components/ProductShelf/Product";

//Main parent component
class App extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      shoppingCart: [],
      shoppingCartVisible: false,
      leftSliderMenuVisible: false
    };
    this.handleShoppingCartButtonClick = this.handleShoppingCartButtonClick.bind(
      this
    );
    this.toggleShoppingCart = this.toggleShoppingCart.bind(this);
    this.handleBurgerButtonClick = this.handleBurgerButtonClick.bind(this);
    this.toggleLeftSliderMenu = this.toggleLeftSliderMenu.bind(this);
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

  handleShoppingCartButtonClick(e) {
    this.toggleShoppingCart();

    console.log("clicked");
    e.stopPropagation();
  }

  toggleShoppingCart() {
    this.setState({
      shoppingCartVisible: !this.state.shoppingCartVisible
    });
  }

  //Handle the event of a burger menu click
  handleBurgerButtonClick(e) {
    this.toggleLeftSliderMenu();

    console.log("clicked");
    e.stopPropagation();
  }

  //Set state of left slider menu to the opposite of its current state
  toggleLeftSliderMenu() {
    this.setState({
      leftSliderMenuVisible: !this.state.leftSliderMenuVisible
    });
  }

  render() {
    return (
      <div className="App">
        <Navbar
          handleShoppingCartButtonClick={this.handleShoppingCartButtonClick}
          handleBurgerButtonClick={this.handleBurgerButtonClick}
        />
        <div className="App-intro">
          <CategoriesMenu
            handleMouseDown={this.handleBurgerButtonClick}
            menuVisibility={this.state.leftSliderMenuVisible}
          />
          <ShoppingCartSlider
            handleMouseDown={this.handleShoppingCartButtonClick}
            menuVisibility={this.state.shoppingCartVisible}
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
