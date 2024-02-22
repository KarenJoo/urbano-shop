import React from 'react';
import useFetch from '../hooks/useFetch';

export default function ProductDetails() {
  const { data: productData, loading, error } = useFetch(`https://v2.api.noroff.dev/online-shop/109566af-c5c2-4f87-86cb-76f36fb8d378`);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error || !productData) {
    return <div>Error: Unable to load product details. Please try again later.</div>;
  }

  const product = productData.data;

  if (!product) {
    return <div>Error: Product data not found.</div>;
  }

  return (
    <div className="product-details-card">
      <div className="product-details-image">
        <img src={product.image.url} alt={product.image.alt} />
      </div>
      <div className="product-details-content">
        <div className='product-details-head'>
          <h2>{product.title}</h2>
          <p>{product.description}</p>
        </div>
        <div className='product-details-foot'>
          <h3>{product.price} NOK</h3>
          <button className="buy-button">Add to Cart</button>
        </div>      
      </div>
    </div>
  );
}
