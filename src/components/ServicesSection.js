import React from 'react';
import './servicesSection.css';

const ServicesSection = () => {
  return (
    <section className="services-section">
      <div className="container">
        <h2 className="section-title">Our Services</h2>
        <p className="section-description">We keep you safe, so you can focus on what matters.</p>
        <div className="row">
          <div className="col-md-4">
            <div className="service-card">
              <i className="fas fa-hard-hat"></i> 
              <h3>Construction Security</h3>
              <p>Safeguards construction sites from theft, vandalism, and unauthorized access, protecting workers, materials, and equipment.</p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="service-card">
              <i className="fas fa-concierge-bell"></i> 
              <h3>Concierge Security</h3>
              <p> Provides welcoming and secure access to buildings, ensuring visitor safety and managing building operations efficiently.</p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="service-card">
              <i className="fas fa-shield-alt"></i> 
              <h3>Site Security</h3>
              <p>Protects businesses, industrial facilities, and other properties from threats, ensuring a safe and secure environment for employees and assets.</p>
            </div>
          </div>
        </div>
        <div className="row mt-4"> 
          <div className="col-md-4">
            <div className="service-card">
              <i className="fas fa-user-shield"></i> 
              <h3>Event Security</h3>
              <p>Manages crowd control, prevents security breaches, and ensures the safety of attendees and staff at various events.</p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="service-card">
              {/* <i className="fas fa-fire-extinguisher"></i>  */}
              <h3>Fire Watch Security</h3>
              <p>Monitors for fire hazards, conducts regular inspections, and responds promptly to emergencies, ensuring the safety of occupants.</p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="service-card">
              <i className="fas fa-concert-security"></i> 
              <h3>Concert Security</h3>
              <p>Maintains order, prevents crowd surges, and ensures the safety and security of artists, staff, and concert-goers.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
