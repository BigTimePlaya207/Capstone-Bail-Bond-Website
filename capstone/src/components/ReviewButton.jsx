// Import react library
import React from "react";
function LeaveReviewButton() {
    return (
      <a 
        href="https://g.page/r/Ca8Aqhe_jumTEBE/review" // Link to go to review page
        target="_blank"  // Opens the link in a new tab
        rel="noopener noreferrer"  // Security measure to prevent access to the window object from the new page
        style={styles.button}  // Inline styles for the button
      >
        Leave a Review
      </a>
    );
  }
  
  const styles = {
    button: {
      bottom: "1px", // Positions the button 1 pixel from the bottom of the viewport
      left: "50%", // Positions the button 700 pixles from the left side of the viewport
      transform: "translateX(-50%)",
      padding: '10px 20px', // Adds padding of 10px vertically and 20px horizontally inside the button
      fontSize: '16px', // Sets font size of the button text 
      fontWeight: 'bold', // Makes the button text bold
      color: 'white', // Sets the text color of the button to white
      backgroundColor: 'black',  // Green button background
      border: 'none', // Removes the default button of the border
      borderRadius: '5px', // Rounds the corner of button with a radius of 5 pixles
      textDecoration: 'none',  // Remove underline from the link
      cursor: 'pointer', // Changes the cursor to a pointer when hovering over the button
      transition: 'background-color 0.3s ease', // Adds a smooth transition effect for background changes 
      zIndex: 1000, // Sets the stacking of order of the button to ensure it appears above other elements
      display: 'inline-block' // Makes the button an inline-block element to respect width and height
    }
  };
  
  export default LeaveReviewButton;