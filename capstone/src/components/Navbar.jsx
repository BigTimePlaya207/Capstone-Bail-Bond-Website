//Import react Library
import React from 'react'
//Import Link Component for navigation between pages
import { Link } from 'react-router-dom';

//Devine the Navbar functional component 
function Navbar() {
  return (
    <div className='navbar'>
        <div className='logo'>
            Stanley Bail Bonds 
        </div>
        <ul className='navbar-menu'> {/* Unordered list for navbar menu items*/}
            <li><Link to="/">Home</Link></li>{/* Link to Home page */}
            <li><Link to="/about">About</Link></li>{/* Link to About Policy page */}
            <li><Link to="/contact">Contact Us</Link></li>{/* Link to Contact Us Policy page */}
            <li><Link to="/faq">FAQ</Link></li>{/* Link to FAQ page */}
            <li><Link to="/payment">Payment Options</Link></li>{/* Link to Payment Options page */}
            <li><Link to="/quick">Quick Links</Link></li>{/* Link to Quick Links page */}
            <li><Link to="/review">Review</Link></li>{/* Link to Review Review page */}
        </ul>
    </div>
  )
}

export default Navbar