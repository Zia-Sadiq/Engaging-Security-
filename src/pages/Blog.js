import React from 'react';
import Navbar from '../components/Navbar'; // Corrected import
import BlogSection from '../components/BlogSection';
import Footer from '../components/Footer';

const Blog = () => {
  return (
    <div>
      <Navbar />
      <BlogSection />
      <Footer />
    </div>
  );
};

export default Blog;