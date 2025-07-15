// Import react library
import React from 'react'
// Import Navbar component for the top navigation
import Navbar from '../components/Navbar'
// Import Footer component for the bottom of the layout
import Footer from '../components/Footer'
// Import LeaveReviewButton component for user feedback
import LeaveReviewButton from '../components/ReviewButton'
// Import MainLAyout
import './MainLayout.css';

//Define the MainLayout functional component, which accepts children as props
function MainLayout({ children }) {
    return (
        <div>
            <Navbar></Navbar> {/* Render the Navbar component */}
            <div>{children}</div> {/* Render child components or content passed to MainLayout */}
            <LeaveReviewButton></LeaveReviewButton> {/* Render the button for leaving a review */}
            <Footer></Footer> {/* Render the Footer component */}
        </div>
    )
}
export default MainLayout

