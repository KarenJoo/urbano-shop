import React from 'react'
import styles from './Checkout.module.css'
import { Link } from 'react-router-dom'
import buttonStyles from '../components/Buttons.module.css'

export default function Checkout() {
  return (
    <div className='parentContainer'>
      <div className='childContainer'>
        <div className={styles.checkoutContainer}>
          <h1 className={styles.childHeader}>Checkout</h1>
          <div className={styles.childText}>
            <p>Your order was successful!</p>
            <p>Thank you for shopping at Urbano.</p>
          </div>
          <Link to={`/`} className={buttonStyles.primaryButton}>
            Continue shopping
          </Link>
        </div>
      </div>
    </div>
  )
}
