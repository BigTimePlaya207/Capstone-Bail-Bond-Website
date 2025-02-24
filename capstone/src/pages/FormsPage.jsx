import React from 'react' // Import React library to use JSX and create component 
import './FormsPage.css'; // Import the CSS file for styling the AboutPage component
import MainLayout from '../layout/MainLayout'; // Import the MainLayout component to provide a consistent layout

function FormsPage() {
    return (
        <MainLayout>
            <div class="infotext">
                <p>
                    Download and print to fill out form, then send scanned form to Stanleybailbondsllc@gmail.com
                </p>
                <a href="/downloads/Bail_Bond_Application_2024.pdf" download="Bail_Bond_Application_2024.pdf" target="_blank" rel="noreferrer">
                    <button class='button1'>Download Form</button>
                </a>
            </div>
        </MainLayout>
    )
}

export default FormsPage