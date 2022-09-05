import { useContext } from 'react';
// import { products } from '../data.js';
import AppContext from './AppContext.jsx';
import ProductMens from './ProductMens.jsx';

function ProductsMens() {

  const { products } = useContext(AppContext);

  return (
    <div className='pr-container'>
        {
            products.map((product) => <ProductMens key={product.id} product={product} />)
        }
    </div>
  )
}

export default ProductsMens;