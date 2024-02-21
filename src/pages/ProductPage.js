import React from 'react'
import { Link } from 'react-router-dom'

export default function ProductPage(props) {
  const handleAddToCart = (price) => {
    console.log('Product added to cart:', props.title, 'Price:', price);
  };
  return (
    <div className="product-page-container">
      <div className="image-container">
        <img src="/assets/images/product.jpg" alt="Product Image" />
      </div>
      <div className="card-content">
        <h2>Product name</h2>
        <p>Description</p>
        <h3>Price: $</h3>
        <Link to="/cart" className="buy-button">Buy Product</Link>      
      </div>
    </div>
  )
}
