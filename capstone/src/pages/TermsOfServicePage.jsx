import React from 'react'
import MainLayout from '../layout/MainLayout'
import './TermsOfServicePage.css'
function TermsOfServicePage() {
    return (
        <MainLayout>
            <div className='terms-of-service'>
                <h1>Terms of Service</h1>
                <p><strong>Effective Date:</strong> January 7th 2025</p>

                <p>
                    Welcome to <strong>Stanley Bail Bond LLC</strong>. By accessing or using our
                    website, you agree to be bound by these Terms of Service. Please read them carefully. If you do not agree
                    to these terms, you may not use the website.
                </p>

                <h2>1. Services Provided</h2>
                <p> Our website is designed to:</p>
                <ul>
                    <li>Provide information about our bail bond service and company owners.</li>
                    <li>Offer instructions for payment options, such as Cash App.</li>
                    <li>Answer Frequently asked questions (FAQ) for customers seeking bail bond services.</li>
                </ul>
                <p>We do not process bail transactions or provide legal advice directly through this website.</p>

                <h2>2. User Respondsibilities</h2>
                <p>By using our website, you agree to:</p>
                <ul>
                    <li>Provide accurate and truthful information if submitting a question or inquiry.</li>
                    <li>Not miuse the website by uploading harmful content, attempting unauthorized access, or engaging in fradulent activites</li>
                    <li>Understand that the information provided on our website is for informational purposes only and is not legal advice.</li>
                </ul>

                <h2>3. Payment Information</h2>
                <p>
                    We provide details for third-party payment platforms, such as Cash App to streamline the payment process:
                </p>
                <ul>
                    <li>Payments are processed through these third-party services, and we do not store or manage your payment information.</li>
                    <li>You agree to use these services at your own risk and comply with their respective terms and conditions.</li>
                </ul>

                <h2>4. Intellectual Property</h2>
                <p>
                    All content on this website, including text, images, logos, and design, is the property of 
                    <strong> Stanley Bail Bond LLC</strong>.
                </p>
                <ul>
                    <li>You may not copy, reproduce, or distribute, or use any content without our prior written permission.</li>
                    <li>Unauthorized use of our intellectual property may result in legal action.</li>
                </ul>

                <h2>5. Third-Party Links</h2>
                <p>
                    Our website may include links to third-party websites or services (e.g., payment platforms). We are not
                    responsible for the content, security, or practices of these third-party websites. You are encouraged to
                    review their terms of service and privacy policies before using their services. 
                </p>
                <h2> 6. Limitation of Liability</h2>
                <p>
                    We strive to ensure the accuracy of the information provided on our website. However, we make no gurantees:
                </p>
                <ul>
                    <li>That the website will be error-free, secure, or uninterrupted.</li>
                    <li>Regarding the completeness or accuracy of the content.</li>
                </ul>
                <p>
                    To the fullest extent permitted by law, we are not liable for any direct indirect, or incidental damages
                    resulting from your use of the website or third-party payment platforms.
                </p>
                <h2>7. Termination</h2>
                <p>
                    We reserve the right to terminate or restrict access to our website at any time, for any reason, without notice.
                </p>
                <h2>8. Changes to the Terms</h2>
                <p>
                    We may update these Terms of Service from time to time. Any changes will be posted on this page with the
                    updated effective date. Your continued use of the website after changes are made indicates your acceptance
                    of the new terms.
                </p>
                <h2>9. Governing Law</h2>
                <p>
                    These Terms of Service are governed by the laws of South Carolina, without regard to its conflict of law principles.
                    Any disputes arising from your use of the website will be subject to the exclusive jurisdiction of the courts in
                    Georgetown, South Carolina.
                </p>
                <h2>10. Contact Us</h2>
                <p>
                    If you have any questions about these Term of Service, please contact us at:
                </p>
                <p>
                    <strong>Email:</strong> Stanleybailbondsllc@gmail.com <br />
                    <strong>Phone:</strong> (843)-240-9240
                </p>
            </div>
        </MainLayout>
    );
}

export default TermsOfServicePage