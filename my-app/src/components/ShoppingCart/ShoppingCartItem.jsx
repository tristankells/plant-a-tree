import React, { Component } from "react";
import tree from "../../tree.jpg";

//Disaplys all the information about an item in the shopping cart and has a remove button to remove the item from the shopping cart.
class ShoppingCartItem extends Component {
  render() {
    const item = this.props.item,
      index = this.props.index;
    return (
      <div>
        <div>ITEM</div>
        <img class="ShoppingCartItemsImage"src={tree} alt=''  />
        <div>Name : {item.name}</div>
        <div>Price :{item.price}</div>
        <div>Quantity :{item.quantity}</div>
        <button onClick={() => this.props.handleRemoveItemClick(index)}>
          Remove Item From Trolley
        </button>
      </div>
    );
  }
}

export default ShoppingCartItem;
