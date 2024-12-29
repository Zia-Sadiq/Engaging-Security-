import React from 'react';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import AboutSection from '../components/AboutSection';
import ServicesSection from '../components/ServicesSection';
import FaqsSection from '../components/FaqsSection';
import ContactSection from '../components/ContactSection';
import BlogSection from '../components/BlogSection';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <div 
    //   style={{ 
    //     backgroundImage: `url('/src/assets/images/hero.jpg')`, 
    //     backgroundSize: 'cover', 
    //     backgroundPosition: 'center', 
    //     minHeight: '100vh' 
    //   }}
      className="d-flex flex-column min-vh-100" // Add this line
    >
      <Navbar />
      <HeroSection /> 
      <AboutSection/>
      <ServicesSection/>
      <BlogSection />
      <FaqsSection/>
      <ContactSection/>
      <Footer/>
    </div>
  );
};

export default Home;