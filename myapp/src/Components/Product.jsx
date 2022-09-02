import { FiHeart, FiShoppingCart, FiSearch } from "react-icons/fi";
import { NavLink } from "react-router-dom";

function Product({ product }) {
  return (
    <div className="products">
      <img className="pr-images" src={product.img} alt="" />
      <div className="info">
        <div className="icon">
          <FiShoppingCart />
        </div>
        <div className="icon">
          <FiHeart />
        </div>
        <div className="icon">
          <NavLink to="/productlist/mens/product" className="menu-item">
            <FiSearch />
          </NavLink>
        </div>
      </div>
    </div>
  );
}

export default Product;
