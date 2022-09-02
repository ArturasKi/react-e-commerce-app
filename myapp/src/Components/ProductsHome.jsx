import { products } from '../data.js';
import Product from './Product.jsx';

function Products() {
  return (
    <div className='pr-container'>
        {
            products.slice(0, 12).map((product) => <Product key={product.id} product={product} />)
        }
    </div>
  )
}

export default Products;