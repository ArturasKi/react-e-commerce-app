function CartProduct() {
  let cart = JSON.parse(localStorage.getItem("cart_item"));

  const removeItem = () => {
    localStorage.removeItem("cart_item");
  };

  return (
    <div className="cart-container">
      {cart ? (
        <div className="cart-row">
          <img src={cart ? cart.img : null} alt="." />
          <div className="cart-info">
            <div>
              <h2>{cart ? cart.title : null}</h2>
              <h5>Color: {cart ? cart.color : null}</h5>
              <h5>Size: {cart ? cart.size : null}</h5>
              <h5>Price: {cart ? cart.price : null}</h5>
              <button onClick={removeItem}>Remove item</button>
            </div>
          </div>
        </div>
      ) : (
        "Empty cart"
      )}
    </div>
  );
}

export default CartProduct;
