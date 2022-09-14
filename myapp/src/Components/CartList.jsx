import React from "react";
import { useContext } from "react";
import AppContext from "./AppContext";
import CartItem from "./CartItem";

function CartList() {
  const { items, cartItems } = useContext(AppContext);

  let allCost = 0;
  for(let i = 0; i < cartItems.length; i++) {
    if(cartItems.length) {
    allCost += (cartItems[i].price.slice(0, -4) * cartItems[i].amount);
    }
  }

  console.log(allCost);

  return (
    <div className="cart">
      <div className="cart-header">
        <h2>{allCost ? 'Cart' : 'Your cart is empty'}</h2>
      </div>
      <div className="cart-list">
        {items
          ? items.map((item) => <CartItem key={item.id} item={item}></CartItem>)
          : null}
      </div>
      <div className="bottom-info">
        <p>
          Total price:
          <b>{allCost ? ' ' + allCost.toFixed(2) + ' EUR' : ' Your cart is empty'}</b>
        </p>
        <p>Shipping & taxes calculated at checkout</p>
        <div style={{ display: "flex" }}>
          <input type="checkbox"></input>
          <p style={{ marginLeft: "5px" }}>
            I have read, understood and agreed with your terms and condition.{" "}
            <a href=".">See More Details</a>
          </p>
        </div>
        <button>Checkout</button>
      </div>
    </div>
  );
}

export default CartList;
