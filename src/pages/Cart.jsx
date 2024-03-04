import React from 'react'
import { useSelector } from 'react-redux'

export default function CartPage() {
  const cartItems = useSelector((state) => state.cart.cartItems)

  return (
    <div className='productContainer'>
      <div className='cartContainer'>
        <h2>Cart</h2>
        {cartItems.map((item) => (
          <div className='cartCard' key={item.id}>
            <img src={item.image.url} alt={item.image.alt} />
            <div className='cartCardFoot'>
              <p>{item.title}</p>
              <p>{item.price} NOK</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
