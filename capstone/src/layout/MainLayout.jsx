import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import LeaveReviewButton from '../components/ReviewButton'

function MainLayout({ children }) {
    return (
        <div>
            <Navbar></Navbar>
            <div>{children}</div>
            <LeaveReviewButton></LeaveReviewButton>
            <Footer></Footer>
        </div>
    )
}
export default MainLayout

