import React from 'react'
import './ContactPage.css';
import MainLayout from '../layout/MainLayout.jsx';

function ContactPage() {
  return (
    <MainLayout>
      <div class='text_block'>
          Contact us at<br />
          (843)-240-9240<br />
          Stanleybailbondsllc@gmail.com<br />
          <br />
          Facebook Messenger<br />
          https://m.me/StanleyBailbonds
      </div>
    </MainLayout>
  )
}

export default ContactPage;