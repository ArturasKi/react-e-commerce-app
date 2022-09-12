import { products } from '../data.js';
import ProductMens from './ProductMens.jsx';

function Products() {
  return (
    <div className='pr-container'>
        {
            products.slice(0, 8).map((product) => <ProductMens key={product.id} product={product} />)
        }
    </div>
  )
}

export default Products;