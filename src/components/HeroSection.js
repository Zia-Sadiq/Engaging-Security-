import React from 'react';
import './HeroSection.css';
import heroImage from '../../src/assets/images/log.png';
import phoneIcon from '../../src/assets/images/phone.png'; // Import phone icon image

const HeroSection = () => {
  return (
    <section className="hero-section">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-6 text-center text-md-start">
            <h1 className="display-4">
            <span className="letter">W</span>
              <span className="letter">E</span>
              <span className="letter">L</span>
              <span className="letter">C</span>
              <span className="letter">O</span>
              <span className="letter">M</span>
              <span className="letter">E</span>
              <span className="letter"> </span>
              <span className="letter">T</span>
              <span className="letter">O</span>
              <span className="letter"> </span>
              <span className="letter">E</span>
              <span className="letter">N</span>
              <span className="letter">G</span>
              <span className="letter">A</span>
              <span className="letter">G</span>
              <span className="letter">I</span>
              <span className="letter">N</span>
              <span className="letter">G</span>
              <span className="letter"> </span>
              <span className="letter">S</span>
              <span className="letter">E</span>
              <span className="letter">C</span>
              <span className="letter">U</span>
              <span className="letter">R</span>
              <span className="letter">I</span>
              <span className="letter">T</span>
              <span className="letter">Y</span>
            </h1>
            <div className="d-flex align-items-center mt-3"> 
            <img src={phoneIcon} alt="Phone Icon" className="me-2" width="70" height="70" /><p style={{ fontSize: '1.3rem' }}><b>Call us now:</b></p>
              <span className='phone' style={{ fontSize: '2rem' }}>020 8087 1952</span> 
            </div> 
          </div>
          <div className="col-md-6 text-center text-md-end">
            <img src={heroImage} alt="Hero Image" className="img-fluid" /> 
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
