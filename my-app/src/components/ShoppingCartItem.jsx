import React, { Component } from "react";
import "../style/ShoppingCartItem.css";
import Button from "@material-ui/core/Button";
import Remove from "@material-ui/icons/Remove";
import AddIcon from "@material-ui/icons/Add";

//Disaplys all the information about an item in the shopping cart and has a remove button to remove the item from the shopping cart.
class ShoppingCartItem extends Component {
  render() {
    const item = this.props.item;
    return (
      <div className="shoppingcartitem__container">
        <div className="shoppingcartitem__image-container">
          <div className="shoppingcartitem__header">
            Item
          </div>
          <img
            className="ShoppingCartItemsImage"
            src={window.location.origin + item.img}
            alt=""
          />
        </div>
        <div className="shoppingcartitem__desc-container">
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
          <Button onClick={() => this.props.handleAddItemClick(item)}>
            <AddIcon />
          </Button>
          <Button onClick={() => this.props.handleRemoveItemClick(item)}>
            <Remove />
          </Button>
        </div>
      </div>
    );
  }
}

export default ShoppingCartItem;
