import React from 'react';
import './AboutSection.css';
import heroImage from '../../src/assets/images/about.jpg'; // Import the image

const AboutSection = () => {
  return (
    <section className="about-section">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-6 order-2 order-md-1"> 
            <img src={heroImage} alt="Hero Image" className="img-fluid rounded" /> 
          </div>
          <div className="col-md-6 order-1 order-md-2">
            <h2 className="mb-4 fw-bold">About Us</h2>
            <p> Engaging Security brings professional security personnel to individuals, national and multinational companies throughout the United Kingdom. We can provide static security, site management, door supervision, event security management and retail and shopping mall security.</p>

            <p><b>Why choose us?</b></p> 
            <p>We have over 25 years of combined experience in the security sector and have become experts in bespoke customer requirements. We can supply guards at short notice at competitive hourly rates so please call 020 8087 1952 or fill in the contact form or mail us at contactus@engagingsecurity.com</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
