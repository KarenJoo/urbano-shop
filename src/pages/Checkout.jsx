import React from 'react'
import styles from './checkout.module.css'
import { Link } from 'react-router-dom'
import buttonStyles from '../components/Buttons.module.css'

export default function Checkout() {
  return (
    <div className='productContainer'>
      <div className={styles.checkoutContainer}>
         <h1>Checkout</h1>
         <h5>Your order was successful! Thank you for shopping at Urbano.</h5>
         <Link
            to={`/`}
            className={buttonStyles.primaryButton}
            
          >
            Continue shopping
          </Link>
          </div>
        
    </div>
 
  )
}
