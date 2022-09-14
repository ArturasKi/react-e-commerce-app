import { useContext } from "react";
import { useState } from "react";
import AppContext from "./AppContext";

function CartItem({item}) {

  const { setDeleteItem } = useContext(AppContext);

  const [count, setCount] = useState(1);

  const handleRemove = () => {
    setDeleteItem(item);
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
              <h4>{item.title}</h4>
              <p>Color: {item.color}</p>
              <p>Size: {item.size}</p>
              <p>Price: {item.price}</p>
              <div>
                <button className="cart-btn" onClick={minusCount}>-</button>
                <b style={{padding: '10px'}}>{item.amount ? item.amount : count}</b>
                <button className="cart-btn" onClick={plusCount}>+</button>
              </div>
              <button className="cart-btn" onClick={handleRemove}>Remove item</button>
            </div>
        </div>
      ) : (
        "Empty cart"
      )}
    </div>
  );
}

export default CartItem;
