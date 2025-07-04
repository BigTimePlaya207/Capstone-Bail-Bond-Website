//Import react Library
import React from 'react'
//Import Link Component for navigation between pages
import { Link } from 'react-router-dom';

//Define the Footer functional component 
function Footer() {
    return (
        <div className='footer'>
            <ul color='black' className='footer-menu'>{/* Unordered list of items */}
                <li><Link to="/privacy">Privacy Policy</Link></li>{/* Link to Privacy Policy page */}
                <li><Link to="/term">Term Of Service</Link></li>{/* Link to Term of Service page */}
            </ul>
        </div>
    )
}


export default Footer