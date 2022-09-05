import { products } from '../data.js';
import ProductMens from './ProductMens.jsx';

function ProductsMens() {
  return (
    <div className='pr-container'>
        {
            products.map((product) => <ProductMens key={product.id} product={product} />)
        }
    </div>
  )
}

export default ProductsMens;