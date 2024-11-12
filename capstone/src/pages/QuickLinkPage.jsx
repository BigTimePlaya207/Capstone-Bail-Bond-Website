import React from 'react'
import MainLayout from '../layout/MainLayout.jsx';
import { Link } from 'react-router-dom';

function QuickLink() {
    return (
        <MainLayout>
            <div class='text_block'>
                <p>

                    Georgetown Inmate Bookings<br />
                    <Link to='https://www.gcsheriff.org/enforcement-division/booking-and-release/' style={{ color: '#FFF' }}>
                        https://www.gcsheriff.org/enforcement-division/booking-and-release/</Link> <br />

                    <br />
                    Horry Booking/Releases<br />
                    <Link to='https://www.horrycountysc.gov/departments/sheriffs-office/detention-center/booking-releases/' style={{ color: '#FFF' }}>
                        https://www.horrycountysc.gov/departments/sheriffs-office/detention-center/booking-releases/</Link><br />
                    <br />
                    Georgetown Magistrate <br />
                    <Link to='https://www.sccourts.org/magistratecourt/magistrates.cfm?countyno=22' style={{ color: '#FFF' }}>
                        https://www.sccourts.org/magistratecourt/magistrates.cfm?countyno=22</Link><br />
                    <br />
                    Georgetown Traffic Court<br />
                    (843) 545-4020<br />
                    <Link to='https://g.co/kgs/eRxBiXH' style={{ color: '#FFF' }}>
                        https://g.co/kgs/eRxBiXH</Link><br />
                    <br />
                    Georgetown County Solicitor<br />
                    (843) 545-3169<br />
                    <Link to='https://g.co/kgs/J3M212j' style={{ color: '#FFF' }}>
                        https://g.co/kgs/J3M212j</Link><br />
                </p>

            </div>

        </MainLayout>
    )
}

export default QuickLink