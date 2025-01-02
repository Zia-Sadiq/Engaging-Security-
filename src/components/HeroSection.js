import React from 'react';
import './HeroSection.css';
import heroImage from '../../src/assets/images/log.png'; // Import the image

const HeroSection = () => {
  return (
    <section className="hero-section">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-6 text-center text-md-start">
            <h1 className="display-4">
              {/* <span className="letter">G</span>
              <span className="letter">U</span>
              <span className="letter">A</span>
              <span className="letter">R</span>
              <span className="letter">D</span>
              <span className="letter"> </span>
              <span className="letter">Y</span>
              <span className="letter">o</span>
              <span className="letter">u</span>
              <span className="letter">r</span>
              <span className="letter"> </span>
              <span className="letter">W</span>
              <span className="letter">O</span>
              <span className="letter">R</span>
              <span className="letter">K</span>
              <span className="letter">P</span>
              <span className="letter">L</span>
              <span className="letter">A</span>
              <span className="letter">C</span>
              <span className="letter">E</span> */}
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
            <p className="lead fw-bold" style={{ fontSize: '1.7rem' }}>Relax! You are Secure.</p> 

            {/* <p className="lead fw-bold" style={{ fontSize: '1.7rem' }}>Engaging Security</p>  */}
            {/* <p style={{ fontSize: '1.7rem' }}>Relax! You are Secure.</p>  */}
            {/* <a href="#" className="btn btn-primary">Get Started</a> */}
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
