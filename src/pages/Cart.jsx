import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeCartItem } from '../store/cartSlice';
import buttonStyles from '../components/Buttons.module.css';
import styles from './Cart.module.css'

export default function CartPage() {
  const cartItems = useSelector((state) => state.cart.cartItems);
  const dispatch = useDispatch();

 
   // Calculate total quantity in the cart
   const totalQuantity = cartItems.reduce((total, item) => total + item.quantity, 0);

  const handleRemoveCartItem = (id) => {
    dispatch(removeCartItem({ id }));
  };

  return (
    <div className="productContainer">
      <div className={styles.cartContainer}>
        <h2>Checkout page</h2>
        <h3>Products in cart ({totalQuantity})</h3>
        {cartItems.map((item) => (
          <div className={styles.cartCard} key={item.id}>
            <img src={item.image.url} alt={item.image.alt} />
            <div className={styles.cartCardContent}>
              <p>{item.title}</p>
              <p>Price: {item.discountedPrice} NOK</p>
              <p>Quantity: {item.quantity}</p>
              <button
                className={buttonStyles.primaryButton}
                onClick={() => handleRemoveCartItem(item.id)}
              >
                Remove item
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
