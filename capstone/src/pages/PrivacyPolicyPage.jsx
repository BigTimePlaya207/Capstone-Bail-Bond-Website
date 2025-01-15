import React from 'react'
import MainLayout from '../layout/MainLayout'
import './PrivacyPolicyPage.css';

function PrivacyPolicyPage() {
    return (
        <MainLayout>
            <div className='privacy-policy'>
                <h1>Privacy Policy</h1>
                <p><strong>Effective Date:</strong> January 7th 2025</p>
                <p>
                    <strong>Stanley Bail Bonds LLC</strong> are committed to protecting your privacy.
                    This Privacy Policy explains how we collect, use, and protect your information when you visit our website.
                    By using our website, you agree to the practices outlined in this policy.
                </p>

                <h2>1. Information We Collect</h2>
                <ul>
                    <li><strong>Personal Information You Provide:</strong> If you submit questions via our contact form or FAQ section, we may collect your name, email address, and message content.</li>
                    <li><strong>Payment Information:</strong> We do not directly process payments but provide links or details for third-party payment options (e.g., Cashapp). Any payment information shared with these services is subject to their privacy policies.</li>
                    <li><strong>Usage Data:</strong> Non-personal data, such as your IP address, browser type, and the pages you visit on our site, is collected to improve the website's functionality.</li>
                </ul>
                <h2>2. How We Use Your Information</h2>
                <ul>
                    <li>To respond to your inquries and FAQs.</li>
                    <li>To Provide clear and accurate payment instructions.</li>
                    <li>To improve our website and user experience.</li>
                </ul>

                <h2>3. Sharing of Information</h2>
                <p>
                    We do not sell or rent your information to third parties. Your data may be shared in the following limited cases:
                </p>
                <ul>
                    <li>With service providers or third-party platforms (e.g., payment processors) necessary to provide services.</li>
                    <li>When required by law or to protect our rights or those of others.</li>
                </ul>

                <h2>4. Third-Party Payment Services</h2>
                <p>
                    Our website may include links to third-party payment services like Cash App.
                    We do not store or process your payment information. 
                    Please review the privacy policies of the third-party platforms for details on their data collection and usage practices.
                </p>

                <h2>5. Cookies and Tracking</h2>
                <p>
                    We may use cookies or similar technologies to enhance your browsing experience.
                    You can control or disable cookies through your broswer settings.
                </p>

                <h2>6. Data Security</h2>
                <p>
                    We implement reasonable security measures to protect your personal information.
                    However, no method of transmission over the internet is entirely secure.
                    Use Caution when submitting information online.
                </p>

                <h2>7. Your rights</h2>
                <p>You have the right to:</p>
                <ul>
                    <li>Access and review the personal information we hold about you.</li>
                    <li>Request corrections or deletion of your data.</li>
                    <li>Opt out of any future communications from us.</li>
                </ul>
                <p>
                    To exercise these rights, please contact us at <strong>Stanleybailbondsllc@gmail.com</strong>.
                </p>

                <h2>8. Updates to This Policy</h2>
                <p>
                    We may update this Privacy Policy from time to time. Any changes will be posted on this page with the updated effective date.
                </p>

                <h2>9. Contact Us</h2>
                <p>
                    If you have any questions or concerns about this Privacy Policy, please contact us at:
                </p>
                <p>
                    <strong>Email:</strong> Stanleybailbondsllc@gmail.com <br />
                    <strong>Phone:</strong> (843)-240-9240 
                </p>
            </div>
        </MainLayout>
    );
}

export default PrivacyPolicyPage