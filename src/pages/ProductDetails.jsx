import React from 'react'
import useFetch from '../hooks/useFetch'
import { PRODUCT_ID_URL } from '../utils/api'
import styles from '../pages/ProductDetails.module.css'
import buttonStyles from '../components/Buttons.module.css'
import { useDispatch, useSelector } from 'react-redux'
import { addToCart } from '../store/cartSlice'
import Counter from '../store/Counter'


export default function ProductDetails() {
  const { data: productData, loading, error } = useFetch(`${PRODUCT_ID_URL}`);
  const dispatch = useDispatch();
  const cartItems = useSelector(state => state.cart.cartItems);

  const handleAddToCart = (product) => {
    const updatedCartItems = [...cartItems];
    const itemIndex = updatedCartItems.findIndex((item) => item.id === product.id);

    if (itemIndex >= 0) {
      updatedCartItems[itemIndex].quantity += 1; // Increment quantity if item exists
    } else {
      updatedCartItems.push({ ...product, quantity: 1 }); // Add new item with quantity 1
    }

    // Update local state if you are using it to manage UI
    dispatch(addToCart(product));
    // Update localStorage to reflect the new state
    localStorage.setItem('cartItems', JSON.stringify(updatedCartItems));
  };

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
    <div className="productContainer">
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
              onClick={() => handleAddToCart(product)}
              className={buttonStyles.primaryButton}
            >
              Add to Cart
            </button>
            <Counter productId={product.id} />
            <p>Quantity: {cartItems.find(item => item.id === product.id)?.quantity || 0}</p>
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
  );
}