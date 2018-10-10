import React, { Component } from "react";

import "../style/Navbar.css";

//Import icons
import AccountCircle from "@material-ui/icons/AccountCircle";
import ShoppingCart from "@material-ui/icons/ShoppingCart";
import Menu from "@material-ui/icons/Menu";

//Import images
import PatLogoText from "../resources/images/textlogo.png";

//Main Navbar component
class Navbar extends Component {

  render() {
    // const navbar = this.props.navbar;
    return (
      <header className="navbar">
        <nav className="navbar__navigation">
          <div className="navbar__burger">
            <ul>
              <li>
                <a>
                  <Menu onMouseDown={this.props.handleBurgerButtonClick} />
                </a>
              </li>
            </ul>
          </div>
          <div className="navbar__logo__container">
            <a href="/">
              <img onMouseDown={this.props.handleLogoCLick} alt="" src={PatLogoText} className="navbar__logo" />
            </a>
          </div>
          <div >
            <p>{this.props.username}</p>
          </div>
          <div className="navbar__links">
            <ul>
              <li>
                <a>
                  <AccountCircle
                    onMouseDown={this.props.handleProfileMenuButtonClick}
                  />
                </a>
              </li>
              <li>
                <a>
                  <ShoppingCart
                    onMouseDown={this.props.handleShoppingCartButtonClick}
                  />
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </header>
    );
  }
}

export default Navbar;
