import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styles from './Navbar.module.css';
import { useSelector } from 'react-redux';
import cartIcon from '../../assets/icons/shopping-cart.svg';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const cartItems = useSelector((state) => state.cart.cartItems);
  const [cartCount, setCartCount] = useState(() => {
    const storedCartCount = localStorage.getItem('cartCount');
    return storedCartCount ? parseInt(storedCartCount, 10) : 0;
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
    const count = cartItems.length;
    setCartCount(count);
    localStorage.setItem('cartCount', count.toString());
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
