import React, { Component } from "react";

//Disaplys all the information about an item in the shopping cart and has a remove button to remove the item from the shopping cart.
class ShoppingCartItem extends Component {
  render() {
    const item = this.props.item;
    const index = this.props.index;
    return (
      <div>
        <div>ITEM</div>
        <div>Name : {item.name}</div>
        <div>Price :{item.price}</div>
        <button onClick={() => this.props.handleRemoveItemClick(index)}>
          Remove Item From Trolley
        </button>
      </div>
    );
  }
}

export default ShoppingCartItem;
