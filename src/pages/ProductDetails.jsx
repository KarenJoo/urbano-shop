import React from 'react';
import useFetch from '../hooks/useFetch';
import { PRODUCT_ID_URL } from '../utils/api';
import styles from '../pages/ProductDetails.module.css';
import buttonStyles from '../components/Buttons.module.css';

export default function ProductDetails() {
  const { data: productData, loading, error } = useFetch(`${PRODUCT_ID_URL}`)

  if (loading) {
    return <div>Loading...</div>
  }

  if (error || !productData) {
    return <div>Error: Unable to load product details.</div>
  }

  const product = productData.data

  if (!product) {
    return <div>Error: Product data not found.</div>
  }

  return (
    <div className={styles.productDetailsContainer}>
      <div className={styles.productDetailsCard}>
        <div className={styles.productDetailsImage}>
          <img src={product.image.url} alt={product.image.alt} />
        </div>
        <div className={styles.productDetailsContent}>
          <div className={styles.productDetailsHead}>
            <h2>{product.title}</h2>
            <p>{product.description}</p>
          </div>
          <div className={styles.productDetailsFoot}>
            <h4>{product.price} NOK</h4>
            <h3>Sale: {product.discountedPrice} NOK</h3>
            <button className={buttonStyles.primaryButton}>Add to Cart</button>
          </div>
        </div>
      </div>
      <h2>Reviews</h2>
      <div className={styles.reviewsContainer}>
        {product.reviews && product.reviews.length > 0 ? (
          product.reviews.map((review) => (
            <div key={review.id} className={styles.review}>
              <div className={styles.reviewHead}>
                <p>Rating: {review.rating}</p>
              </div>
              <div className={styles.reviewFoot}>
                <p>
                  <strong>{review.username}</strong>
                </p>
                <p>{review.description}</p>
              </div>
            </div>
          ))
        ) : (
          <p>No reviews available.</p>
        )}
      </div>
    </div>
  )
}
