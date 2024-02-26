import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const dropDownMenu = () => {
    setMenuOpen(!menuOpen);
  };

  useEffect(() => {
    const handleMenuClick = () => {
      const burgerMenu = document.querySelector('.burger-menu');
      burgerMenu.addEventListener('click', function() {
        this.classList.toggle('active');
      });
    };

    handleMenuClick();

    return () => {
      const burgerMenu = document.querySelector('.burger-menu');
      burgerMenu.removeEventListener('click', handleMenuClick);
    };
  }, []); // Empty dependency array to ensure the effect runs only once

  return (
    <nav className='navbar'>
      <h1>Urbano</h1>
      <button className='burger-menu' onClick={dropDownMenu} aria-label='Toggle navigation'>
        <span></span>
        <span></span>
        <span></span>
      </button>
      <div className={`nav-links ${menuOpen ? 'active' : ''}`}>
        <Link to='/'>Home</Link>
        <Link to='/about'>About</Link>
        <Link to='/contact'>Contact</Link>
        <Link to='/cart'>Cart</Link>
      </div>
    </nav>
  );
}
