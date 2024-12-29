import React from 'react';
import Navbar from '../components/Navbar'; // Import from the 'components' directory
import AboutSection from '../components/AboutSection';
import Footer from '../components/Footer';
import BlogSection from '../components/BlogSection';

const About = () => {
  return (
    <div>
      <Navbar />
      <AboutSection />
      <BlogSection/>

      <Footer />
    </div>
  );
};

export default About;