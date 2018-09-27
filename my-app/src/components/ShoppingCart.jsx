import React, { Component } from "react";
import ShoppingCartItem from "./ShoppingCartItem";

//The shopping cart componet. Displays all ShoppingCartItems and a tally of total items
class ShoppingCart extends Component {
  sortShoppingCart() {
    var uniqueArrayName = [],
      sortedShoppingCart = [],
      uniqueNamesAndCostArray = [];

    this.props.shoppingCartItems.forEach(shoppingCartItem => {
      if (!uniqueArrayName.includes(shoppingCartItem.name)) {
        uniqueArrayName.push(shoppingCartItem.name);
        uniqueNamesAndCostArray.push(shoppingCartItem);
      } else {
      }
    });

    uniqueArrayName.forEach(name => {
      var count = this.props.shoppingCartItems.filter(
        item => item.name === name
      ).length;
      var product = uniqueNamesAndCostArray.filter(item => item.name === name);
      var price = product[0].price;

      sortedShoppingCart.push({
        name: name,
        quantity: count,
        price: price
      });
    });

    console.log(sortedShoppingCart);
    return sortedShoppingCart;
  }

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
        {this.sortShoppingCart().map((item, index) => {
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
        SHIPPING: $20
        <br />
        TOTAL COST (PLUS SHIPPING): ${this.totalCostOfShopping()}
      </div>
    );
  }
}

export default ShoppingCart;
