import React from 'react';
import ProductCard from '../components/ProductCard';

export default function Homepage() {
  return (
    <div className='product-container'> 
      <h2>Productlist</h2>
      <div className='product-list'>
        <ProductCard/>
      </div>
    </div>
  );
}
