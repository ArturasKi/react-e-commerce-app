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
                    <option disabled selected>Color</option>
                    <option>Black</option>
                    <option>White</option>
                    <option>Yellow</option>
                    <option>Red</option>
                    <option>Green</option>
                    <option>Blue</option>
                </select>
                <select>
                    <option disabled selected>Size</option>
                    <option>XS</option>
                    <option>S</option>
                    <option>M</option>
                    <option>L</option>
                    <option>XL</option>
                    <option>XXL</option>
                </select>
            </div>
            <div className="sort">
                <h3>Sort Products:</h3>
                <select>
                    <option selected>Newest</option>
                    <option>Price (Low to high)</option>
                    <option>Price (High to low)</option>
                </select>
            </div>
        </div>
        <Products />
        <Footer />
    </div>
  )
}

export default ProductList