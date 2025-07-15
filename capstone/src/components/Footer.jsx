import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className='footer'>
      <ul className='footer-menu'>
        <li><Link to="/privacy">Privacy Policy</Link></li>
        <li><Link to="/term">Term Of Service</Link></li>
        <li>
          <a
            href="https://g.page/r/Ca8Aqhe_jumTEBE/review"
            target="_blank"
            rel="noopener noreferrer"
            className="review-button"
          >
            Leave a Review
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Footer;
