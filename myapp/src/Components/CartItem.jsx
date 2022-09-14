import { useState } from "react";

function CartItem({item}) {

  const [count, setCount] = useState(1);

  // let cart = JSON.parse(localStorage.getItem("cart_item"));

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
      {item ? (
        <div className="cart-row">
          <img src={item.img} alt="." />
          <div className="cart-info">
              <h2>{item.title}</h2>
              <p>Color: {item.color}</p>
              <p>Size: {item.size}</p>
              <p>Price: {item.price}</p>
              <div className="amount">
                <button onClick={minusCount}>-</button>
                <b style={{padding: '10px'}}>{item.amount ? item.amount : count}</b>
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

export default CartItem;
