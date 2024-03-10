// ProductDetails.jsx

import React from 'react'
import useFetch from '../hooks/useFetch'
import styles from '../pages/ProductDetails.module.css'
import buttonStyles from '../components/Buttons.module.css'
import { useDispatch, useSelector } from 'react-redux'
import { addToCart, addCartItem } from '../store/cartSlice'
import Counter from '../store/Counter'
import { useParams } from 'react-router-dom'

export default function ProductDetails() {
  const { id } = useParams()
  const API_URL = `https://v2.api.noroff.dev/online-shop/${id}`
  const { data: productData, loading, error } = useFetch(API_URL)

  const dispatch = useDispatch()
  const cartItems = useSelector((state) => state.cart.cartItems)

  const addProductToCart = (product) => {
    const existingItemIndex = cartItems.findIndex(
      (item) => item.id === product.id,
    )
    if (existingItemIndex !== -1) {
      dispatch(addCartItem({ id: product.id, quantity: 1 }))
    } else {
      dispatch(addToCart({ ...product, quantity: 1 }))
    }
  }

  if (loading) {
    return <div>Loading...</div>
  }

  if (error) {
    return <div>Error: Unable to load product details.</div>
  }

  if (!productData) {
    return <div>Error: Product data not found.</div>
  }

  const product = productData.data

  return (
    <div className='productContainer'>
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
            <button
              onClick={() => addProductToCart(product)}
              className={buttonStyles.primaryButton}
            >
              Add to Cart
            </button>
            <Counter />
          </div>
        </div>
      </div>
      <h2 className={styles.reviewHeader}>Reviews</h2>
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
