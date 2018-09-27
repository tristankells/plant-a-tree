import React, { Component } from "react";
import tree from "../../tree.jpg";
import Button from "@material-ui/core/Button";
import RemoveCircle from "@material-ui/icons/RemoveCircle";

//Disaplys all the information about an item in the shopping cart and has a remove button to remove the item from the shopping cart.
class ShoppingCartItem extends Component {
  render() {
    const item = this.props.item,
      index = this.props.index;
    return (
      <div className="shoppingcartitem__container">
        <div>Item</div>
        <div>
          <b>------</b>
        </div>
        <img class="ShoppingCartItemsImage" src={tree} alt="" />
        <div>
          <b>Name: &nbsp;</b>
          {item.name}
        </div>
        <div>
          <b>Price: &nbsp;</b>
          {item.price}
        </div>
        <div>
          <b>Quantity: &nbsp;</b>
          {item.quantity}
        </div>
        <Button onClick={() => this.props.handleRemoveItemClick(index)}>
          <RemoveCircle />
        </Button>
      </div>
    );
  }
}

export default ShoppingCartItem;
