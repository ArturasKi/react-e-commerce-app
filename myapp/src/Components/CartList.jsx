import React from "react";
import { useContext } from "react";
import AppContext from "./AppContext";
import CartItem from "./CartItem";

function CartList() {
  const { items, cartItems } = useContext(AppContext);

  let allCost = 0;
  if (cartItems !== null) {
    for (let i = 0; i < cartItems.length; i++) {
      const itemPrice = +cartItems[i].price.slice(0, -4);
      const itemAmount = cartItems[i].amount;
      if (cartItems.length !== null) {
        allCost +=
          cartItems[i].sale === "1"
            ? ((itemPrice / 2).toFixed(2) * itemAmount)
            : (itemPrice.toFixed(2) * itemAmount);
      } else break;
    }
  }

  // KOLKAS PANAIKINAM...
  const checkOut = () => {
    if (cartItems === null) {
      console.log('Cart is empty');
    } else console.log(cartItems);
    // localStorage.clear("cartItems", []);
  };

  return (
    <div className="cart">
      <div className="cart-header">
        <h2>{allCost ? "Cart" : "Your cart is empty"}</h2>
      </div>
      <div className="cart-list">
        {items
          ? items.map((item) => <CartItem key={item.id} item={item}></CartItem>)
          : null}
      </div>
      <div className="bottom-info">
        <p>
          Total price:
          <b>
            {allCost
              ? " " + allCost.toFixed(2) + " EUR"
              : " Your cart is empty"}
          </b>
        </p>
        <p>
          Shipping & taxes calculated at checkout{" "}
          {allCost > 69.99 ? " (You get free shipping!)" : null}
        </p>
        <div style={{ display: "flex" }}>
          <input type="checkbox" required></input>
          <p style={{ marginLeft: "5px" }}>
            I have read, understood and agreed with your terms and condition.{" "}
            <a href=".">See More Details</a>
          </p>
        </div>
        <button onClick={checkOut}>Checkout</button>
      </div>
    </div>
  );
}

export default CartList;
