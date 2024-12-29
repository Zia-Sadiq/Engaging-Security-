import React from 'react';
import './BlogSection.css'
import heroImage from '../../src/assets/images/hero.jpg'; // Import the image
import heroImage1 from '../../src/assets/images/1.jpg';
import heroImage2 from '../../src/assets/images/2.jpg';
import heroImage3 from '../../src/assets/images/3.jpg';
import heroImage4 from '../../src/assets/images/4.jpg';

const BlogSection = () => {
  return (
    <section className="blog-section">
      <div className="container">
        {/* Section 1 */}
        <div className="row align-items-center">
          <div className="col-md-6">
            <h2>Area Under Service </h2>
            <p>Engaging Security's team of experts leverages cutting-edge technology and proven methodologies to deliver proactive and reliable security solutions across these dynamic regions.</p>
            <p>Engaging Security's reach extends across the globe, with a particular focus on the areas highlighted in the magnified map. We offer comprehensive security solutions throughout the United Kingdom, Ireland, and neighboring regions, ensuring the safety and protection of our clients' assets and personnel wherever they may be. Our global presence allows us to adapt to diverse security challenges and deliver tailored solutions that meet the unique needs of each client and location.</p>
          </div>
          <div className="col-md-6">
            <img src={heroImage} alt="Blog Image 1" className="img-fluid" />
          </div>
        </div>
        

        {/* Section 2 */}
        <div className="row align-items-center mt-5"> 
          <div className="col-md-6">
            <img src={heroImage2} alt="Blog Image 2" className="img-fluid" />
          </div>
          <div className="col-md-6">
            <h2>Short-Term Site Security Solutions</h2>
            <p>Engaging Security offers rapid response for short-term site security needs. Whether it's an unexpected event, a temporary staffing shortage, or an urgent project, we can mobilize a skilled security team within hours. Our flexible approach ensures you have the protection you need, when you need it, without compromising on quality or professionalism. We understand that unforeseen circumstances can arise, and we are committed to providing reliable and responsive security support to minimize disruption and maintain a safe and secure environment for your operations.</p> 
          </div>
        </div>

        {/* Section 3 */}
        <div className="row align-items-center mt-5">
          <div className="col-md-6">
            <h2>Unwavering Commitment to Safety</h2>
            <p>Engaging Security is more than just a security provider; we are your partners in safety. We understand that a secure environment is crucial for the success of any business. Our team of highly trained professionals is dedicated to creating and maintaining a safe and secure atmosphere for your employees, clients, and assets. We employ proactive measures, cutting-edge technology, and rigorous risk assessments to identify and mitigate potential threats, ensuring your peace of mind and allowing you to focus on what you do best.</p> 
          </div>
          <div className="col-md-6">
            <img src={heroImage3} alt="Blog Image 3" className="img-fluid" />
          </div>
        </div>

        {/* Section 4 */}
        <div className="row align-items-center mt-5">
          <div className="col-md-6">
            <img src={heroImage4} alt="Blog Image 4" className="img-fluid" />
          </div>
          <div className="col-md-6">
            <h2>Uncompromising Security Standards</h2>
            <p>Engaging Security adheres to the highest industry standards in all our security operations. We are committed to providing our clients with the most reliable and effective security solutions available. Our security officers are rigorously trained and undergo continuous professional development to ensure they possess the skills and knowledge to handle any situation with professionalism and expertise. We prioritize client satisfaction and strive to exceed expectations in every aspect of our service delivery.</p> 
          </div>
        </div>
        <div className="row align-items-center mt-5"> 
          
          <div className="col-md-6">
            <h2>Uninterrupted Communication</h2>
            <p>Engaging Security maintains constant communication across our entire team and with our clients. Our security officers are equipped with state-of-the-art communication devices, ensuring seamless coordination and rapid response to any situation. This enables us to monitor activities in real-time, provide timely updates to clients, and respond effectively to any security threats. Uninterrupted communication is essential for maintaining a safe and secure environment, and we are committed to ensuring that our communication systems are always reliable and efficient.</p> 
          </div>
          <div className="col-md-6">
            <img src={heroImage1} alt="Blog Image 2" className="img-fluid" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
