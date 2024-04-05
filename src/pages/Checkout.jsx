import React from 'react'
import styles from '../pages/Checkout.module.css'
import { Link } from 'react-router-dom'
import buttonStyles from '../components/Buttons.module.css'

export default function Checkout() {
  return (
    <div className='parentContainer'>
      <div className='childContainer'>
        <h1 className={styles.childHeader}>Checkout</h1>
        <h5 className={styles.childText}>
          Your order was successful! Thank you for shopping at Urbano.
        </h5>
        <Link to={`/`} className={buttonStyles.primaryButton}>
          Continue shopping
        </Link>
      </div>
    </div>
  )
}
