// ProductCard.js

import React from 'react';
import { Link } from 'react-router-dom';

export default function ProductCard(props) {
 
  return (
    <div className="product-card">
      <div className="image-container">
        <img src={props.img} alt="Product Image" />
      </div>
      <div className="card-content">
        <div className='card-head-content'>
        <h2>{props.title}</h2>
        <p>{props.description}</p>
        </div>
        <div className='card-foot-content'>
        <h3>{props.price} NOK</h3> 
        <Link to="/product" className="buy-button">View Product</Link>
       </div>
      </div>
    </div>
  );
}
