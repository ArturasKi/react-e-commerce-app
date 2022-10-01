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
    item.amount = count - 1;
    if(count > 1) {
      setCount(count => count - 1);
    }
  }

  const plusCount = () => {
    item.amount = count + 1;
    setCount(count => count + 1);
  }

  return (
    <div className="cart-container">
      {item ? (
        <div className="cart-row">
          <img src={item.img} alt="." />
          <div className="cart-info">
              <h4>{item.title}</h4>
              <p>Color: {(item.color).toUpperCase()}</p>
              <p>Size: {item.size}</p>
              <p>Price: {item.sale === '1' ? ((item.price).slice(0, -4) / 2).toFixed(2) + ' EUR' : item.price}</p>
              <p>Total price: {item.sale === '1' ? ((item.price.slice(0, -4) / 2).toFixed(2) * JSON.stringify(item.amount)).toFixed(2) + ' EUR' : ((item.price.slice(0, -4)) * JSON.stringify(item.amount)).toFixed(2) + ' EUR'}</p>
              <div>
                <button className="cart-btn" onClick={minusCount}>-</button>
                <b style={{padding: '10px'}}>{count}</b>
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
