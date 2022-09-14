import React from "react";
import { useContext } from "react";
import AppContext from "./AppContext";
import CartItem from "./CartItem";

function CartList() {

  const { items } = useContext(AppContext);
  
  console.log(items)

  return (
    <div className="card mt-4">
      <div className="card-header">
        <h2>List of Exams</h2>
      </div>
      {items
        ? items.map((item) => (
            <CartItem key={item.id} item={item}></CartItem>
          ))
        : null}
    </div>
  );
}

export default CartList;
