import React from 'react'
import { Link } from 'react-router-dom'

export default function ProductDetails(props) {
  const handleAddToCart = (price) => {
    console.log('Product added to cart:', props.title, 'Price:', price);
  };
  return (
    <div className="product-details-card">
      <div className="product-details-image">
        <img src="/assets/images/product.jpg" alt="Product Image" />
      </div>
      <div className="product-details-content">
        <div className='product-details-head'>
        <h2>Product name</h2>
        <p>Description</p>
        </div>
        <div className='product-details-foot'>
        <h3>Price: $</h3>
        <Link to="/cart" className="buy-button">Buy Product</Link>
        </div>      
      </div>
    </div>
  )
}
