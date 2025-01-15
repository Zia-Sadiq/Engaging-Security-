import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';
import logo from '../assets/images/logos.png'; 

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar navbar-expand-lg custom-navbar">  
      <div className="container">
        <Link to="/" className="navbar-brand">
          <img src={logo} alt="Logo" width="300" />
        </Link>
        <button 
          className="navbar-toggler" 
          type="button" 
          onClick={toggleMenu} 
          aria-controls="navbarNav" 
          aria-expanded={isMenuOpen} 
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className={`collapse navbar-collapse ${isMenuOpen ? 'show' : ''}`} id="navbarNav"> 
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link to="/" className="nav-link fw-bold">Home</Link>
            </li>
            <li className="nav-item">
              <Link to="/about" className="nav-link fw-bold">About Us</Link>
            </li>
            <li className="nav-item">
              <Link to="/services" className="nav-link fw-bold">Services</Link>
            </li>
            <li className="nav-item">
              <Link to="/faqs" className="nav-link fw-bold">FAQs</Link>
            </li>
            <li className="nav-item">
              <Link to="/contact" className="nav-link fw-bold">Contact Us</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
