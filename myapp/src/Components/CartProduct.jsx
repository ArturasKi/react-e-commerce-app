import { useState } from "react";

function CartProduct() {

  const [count, setCount] = useState(1);

  let cart = JSON.parse(localStorage.getItem("cart_item"));

  const removeItem = () => {
    localStorage.removeItem("cart_item");
  };

  const minusCount = () => {
    if(count > 1) {
      setCount(count => count - 1);
    }
  }

  const plusCount = () => {
    setCount(count => count + 1);
  }

  return (
    <div className="cart-container">
      {cart ? (
        <div className="cart-row">
          <img src={cart ? cart.img : null} alt="." />
          <div className="cart-info">
              <h2>{cart ? cart.title : null}</h2>
              <p>Color: {cart ? cart.color : null}</p>
              <p>Size: {cart ? cart.size : null}</p>
              <p>Price: {cart ? cart.price : null}</p>
              <div className="amount">
                <button onClick={minusCount}>-</button>
                <b style={{padding: '10px'}}>{count}</b>
                <button onClick={plusCount}>+</button>
              </div>
              <button onClick={removeItem}>Remove item</button>
            </div>
        </div>
      ) : (
        "Empty cart"
      )}
    </div>
  );
}

export default CartProduct;
