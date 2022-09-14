import React from "react";
import { useContext } from "react";
import AppContext from "./AppContext";
import CartItem from "./CartItem";

function CartList() {
  const { items } = useContext(AppContext);

  return (
    <div className="cart">
      <div className="cart-header">
        <h2>Cart</h2>
      </div>
      <div className="cart-list">
        {items
          ? items.map((item) => <CartItem key={item.id} item={item}></CartItem>)
          : null}
      </div>
      <div className="bottom-info">
        <p>Total price:</p>
        <p>Shipping & taxes calculated at checkout</p>
        <div style={{ display: 'flex'}}>
            <input type='checkbox'></input>
            <p style={{marginLeft: '5px'}}>I have read, understood and agreed with your terms and condition. <a href=".">See More Details</a></p>
        </div>
        <button>Checkout</button>
      </div>
    </div>
  );
}

export default CartList;
