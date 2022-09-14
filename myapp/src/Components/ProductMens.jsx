import { FiHeart, FiShoppingCart, FiSearch } from "react-icons/fi";
import { NavLink } from "react-router-dom";

function ProductMens({ product }) {
  const sayYes = () => {
    localStorage.setItem("id", product.id);
    localStorage.setItem("title", product.title);
    localStorage.setItem("price", product.price);
    localStorage.setItem("category", product.category);
    localStorage.setItem("img", JSON.stringify(product.img));
  };

  return (
    <div className="products">
      <img className="pr-images" src={product.img} alt="" />
      <div className="info">
        <div className="icon">
          <FiShoppingCart />
        </div>
        <div className="icon">
          <FiHeart onClick={sayYes} />
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
