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
            <p><b>Need Engaging Static Security Guard Services?</b> Security became the most primary and like a basic need for any smooth running of business or any day to day business events or leisure get-together. This is also our main area of specialty to guard and secure, allowing you to relax and focus on your business life. We cover all major UK cities, whether you go South or North. We also promise to provide short-term contract site security on very short notice as a sub-contractor.</p>
            <p>Our sites can be located in busy urban or remote rural areas. Potential threats like break-ins, vandalism, theft, and danger to your personnel or important business belongings are our primary concerns. Through years of experience in the security services industry, we adhere to high professional standards of customer satisfaction, reflected in our company slogan. We value our principles highly and work tirelessly round the clock to achieve our goals. Starting as a small entity, we have grown into a decent-sized company, enabling us to cater to businesses of all sizes and provide tailored service packages to meet their specific requirements.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;