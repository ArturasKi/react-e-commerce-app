import { FiHeart, FiShoppingCart, FiSearch } from "react-icons/fi";
import { NavLink } from "react-router-dom";

function ProductMens({ product }) {


  const sayYes = () => {
    console.log(product)
  }

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
            <FiSearch onClick={sayYes}/>
          </NavLink>
        </div>
      </div>
    </div>
  );
}

export default ProductMens;
