import React, { useParams } from 'react';
import { Link } from 'react-router-dom';
import useFetch from '../hooks/useFetch';

export default function ProductDetails() {
  const { data: productData, loading, error } = useFetch(`https://v2.api.noroff.dev/online-shop/109566af-c5c2-4f87-86cb-76f36fb8d378`);

  // Check loading and error states
  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: Unable to load product details. Please try again later.</div>;
  }

  const product = productData.data;

  const handleAddToCart = (price) => {
    console.log('Product added to cart:', product.title, 'Price:', price);
  };

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
          <Link to="/cart" className="buy-button">Buy Product</Link>
        </div>      
      </div>
    </div>
  );
}
