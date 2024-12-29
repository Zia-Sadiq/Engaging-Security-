import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; 
import 'font-awesome/css/font-awesome.min.css';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Faqs from './pages/Faqs';
import Contact from './pages/Contact';
import Projects from './pages/Projects';
import Blog from './pages/Blog';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/faqs" element={<Faqs />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/blog" element={<Blog />} />
      </Routes>
    </Router>
  );
}

export default App;