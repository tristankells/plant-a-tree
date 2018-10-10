import React, { Component } from "react";
import "../style/ShoppingCart.css";
import ShoppingCartItem from "./ShoppingCartItem";
import { Button } from "@material-ui/core";

//The shopping cart componet. Displays all ShoppingCartItems and a tally of total items
class ShoppingCart extends Component {
  totalCostOfShopping() {
    var totalPrice = 0;
    var shoppingCartItems = this.props.shoppingCartItems;

    //If item cart, calcualte cost and add shipping, total price = 0
    if (shoppingCartItems.length !== 0) {
      shoppingCartItems.forEach(shoppingCartItem => {
        totalPrice += shoppingCartItem.price * shoppingCartItem.quantity;
      });
      totalPrice += 20;
    }

    return totalPrice;
  }
  render() {
    return (
      <div>
        <div id="shoppingCartSlider">
          <div id="shoppingCart">
            {this.props.shoppingCartItems.map((item, index) => {
              return (
                <ShoppingCartItem
                  key={index}
                  index={index}
                  item={item}
                  handleRemoveItemClick={this.props.handleRemoveItemClick}
                  handleAddItemClick={this.props.handleAddItemClick}
                />
              );
            })}
          </div>
          <br />
          <div>
            Number of items in cart: &nbsp;{" "}
            {this.props.shoppingCartItems.length}
            <br />
          </div>
          Shipping: &nbsp; $20 <br />
          <br />
          <b>Total Cost:</b> &nbsp; $<span>{this.totalCostOfShopping()}</span>
          <br />
        </div>
        {this.props.children}
      </div>
    );
  }
}

export default ShoppingCart;
