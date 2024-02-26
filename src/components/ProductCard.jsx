import React from 'react';
import { Link } from 'react-router-dom';
import OnSale from './OnSale';

export default function ProductCard({ product }) {
  const { image, title, description, price, discountedPrice } = product;

  return (
    <div className="product-card">
      <div className="image-container">
        <img src={image.url} alt="Product Image" />
      </div>
      <div className="card-content">
        <div className="card-head-content">
          <h2>{title}</h2>
          <p>{description}</p> 
         
        </div>
        <div className="card-foot-content">
          <h4 className={price !== discountedPrice ? 'on-sale' : ''}>{price} NOK</h4>
          <OnSale price={price} discountedPrice={discountedPrice} />
        </div>          
        <Link to="/product" className="buy-button">View Product</Link>

      </div>
    </div>
  );
}
