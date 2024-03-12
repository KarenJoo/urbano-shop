import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import styles from './Navbar.module.css'
import { useSelector } from 'react-redux'
import cartIcon from '../../assets/icons/shopping-cart.svg'

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const cartItems = useSelector((state) => state.cart.cartItems)

  const [cartCount, setCartCount] = useState(calculateTotalQuantity())

  function calculateTotalQuantity() {
    return cartItems.reduce((total, item) => total + item.quantity, 0)
  }

  const dropDownMenu = () => {
    setMenuOpen(!menuOpen)
  }

  useEffect(() => {
    const totalQuantity = calculateTotalQuantity()
    setCartCount(totalQuantity)
    localStorage.setItem('cartCount', totalQuantity.toString())
  }, [cartItems])

  return (
    <nav className={styles.navbar}>
      <h1>Urbano</h1>
      <div className={styles.linkCartContainer}>
        <div className={`${styles.navLinks} ${menuOpen ? styles.active : ''}`}>
          <Link to='/'>Home</Link>
          <Link to='/about'>About</Link>
          <Link to='/contact'>Contact</Link>
        </div>
        <div className={styles.menuAndCartContainer}>
          <button
            className={styles.burgerMenu}
            onClick={dropDownMenu}
            aria-label='Toggle navigation'
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
          <Link to='/cart' className={styles.cart}>
            <img className={styles.cartIcon} src={cartIcon} alt='Cart' />
            <div className={styles.cartCount}>
              <p>{cartCount}</p>
            </div>
          </Link>
        </div>
      </div>
    </nav>
  )
}
