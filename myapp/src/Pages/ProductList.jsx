import Footer from "../Components/Footer"
import Navbar from "../Components/Navbar"
import Products from "../Components/Products"

function ProductList() {
  return (
    <div>
        <Navbar />
        <div className="filter-container">
            <div className="filter">
                <h3>Filter Products:</h3>
                <select>
                    <option value='0'>Color</option>
                    <option value='1'>Black</option>
                    <option value='2'>White</option>
                    <option value='3'>Yellow</option>
                    <option value='4'>Red</option>
                    <option value='5'>Green</option>
                    <option value='6'>Blue</option>
                </select>
                <select>
                    <option value='0'>Size</option>
                    <option value='1'>XS</option>
                    <option value='2'>S</option>
                    <option value='3'>M</option>
                    <option value='4'>L</option>
                    <option value='5'>XL</option>
                    <option value='6'>XXL</option>
                </select>
            </div>
            <div className="sort">
                <h3>Sort Products:</h3>
                <select>
                    <option value='0'>Newest</option>
                    <option value='1'>Price (Low to high)</option>
                    <option value='2'>Price (High to low)</option>
                </select>
            </div>
        </div>
        <Products />
        <Footer />
    </div>
  )
}

export default ProductList