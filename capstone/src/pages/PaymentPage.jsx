import React from 'react';
import MainLayout from '../layout/MainLayout';
import './PaymentPage.css';

function PaymentPage() {
  return (
    <MainLayout>
      {/* Payment Options Title */}
      <div className="payment-options-title">
        Payment Options
      </div>

      {/* Header Section */}
      <div className="payment-header">
        <h2>We accept payments in the form of...</h2>
      </div>

      {/* Payment Options Layout */}
      <div className="payment-options">

        {/* Left Side */}
        <div>
          {/* Cash App */}
          <div className="payment-option">
            <a 
              href="https://cash.app/$StanleyBailBonds" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="payment-link"
            >
              <img src="/images/cashapp.png" alt="Cash App" />
              <span>$StanleyBailBonds</span>
            </a>
          </div>

          {/* Venmo */}
          <div className="payment-option">
            <a 
              href="https://venmo.com/u/StanleyBailBonds" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="payment-link"
            >
              <img src="/images/venmo.png" alt="Venmo" />
              <span>@StanleyBailBonds</span>
            </a>
          </div>

          {/* Apple Pay */}
          <div className="payment-option">
            <div className="payment-link">
              <img src="/images/applepay.png" alt="Apple Pay" />
              <span>(843)-344-4470</span>
            </div>
          </div>

          {/* Chime */}
          <div className="payment-option">
            <a
            href="https://app.chime.com/link/qr?u=StanleyBailBonds"
            target="_blank"
            rel="noopener noreferrer"
            className="payment-link"
            >
          
              <img src="/images/chime.png" alt="Chime" />
              <span>$StanleyBailBonds</span>  
            </a>
          </div>

          {/* Cash */}
          <div className="payment-option">
            <div className="payment-link">
              <img src="/images/cash.png" alt="Cash" />
              <span>Cash!</span>
            </div>
          </div>
        </div>

        {/* Right Side */}
        <div>
          {/* Zelle */}
          <div className="payment-option">
            <div className="payment-link">
              <img src="/images/zelle.png" alt="Zelle" />
              <span>(843)-240-9240</span>
            </div>
          </div>

          {/* Credit or Debit Card */}
          <div className="payment-option">
            <div className="payment-link">
              <img src="/images/creditcard.png" alt="Credit or Debit Card" />
              <span>Credit or Debit Card</span>
            </div>
          </div>

          {/* PayPal */}
          <div className="payment-option">
            <a 
              href="https://paypal.me/StanleyBailBonds"
              target="_blank"
              rel="noopener noreferrer"
              className="payment-link"
            >
              <img src="/images/paypal.png" alt="Paypal" />
              <span>lmstanley5182002@yahoo.com</span>
            </a>
          </div>
        </div>

      </div>
    </MainLayout>
  );
}

export default PaymentPage;