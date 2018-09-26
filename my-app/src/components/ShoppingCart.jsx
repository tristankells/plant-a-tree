import React, { Component } from "react";
import ShoppingCartItem from "./ShoppingCartItem";

class ShoppingCart extends Component {
  state = {};



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
