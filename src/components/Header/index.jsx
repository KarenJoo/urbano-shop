import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styles from './Navbar.module.css';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const dropDownMenu = () => {
    setMenuOpen(!menuOpen);
  };

  useEffect(() => {
    const handleMenuClick = () => {
      const burgerMenu = document.querySelector(`.${styles.burgerMenu}`);
      burgerMenu.addEventListener('click', function() {
        this.classList.toggle(styles.active);
      });
    };

    handleMenuClick();

    return () => {
      const burgerMenu = document.querySelector(`.${styles.burgerMenu}`);
      burgerMenu.removeEventListener('click', handleMenuClick);
    };
  }, [menuOpen]); // Ensure the effect runs when menuOpen changes

  return (
    <nav className={styles.navbar}>
      <h1>Urbano</h1>
      <button className={styles.burgerMenu} onClick={dropDownMenu} aria-label='Toggle navigation'>
        <span></span>
        <span></span>
        <span></span>
      </button>
      <div className={`${styles.navLinks} ${menuOpen ? styles.active : ''}`}>
        <Link to='/'>Home</Link>
        <Link to='/about'>About</Link>
        <Link to='/contact'>Contact</Link>
        <Link to='/cart'>Cart</Link>
      </div>
    </nav>
  );
}
