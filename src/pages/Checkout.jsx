import React from 'react'
import { Link } from 'react-router-dom'
import buttonStyles from '../components/Buttons.module.css'

export default function Checkout() {
  return (
    <div className='parentContainer'>
      <div className='childContainer'>
        <div className='childHeader'>
          <h1>Checkout</h1>
          <div>
            <p>Your order was successful!</p>
            <p>Thank you for shopping at Urbano.</p>
          </div>
        </div>
        <Link to={`/`} className={buttonStyles.primaryButton}>
          Continue shopping
        </Link>
      </div>
    </div>
  )
}
