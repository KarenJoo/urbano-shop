// ProductCard.js

import React from 'react';
import { Link } from 'react-router-dom';

export default function ProductCard(props) {
  const handleAddToCart = (price) => {
    console.log('Product added to cart:', props.title, 'Price:', price);
  };

  return (
    <div className="product-card">
      <div className="image-container">
        <img src={props.img} alt="Product Image" />
      </div>
      <div className="card-content">
        <h2>{props.title}</h2>
        <p>{props.description}</p>
        <h3>Price: {props.price}</h3> 
        <Link to="/product" className="buy-button">View Product</Link>
        <button className='buy-button' onClick={() => handleAddToCart(props.price)}>Add to Cart</button>
       
      </div>
    </div>
  );
}
