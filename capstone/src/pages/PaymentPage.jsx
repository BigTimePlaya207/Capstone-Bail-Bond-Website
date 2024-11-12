// PaymentPage.js
import React from 'react';
import MainLayout from '../layout/MainLayout';
import './PaymentPage.css';


function PaymentPage() {
  return (
    <MainLayout>

      { /* Payment Options Title */}
      <div className="payment-options-title">Payment Options
      </div>

      { /* Header */}
      <div className="payment-header">
        <h2>We accept payments in the form of...</h2>
      </div>

      { /* Payment Options Layout */}
      <div className="payment-options">

        {/* Left Side */}
        <div>
          <div className="payment-option">
            <img src="/images/cashapp.png" alt="Cash App" />
            <span>$StanleyBailBonds</span>
          </div>

          <div className="payment-option">
            <img src="/images/venmo.png" alt="Venmo" />
            <span>@StanleyBail-Bonds</span>
          </div>

          <div className="payment-option">
            <img src="/images/applepay.png" alt="Apple Pay" />
            <span>(843)-344-4470</span>
          </div>

          <div className="payment-option">
            <img src="/images/cash.png" alt="Cash" />
            <span>Cash!</span>
          </div>
        </div>

        {/* Right Side */}
        <div>
          <div className="payment-option">
            <img src="/images/zelle.png" alt="Zelle" />
            <span>(843)-240-3561</span>
          </div>

          <div className="payment-option">
            <img src="/images/creditcard.png" alt="Credit or Debit Card" />
            <span>Credit or Debit Card</span>
          </div>

          <div className="payment-option">
            <img src="/images/paypal.png" alt="Paypal" />
            <span>lmstanley518@yahoo.com</span>
          </div>
        </div>
      </div>
    </MainLayout>
  );
}

export default PaymentPage;