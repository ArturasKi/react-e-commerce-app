import { FiHeart, FiShoppingCart, FiSearch } from "react-icons/fi";

function Product({product}) {
  return (
    <div className='products'>
        <img className='pr-images' src={product.img} alt='' />
        <div className="info">
            <div className="icon">
                <FiShoppingCart />
            </div>
            <div className="icon">
                <FiHeart />
            </div>
            <div className="icon">
                <FiSearch />
            </div> 
        </div>
    </div>
  )
}

export default Product;