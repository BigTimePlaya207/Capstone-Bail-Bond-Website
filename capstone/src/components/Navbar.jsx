// imports 
import React from 'react'
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <div className='navbar'>
        <div className='logo'>
            Stanley Bail Bonds 
        </div>
        <ul className='navbar-menu'>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/contact">Contact Us</Link></li>
            <li><Link to="/faq">FAQ</Link></li>
            <li><Link to="/payment">Payment Options</Link></li>
            <li><Link to="/quick">Quick Links</Link></li>
        </ul>
    </div>
  )
}

export default Navbar