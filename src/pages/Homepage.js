import React from 'react';
import ProductCard from '../components/ProductCard';

export default function Homepage() {
  return (
    <div className='product-container'> 
      <h2>Productlist</h2>
      <div className='product-list'>
        <>
        <ProductCard
          title="Product 1"
          description="Product Description"
          price="$10.99"
          img="/assets/images/product.jpg"
        />
        <ProductCard
          title="Product 2"
          description="Product Description"
          price="$10.99"
          img="/assets/images/product.jpg"
        />
        <ProductCard
          title="Product3"
          description="Product Description"
          price="$10.99"
          img="/assets/images/product.jpg"
        />
        <ProductCard
          title="Product 4"
          description="Product Description"
          price="$10.99"
          img="/assets/images/product.jpg"
        />
        <ProductCard
          title="Product 5"
          description="Product Description"
          price="$10.99"
          img="/assets/images/product.jpg"
        />
        <ProductCard
          title="Product Name"
          description="Product Description"
          price="$10.99"
          img="/assets/images/product.jpg"
        />
        </>
      </div>
    </div>
  );
}
