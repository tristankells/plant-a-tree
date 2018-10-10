import React, { Component } from "react";
import "./style/App.css";
import "./style/ProductList.css";
import ProductList from "./components/ProductList";
import ShoppingCart from "./components/ShoppingCart";
import Navbar from "./components/Navbar";
import ShoppingCartSlider from "./components/ShoppingCartSlider";
import CategoriesMenu from "./components/CategoriesMenu";
import Backdrop from "./components/Backdrop";
import ProfileMenu from "./components/ProfileMenu";
import ProductCarousel from "./components/ProductCarousel";
// import Product from "./components/ProductShelf/Product";
import CreditCardView from "./components/PaymentView";
import ShippingView from "./components/ShippingView";
// import route Components here
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  Redirect
} from "react-router-dom";

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
      view: 1,
      loggedUser: "",
      // Variables related to Profile Menu
      username: "",
      password: "",
      // Variables related to Shipping Page
      address: {},
      creditCard: {},
      //Variables related to product filter
      searchSize: "all",
      searchType: "all"
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

    // Functions related to Profile Menu
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleLoginSubmit = this.handleLoginSubmit.bind(this);
    this.signUpSubmit = this.signUpSubmit.bind(this);

    // Functions related to Shipping Page
    this.handleAddressSubmit = this.handleAddressSubmit.bind(this);
  }

  // Functions related to Shipping Page
  handleAddressSubmit() {
    alert("Works");
  }

  updateSearchSize = searchSize => {
    this.setState({
      searchSize: searchSize
    });
  };

  updateSearchType = searchType => {
    this.setState({
      searchType: searchType
    });
  };

  // Functions related to Profile Menu
  handleLoginSubmit(event) {
    var auth = false;
    fetch("http://localhost:117/auth/login/" + this.state.username, {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        password: this.state.password
      }
    })
      .then(response => {
        if (response.ok) {
          this.state.loggedUser = this.state.username;
          return response.json();
        } else {
          alert("Incorrect login details");
        }
      })
      .then(function(myJson) {
        if (myJson) {
          alert(myJson);
        }
      });

    event.preventDefault();
  }

  // Handling Signup
  signUpSubmit(event) {
    fetch("http://localhost:117/auth/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        password: this.state.password,
        user: this.state.username
      }
    })
      .then(response => {
        if (response.ok) {
          return response.json();
        } else {
          alert("We have a problem");
        }
      })
      .then(function(myJson) {
        alert(myJson);
      });

    event.preventDefault();
  }

  // Input change to handle form changes
  handleInputChange(event) {
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  handleLogoClick = () => {
    this.setState({
      mainPageRedirect: true
    });
  };

  handleShippingSubmit = () => {
    this.setState({
      paymentRedirect: true
    });
  };

  handleAddressUpdate = address => {
    this.setState({
      address: address
    });
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
    console.log(this.state.searchType);
    let redirect = <div />;
    if (this.state.mainPageRedirect) {
      redirect = <Redirect push to="/" />;
    } else if (this.state.paymentRedirect) {
      redirect = <Redirect push to="/payment" />;
    }
    return (
      <Router>
        <div className="App">
          <Navbar
            handleProfileMenuButtonClick={this.handleProfileMenuButtonClick}
            handleShoppingCartButtonClick={this.handleShoppingCartButtonClick}
            handleBurgerButtonClick={this.handleBurgerButtonClick}
            handleLogoClick={this.handleLogoClick}
            username={this.state.loggedUser}
          />
          <div className="App-intro">
            <CategoriesMenu
              handleMouseDown={this.handleBurgerButtonClick}
              menuVisibility={this.state.leftSliderMenuVisible}
              updateSearchSize={this.updateSearchSize}
              searchSize={this.state.searchSize}
              searchType={this.state.searchType}
              updateSearchType={this.updateSearchType}
            />
            <ProfileMenu
              handleMouseDown={this.handleProfileMenuButtonClick}
              menuVisibility={this.state.profileMenuVisible}
              handleInputChange={this.handleInputChange}
              handleLoginSubmit={this.handleLoginSubmit}
              signUpSubmit={this.signUpSubmit}
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
              >
                <Link to="/shipping">Enter Shipping Address</Link>
              </ShoppingCart>
            </ShoppingCartSlider>
            {redirect}
            <Route
              exact
              path="/"
              render={() => (
                <ProductList
                  searchSize={this.state.searchSize}
                  searchType={this.state.searchType}
                  handleAddItemClick={product =>
                    this.addItemToShoppingCart(product)
                  }
                />
              )}
            />
            <Route
              exact
              path="/shipping"
              render={() => (
                <ShippingView
                  handleShippingSubmit={this.handleShippingSubmit}
                  handleAddressUpdate={this.handleAddressUpdate}
                />
              )}
            />
            <Route
              exact
              path="/payment"
              render={() => (
                <CreditCardView
                  shoppingCart={this.state.shoppingCart}
                  address={this.state.address}
                  creditCard={this.state.creditCard}
                >
                  <ShoppingCart
                    shoppingCartItems={this.state.shoppingCart}
                    handleRemoveItemClick={index =>
                      this.removeItemFromShoppingCart(index)
                    }
                    handleAddItemClick={product =>
                      this.addItemToShoppingCart(product)
                    }
                    address={this.state.address}
                  />
                </CreditCardView>
              )}
            />
            <Backdrop backDropVisibility={this.state.backDropVisible} />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
