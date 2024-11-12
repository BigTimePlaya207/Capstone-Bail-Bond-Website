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
        Contact us at<br /> {/* Line break after this piece of information */}
        (843)-240-9240<br /> {/* Phone number, with a line break after */}
        Stanleybailbondsllc@gmail.com<br /> {/* Email address, with a line break after */}
        
        <br /> {/* Another line break to provide spacing */}
        
        {/* Additional contact methods */}
        Facebook Messenger<br /> {/* Label for another contact method */}
        https://m.me/StanleyBailbonds {/* Facebook Messenger link to initiate a conversation */}
        
      </div>
    </MainLayout>
  )
}

// Exporting the ContactPage component to be used elsewhere in the application
export default ContactPage;
