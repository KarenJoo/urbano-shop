import React from 'react';
import { Link } from 'react-router-dom';
import useFetch from '../hooks/useFetch';

export default function ProductCard(product) {
    const { data: productData, loading, error } = useFetch(`https://v2.api.noroff.dev/online-shop/`);

    if (loading) {
      return <div>Loading...</div>;
    }
  
    if (error || !productData) {
      return <div>Error: Unable to load product details.</div>;
    }

    if (!product) {
      return <div>Error: Product data not found.</div>;
    }

    console.log(product.discountedPrice)

  return (
    <div className="product-card">
      <div className="image-container">
        <img src={product.img} alt="Product Image" />
      </div>
      <div className="card-content">
        <div className='card-head-content'>
        <h2>{product.title}</h2>
        <p>{product.description}</p>
        </div>
        <div className='card-foot-content'>
        <h4>{product.price} NOK</h4>
            <h3>On Sale: {product.discountedPrice} NOK</h3>
           
        <Link to="/product" className="buy-button">View Product</Link>
       </div>
      </div>
    </div>
  );
}
