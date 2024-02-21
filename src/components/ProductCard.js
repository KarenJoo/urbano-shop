import React from 'react';

export default function ProductCard() {
  return (
    <div className="product-card">
      <div className="image-container">
      <img src="/assets/images/product.jpg" alt="Product Image" />
      </div>
      <div className="card-content">
        <h2>Product name</h2>
        <p>Description</p>
        <h3>Price: $</h3>
        <button className="buy-button">Buy Now</button>
      </div>
    </div>
  );
}
