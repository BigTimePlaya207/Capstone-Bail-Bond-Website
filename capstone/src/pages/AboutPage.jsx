import React from 'react'
import './AboutPage.css';
import MainLayout from '../layout/MainLayout';

function AboutPage() {
  return (
    <MainLayout>
      <div>
        
        <h1 className='About-title'>About US</h1>
        <div class='split left'>
          <div class='left-align'>
            <p className='owner-background'>
              Stanley Bail Bonds LLC was formed in 2012, in Georgetown, SC.
              Our services, however, span much farther reaching across several states, including SC, NC, FL, TX, &amp; TN.
            </p>
            <div className='owner-info'>
              <p style={{ color: 'white' }}>
                <strong>Owner: Michael Stanley</strong><br />
                Licensed Bail Bond Agent<br />
                Licensed Property &amp; Casualty Agent
              </p>
            </div>
            <h3 className="mission-title">Our Mission:</h3>
            <p className='mission'>
              We strive to streamline and expedite the bail bond process so clients can reunite with their loved ones.
              Additionally, we ensure all parties maintain their dignity and respect during this uncomfortable time.
              Our level of compassion is unmatched. With around the clock service, we guarantee you will not be disappointed.
            </p>
          </div>
        </div>

        <div class='split right'>
          <img src='images/about.png' alt="" style={{ height: 600, width: 600, right: '30px', position: 'relative' }} />
        </div>
      </div>
    </MainLayout>
  )
}

export default AboutPage;