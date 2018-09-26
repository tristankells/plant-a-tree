import React, { Component } from "react";

class ShoppingCartItem extends Component {
  state = {};
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
