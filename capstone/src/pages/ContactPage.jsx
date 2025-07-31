// Importing React library and necessary dependencies
import React from 'react' // React is imported to create a React component
import './ContactPage.css'; // Importing the CSS file for styling the ContactPage
import MainLayout from '../layout/MainLayout.jsx'; // Importing a custom layout component (likely a wrapper with common elements like header/footer)

// Define the ContactPage component
function ContactPage() {
  return (
    <MainLayout> {/* Wrapping the page content in MainLayout component to maintain consistent layout across pages */}
      <div className='text_block'> {/* A div with the 'text_block' class for styling the contact info */}

        {/* Contact Information */}
        Contact us at<br />
        <a href="tel:8432409240">(843)-240-9240</a><br />
        <a href="mailto:Stanleybailbondsllc@gmail.com">Stanleybailbondsllc@gmail.com</a><br />

        <br />

        {/* Additional contact methods */}
        Facebook Messenger<br />
        <a href="https://m.me/StanleyBailbonds" target="_blank" rel="noopener noreferrer">
          https://m.me/StanleyBailbonds
        </a>

      </div>
    </MainLayout>
  )
}

// Exporting the ContactPage component to be used elsewhere in the application
export default ContactPage;
