import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styles from './Navbar.module.css';
import { useSelector } from 'react-redux';
import cartIcon from '../../assets/icons/shopping-cart.svg';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const cartItems = useSelector((state) => state.cart.cartItems);

  // Calculate the total quantity of all items in the cart for the initial render
  const calculateTotalQuantity = () => {
    return cartItems.reduce((total, item) => total + item.quantity, 0);
  };

  const [cartCount, setCartCount] = useState(() => {
    const storedCartCount = localStorage.getItem('cartCount');
    return storedCartCount ? parseInt(storedCartCount, 10) : calculateTotalQuantity();
  });
  
  const dropDownMenu = () => {
    setMenuOpen(!menuOpen);
  };

  useEffect(() => {
    const handleMenuClick = () => {
      const burgerMenu = document.querySelector(`.${styles.burgerMenu}`);
      burgerMenu.addEventListener('click', function () {
        this.classList.toggle(styles.active);
      });
    };

    handleMenuClick();

    return () => {
      const burgerMenu = document.querySelector(`.${styles.burgerMenu}`);
      burgerMenu.removeEventListener('click', handleMenuClick);
    };
  }, [menuOpen]);

  useEffect(() => {
    // Update to calculate total quantity based on item quantities in the cart
    const totalQuantity = cartItems.reduce((total, item) => total + item.quantity, 0);
    setCartCount(totalQuantity);
    localStorage.setItem('cartCount', totalQuantity.toString()); // Update localStorage with the new total quantity
  }, [cartItems]);

  return (
    <nav className={styles.navbar}>
      <h1>Urbano</h1>
      <button
        className={styles.burgerMenu}
        onClick={dropDownMenu}
        aria-label='Toggle navigation'
      >
        <span></span>
        <span></span>
        <span></span>
      </button>
      <div className={`${styles.navLinks} ${menuOpen ? styles.active : ''}`}>
        <Link to='/'>Home</Link>
        <Link to='/about'>About</Link>
        <Link to='/contact'>Contact</Link>
        <Link to='/cart' className={styles.cart}>
          {' '}
          <img className={styles.cartIcon} src={cartIcon} alt='Cart' />{' '}
        </Link>
        <div className={styles.cartCount}>
          <p>{cartCount}</p>
        </div>
      </div>
    </nav>
  );
}
