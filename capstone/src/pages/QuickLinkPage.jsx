import React from 'react';
import MainLayout from '../layout/MainLayout.jsx';
import './QuickLinkPage.css';

function QuickLink() {
    return (
        <MainLayout>
            <h1 className='link-header'>Quick Links</h1>
            <div className="qlcontainer">
                <p>
                    {/* Georgetown Inmate Bookings */}
                    <a 
                        href="https://www.gcsheriff.org/enforcement-division/booking-and-release/" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="quicklink" 
                    >
                        Georgetown Inmate Bookings
                    </a>
                    
                    {/* Horry Booking/Releases */}
                    <a 
                        href="https://www.horrycountysc.gov/departments/sheriffs-office/detention-center/booking-releases/"
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="quicklink" 
                    >
                        Horry Booking/Releases
                    </a>
          
                    {/* Georgetown Traffic Court */}
                    <a 
                        href="https://www.gtcounty.org/220/Magistrates---Traffic-Court"
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="quicklink"
                    >
                        Georgetown Traffic Court
                    </a>
                    
                    {/* Georgetown County Solicitor */}
                    <a 
                        href="https://www.gtcounty.org/227/Solicitor"
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="quicklink" 
                    >
                        Georgetown County Solicitor
                    </a>
                </p>
            </div>
        </MainLayout>
    );
}

export default QuickLink;
