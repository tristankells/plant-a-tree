import React, { Component } from "react";
import ShoppingCartItem from "./ShoppingCartItem";

//The shopping cart componet. Displays all ShoppingCartItems and a tally of total items
class ShoppingCart extends Component {
  render() {
    return (
      <div id="shoppingCart">
        Number Of Items In Trolley: {this.props.shoppingCartItems.length}
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
      </div>
    );
  }
}

export default ShoppingCart;
