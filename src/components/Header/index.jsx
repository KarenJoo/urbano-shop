import React, { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import styles from './Navbar.module.css'
import { useSelector } from 'react-redux'
import cartIcon from '../../assets/icons/shopping-cart.svg'

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false)
  const cartItems = useSelector((state) => state.cart.cartItems)
  const menuClose = useRef(null)

  const calculateTotalQuantity = () => {
    return cartItems.reduce((total, item) => total + item.quantity, 0)
  }

  const [cartCount, setCartCount] = useState(calculateTotalQuantity())

  const dropDownMenu = () => {
    setMenuOpen(!menuOpen)
  }

  const closeMenu = () => {
    setMenuOpen(false)
  }

  useEffect(() => {
    const totalQuantity = calculateTotalQuantity()
    setCartCount(totalQuantity)
    localStorage.setItem('cartCount', totalQuantity.toString())
  }, [cartItems, calculateTotalQuantity])

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuClose.current && !menuClose.current.contains(event.target)) {
        setMenuOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  return (
    <nav className={styles.navbar}>
      <Link to={`/`} onClick={closeMenu}>
        <h1>Urbano</h1>
      </Link>
      <div className={styles.linkCartContainer}>
        <div
          ref={menuClose}
          className={`${styles.navLinks} ${menuOpen ? styles.active : ''}`}
        >
          <Link to='/' onClick={closeMenu}>
            Home
          </Link>
          <Link to='/about' onClick={closeMenu}>
            About
          </Link>
          <Link to='/contact' onClick={closeMenu}>
            Contact
          </Link>
        </div>
        <div className={styles.menuAndCartContainer}>
          <button
            className={styles.burgerMenu}
            onClick={dropDownMenu}
            aria-label='Toggle navigation'
            data-testid='burger-menu'
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

export default Navbar
