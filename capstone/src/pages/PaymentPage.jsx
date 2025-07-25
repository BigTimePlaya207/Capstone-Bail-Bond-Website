// Importing necessary dependencies
import React from 'react'; // Importing React to create the component
import MainLayout from '../layout/MainLayout'; // Importing a custom layout component (likely a header/footer wrapper)
import './PaymentPage.css'; // Importing the CSS file for styling the page

// PaymentPage component
function PaymentPage() {
  return (
    <MainLayout> {/* Wrapping the content in a MainLayout to maintain a consistent layout */}
      
      { /* Payment Options Title */}
      <div className="payment-options-title">
        Payment Options {/* Display the main title for the payment options */}
      </div>

      { /* Header Section */}
      <div className="payment-header">
        <h2>We accept payments in the form of...</h2> {/* A brief subtitle introducing the available payment methods */}
      </div>

      { /* Payment Options Layout */}
      <div className="payment-options">
        
        {/* Left Side Section with payment options */}
        <div>
          {/* Cash App Payment Option */}
          <div className="payment-option">
             <a
               href="https://cash.app/$StanleyBailBonds" 
               target="_blank" 
               rel="noopener noreferrer"
               className="payment-link" 
             >
            <img src="/images/cashapp.png" alt="Cash App" /> {/* Image for Cash App payment option */}
            <span>$StanleyBailBonds</span> {/* Cash App handle */}
            </a>
          </div>

          {/* Venmo Payment Option */}
          <div className="payment-option">
            <a 
              href="https://venmo.com/u/StanleyBail-Bonds" 
              target="_blank" 
              rel="noopener noreferrer"
              className="payment-link"
            >
            <img src="/images/venmo.png" alt="Venmo" /> {/* Image for Venmo payment option */}
            <span>@StanleyBail-Bonds</span> {/* Venmo handle */}
            </a>
          </div>

          {/* Apple Pay Payment Option */}
          <div className="payment-option">
            <img src="/images/applepay.png" alt="Apple Pay" /> {/* Image for Apple Pay payment option */}
            <span>(843)-344-4470</span> {/* Phone number for Apple Pay */}
          </div>

          {/* Cash Payment Option */}
          <div className="payment-option">
            <img src="/images/cash.png" alt="Cash" /> {/* Image for Cash payment option */}
            <span>Cash!</span> {/* Text indicating that cash is accepted */}
          </div>
        </div>

        {/* Right Side Section with more payment options */}
        <div>
          {/* Zelle Payment Option */}
          <div className="payment-option">
            <img src="/images/zelle.png" alt="Zelle" /> {/* Image for Zelle payment option */}
            <span>(843)-240-9240</span> {/* Phone number for Zelle */}
          </div>

          {/* Credit or Debit Card Payment Option */}
          <div className="payment-option">
            <img src="/images/creditcard.png" alt="Credit or Debit Card" /> {/* Image for Credit/Debit Card payment option */}
            <span>Credit or Debit Card</span> {/* Text indicating that Credit/Debit Cards are accepted */}
          </div>

          {/* PayPal Payment Option */}
          <div className="payment-option">
            <img src="/images/paypal.png" alt="Paypal" /> {/* Image for PayPal payment option */}
            <span>lmstanley5182002@yahoo.com</span> {/* PayPal email address */}
          </div>
          {/* Chime Payment Option */}
          <div className="payment-option">
            <img src="/images/chime.png" alt="Chime" />
            <span>$Michael-Stanley-184</span>
          </div>
        </div>
      </div>
    </MainLayout>
  );
}

// Exporting the PaymentPage component to be used in other parts of the app
export default PaymentPage;
