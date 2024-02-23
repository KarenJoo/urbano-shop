import React from 'react';
import useFetch from '../hooks/useFetch';

export default function ProductDetails() {
  const { data: productData, loading, error } = useFetch(`https://v2.api.noroff.dev/online-shop/109566af-c5c2-4f87-86cb-76f36fb8d378`);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error || !productData) {
    return <div>Error: Unable to load product details.</div>;
  }

  const product = productData.data;

  if (!product) {
    return <div>Error: Product data not found.</div>;
  }

  return (
    <div className="product-details-container">
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
            <h4>{product.price} NOK</h4>
            <h3>On Sale: {product.discountedPrice} NOK</h3>
            <button className="buy-button">Add to Cart</button>
          </div>      
        </div>
      </div>
      <h2>Reviews</h2>
      <div className="reviews-container">
        {product.reviews && product.reviews.length > 0 ? (
          product.reviews.map(review => (
            <div key={review.id} className="review">
              <div className='review-head'>
              <p>Rating: {review.rating}</p>
              </div>
              <div className='review-foot'>
              <p><strong>{review.username}</strong></p>
              <p>{review.description}</p>
              </div>
            </div>
          ))
        ) : (
          <p>No reviews available.</p>
        )}
      </div>
    </div>
  );
}
