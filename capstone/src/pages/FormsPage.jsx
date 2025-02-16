import React from 'react' // Import React library to use JSX and create component 
import './FormsPage.css'; // Import the CSS file for styling the AboutPage component
import MainLayout from '../layout/MainLayout'; // Import the MainLayout component to provide a consistent layout

function FormsPage() {
    return (
        <MainLayout>
            <div>FormsPage
                <a href="/downloads/Bail_Bond_Application_2024.pdf" download="Bail_Bond_Application_2024.pdf" target="_blank" rel="noreferrer">
                    <button>Download .pdf file</button>
                </a>
            </div>
        </MainLayout>
    )
}

export default FormsPage