import React from 'react'
import { Link } from 'react-router-dom';


function Footer() {
    return (
        <div className='footer'>
            <ul color='black' className='footer-menu'>
                <li><Link to="/privacy">Privacy Policy</Link></li>
                <li><Link to="/term">Term Of Service</Link></li>
            </ul>
        </div>
    )
}

export default Footer