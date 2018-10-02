import React, { Component } from "react";
import "./App.css";
import "./ProductList.css";
import ProductList from "./components/ProductShelf/ProductList";
import ShoppingCart from "./components/ShoppingCart/ShoppingCart";
import Navbar from "./components/TopNavbar/Navbar";
import ShoppingCartSlider from "./components/ShoppingCart/ShoppingCartSlider";
import CategoriesMenu from "./components/CategoriesMenu/CategoriesMenu";
import Backdrop from "./components/Backdrop/Backdrop";
import ProfileMenu from "./components/ProfileMenu/ProfileMenu";
import ProductCarousel from "./components/ProductCarousel/ProductCarousel";
import Product from "./components/ProductShelf/Product";
import CreditCardForm from "./components/PaymentView/CreditCardForm";

//Main parent component
class App extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      shoppingCart: [],
      shoppingCartVisible: false,
      leftSliderMenuVisible: false,
      profileMenuVisible: false,
      backDropVisible: false,
      view: 1
    };
    this.handleShoppingCartButtonClick = this.handleShoppingCartButtonClick.bind(
      this
    );
    this.handleProfileMenuButtonClick = this.handleProfileMenuButtonClick.bind(
      this
    );
    this.toggleShoppingCart = this.toggleShoppingCart.bind(this);
    this.handleBurgerButtonClick = this.handleBurgerButtonClick.bind(this);
    this.toggleLeftSliderMenu = this.toggleLeftSliderMenu.bind(this);
    this.toggleProfileMenu = this.toggleProfileMenu.bind(this);
  }

  navToPurchaseView = () => {
    this.setState({ view: 2 });
    console.log("Butotn CLick");
  };

  navToStoreFrontView = () => {
    this.setState({ view: 1 });
  };
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

    //If item has quantity of one, remove it from shopping cart
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
    this.setState({
      backDropVisible: !this.state.backDropVisible
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
    this.setState({
      backDropVisible: !this.state.backDropVisible
    });
  }

  //Handle the event of a profile menu click
  handleProfileMenuButtonClick(e) {
    this.toggleProfileMenu();

    console.log("Profile clicked");
    e.stopPropagation();
  }

  //Set state of profile menu to the opposite of its current state
  toggleProfileMenu() {
    this.setState({
      profileMenuVisible: !this.state.profileMenuVisible
    });
    this.setState({
      backDropVisible: !this.state.backDropVisible
    });
  }

  render() {
    let displayView;

    //Change the content of the page body depending on the value of the state.view
    if (this.state.view === 1) {
      displayView = (
        <ProductList
          handleAddItemClick={product => this.addItemToShoppingCart(product)}
        />
      );
    } else if (this.state.view === 2) {
      displayView = <CreditCardForm />;
    }
    return (
      <div className="App">
        <Navbar
          handleProfileMenuButtonClick={this.handleProfileMenuButtonClick}
          handleShoppingCartButtonClick={this.handleShoppingCartButtonClick}
          handleBurgerButtonClick={this.handleBurgerButtonClick}
        />
        <div className="App-intro">
          <CategoriesMenu
            handleMouseDown={this.handleBurgerButtonClick}
            menuVisibility={this.state.leftSliderMenuVisible}
          />
          <ProfileMenu
            handleMouseDown={this.handleProfileMenuButtonClick}
            menuVisibility={this.state.profileMenuVisible}
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
              handlePurchaseBtnClick={this.navToPurchaseView}
            />
          </ShoppingCartSlider>
          {displayView}
          <Backdrop backDropVisibility={this.state.backDropVisible} />
        </div>
      </div>
    );
  }
}

export default App;
