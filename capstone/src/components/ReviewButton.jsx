import React from "react";
function LeaveReviewButton() {
    return (
      <a 
        href="https://g.page/r/Ca8Aqhe_jumTEBE/review"
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
      position: "fixed",
      bottom: "1px",
      left: "700px",
      padding: '10px 20px',
      fontSize: '16px',
      fontWeight: 'bold',
      color: 'white',
      backgroundColor: '#000000',  // Green button background
      border: 'none',
      borderRadius: '5px',
      textDecoration: 'none',  // Remove underline from the link
      cursor: 'pointer',
      transition: 'background-color 0.3s ease',
      zIndex: 1000,
      display: 'inline-block'
    }
  };
  
  export default LeaveReviewButton;