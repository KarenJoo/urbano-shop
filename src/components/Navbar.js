import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <nav className='navbar'>
        <h1>Urbano</h1>
        <div className='nav-links'>
            <Link to="/">Homepage</Link>
            <Link to="/about">About</Link>
            <Link to="/contact">Contact</Link>
            <Link to="/cart">Cart</Link>
        </div>
    </nav>
  );
}
