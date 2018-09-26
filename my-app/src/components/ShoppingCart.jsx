import React, { Component } from "react";
import ShoppingCartItem from "./ShoppingCartItem";

//The shopping cart componet. Displays all ShoppingCartItems and a tally of total items
class ShoppingCart extends Component {
  totalCostOfShopping() {
    var totalPrice = 0;
    this.props.shoppingCartItems.forEach(shoppingCartItem => {
      totalPrice += shoppingCartItem.price;
    });
    totalPrice += 20;
    return <span>{totalPrice}</span>;
  }
  render() {
    return (
      <div id="shoppingCart">
        {this.props.shoppingCartItems.map((item, index) => {
          return (
            <ShoppingCartItem
              key={index}
              index={index}
              item={item}
              handleRemoveItemClick={this.props.handleRemoveItemClick}
            />
          );
        })}
        <br />
        NUMBER OF ITEMS IN TROLLEY: {this.props.shoppingCartItems.length} <br />
        SHIPPING: $20<br />
        TOTAL COST (PLUS SHIPPING): ${this.totalCostOfShopping()}
      </div>
    );
  }
}

export default ShoppingCart;
