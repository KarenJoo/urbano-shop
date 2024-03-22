import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { removeCartItem, clearCart } from '../store/cartSlice'
import buttonStyles from '../components/Buttons.module.css'
import styles from './Cart.module.css'
import { calculateCart } from '../store/cartCalculation'
import { Link } from 'react-router-dom'

export default function CartPage() {
  const cartItems = useSelector((state) => state.cart.cartItems);
  const dispatch = useDispatch();

  const totalSum = calculateCart(cartItems);
  const totalQuantity = cartItems.reduce((total, item) => total + item.quantity, 0);

  const handleRemoveCartItem = (id) => {
    dispatch(removeCartItem({ id }));
  };

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  return (
    <div className='productContainer'>
      <div className={styles.cartContainer}>
        <h2>Shopping bag</h2>
        <h3 className={styles.cartParagraph}>
          {' '}
          Products in cart ({totalQuantity})
        </h3>
        {cartItems.map((item) => (
          <Link
            to={`/product/${item.id}`}
            className={styles.cartCard}
            key={item.id}
          >
            <img src={item.image.url} alt={item.image.alt} />
            <div className={styles.cartCardContent}>
              <h5>{item.title}</h5>
              <p>Price: {item.discountedPrice} NOK</p>
              <p>Quantity: {item.quantity}</p>
              <button
                className={buttonStyles.smallButton}
                onClick={() => handleRemoveCartItem(item.id)}
              >
                Remove
              </button>
            </div>
          </Link>
        ))}
        <div className={styles.totalSum}>
          Total Sum: {totalSum} NOK{' '}
          <Link to={`/`}>
            <p>Shop more</p>
          </Link>
          <button
            className={buttonStyles.primaryButton}
            onClick={handleClearCart}
          >
            Checkout
          </button>
        </div>
      </div>
    </div>
  )
}
