import React from 'react';
import MainLayout from '../layout/MainLayout.jsx';
import './QuickLinkPage.css';

function QuickLink() {
    return (
        <MainLayout>
            <h1 className='link-header'>Quick Links</h1>
            <div className="qlcontainer">
                <div className="quicklink-item">
                    <a 
                        href="https://www.gcsheriff.org/enforcement-division/booking-and-release/" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="quicklink" 
                    >
                        Georgetown Booking/Releases
                    </a>
                    <span className="description"> - Access information on individuals recently booked or released from Georgetown County.</span>
                </div>

                <div className="quicklink-item">
                    <a 
                        href="https://www.horrycountysc.gov/departments/sheriffs-office/detention-center/booking-releases/"
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="quicklink" 
                    >
                        Horry Booking/Releases
                    </a>
                    <span className="description"> - Access information on individuals recently booked or released from Horry County.</span>
                </div>

                <div className="quicklink-item">
                    <a 
                        href="https://www.gtcounty.org/220/Magistrates---Traffic-Court"
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="quicklink"
                    >
                        Georgetown Traffic Court
                    </a>
                    <span className="description"> - Find resources and details for handling traffic violations and citation in Georgtown County.</span>
                </div>

                <div className="quicklink-item">
                    <a 
                        href="https://www.gtcounty.org/227/Solicitor"
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="quicklink" 
                    >
                        Georgetown County Solicitor
                    </a>
                    <span className="description"> - Learn about the office responsible for prosecuting criminal cases in Georgetown County.</span>
                </div>
            </div>
        </MainLayout>
    );
}

export default QuickLink;
