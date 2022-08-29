import React from 'react'
import { products } from '../data.js';
import Product from './Product.jsx';

function Products() {
  return (
    <div className='pr-container'>
        {
            products.map((item) => <Product key={item.id} item={item} />)
        }
    </div>
  )
}

export default Products;