import React from 'react';
import './App.css'; // Import the CSS styling the App component 
import MainLayout from './layout/MainLayout'; // Import MainLayout component for consistent layout

// Define the App functional component 
function App() {
  return (
    <MainLayout> {/* Use MainLayout to wrap the content for a consistent structure */}
      <div className="App">
        <header className="App-header">
        </header>

        <h1 className="main-title">Stanley Bail Bonds LLC</h1> {/* Main title of the */}
        <div className="container"> {/* Containter for images and tagline */}
          <img src="/images/handcuff.png" alt="" className="handcuff" /> {/* Image for handcuff */}
          <div className="tagline">Locked up? We can get you out!</div> {/* Tagline text */}
          <img src="/images/open_handcuff.png" alt="" className="open_handcuff" /> {/* Image of an open handcuff */}
        </div>
        <div className="info-box"> {/* Information for the contacy details */}
          <p>Open 24-7</p> {/* Availability Information */}
          <p>Operating in SC, NC, FL, and TX</p> {/* States of Operation */}
          <p>(843)-240-9240</p> {/* Contact phone number */}
          <p>Stanleybailbondsllc@gmail.com</p> {/* Contact email */}
        </div>

      </div>
    </MainLayout>
  );
}

export default App;
