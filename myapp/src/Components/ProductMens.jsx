import { useState } from "react";
import { useContext } from "react";
import { FiHeart, FiShoppingCart, FiSearch } from "react-icons/fi";
import { NavLink } from "react-router-dom";
import AppContext from "./AppContext";

function ProductMens({ product }) {
  const { setCreateItem } = useContext(AppContext);

  const [like, setLike] = useState(false);

  const addToCart = () => {
    localStorage.setItem("id", product.id);
    localStorage.setItem("title", product.title);
    localStorage.setItem("price", product.price);
    localStorage.setItem("category", product.category);
    localStorage.setItem("sale", product.sale);
    localStorage.setItem("img", JSON.stringify(product.img));
    const data = {
      id: localStorage.id,
      title: localStorage.title,
      category: localStorage.category,
      price: localStorage.price,
      img: JSON.parse(localStorage.img),
      color: "",
      size: "",
      amount: 1,
      sale: localStorage.sale
    };
    setCreateItem(data);
  };

  const heartBtn = () => {
    if (!like) {
      setLike(true);
    } else setLike(false);
  };

  const sayYes = () => {
    localStorage.setItem("id", product.id);
    localStorage.setItem("title", product.title);
    localStorage.setItem("price", product.price);
    localStorage.setItem("sale", JSON.stringify(product.sale));
    localStorage.setItem("category", product.category);
    localStorage.setItem("img", JSON.stringify(product.img));
    localStorage.setItem("color", JSON.stringify(product.color));
  };

  return (
    <div className="products">
      <img className="pr-images" src={product.img} alt="" />
      <div className={product.sale ? "sale" : "hidden"}>SALE</div>
      <div className={product.sale ? "salePrice" : "price"}>{product.sale ? (((product.price).slice(0, -4) / 2).toFixed(2)) + ' EUR' : product.price}</div>
      <div className={product.sale ? "oldprice" : null}>{product.sale ? product.price : null}</div>
      {like === true ? <FiHeart className="heart" /> : null}
      <div className="info">
        <div className="icon">
          <FiShoppingCart onClick={addToCart} />
        </div>
        <div className="icon">
          {like === true ? (
            <FiHeart
              style={{ fill: "black" }}
              values={like}
              onClick={heartBtn}
            />
          ) : (
            <FiHeart values={like} onClick={heartBtn} />
          )}
        </div>
        <div className="icon">
          <NavLink to="/productlist/mens/product" className="menu-item">
            <FiSearch onClick={sayYes} />
          </NavLink>
        </div>
      </div>
    </div>
  );
}

export default ProductMens;
