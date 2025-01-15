import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Footer = () => {
  return (
    <footer className="bg-dark text-light py-5">
      <Container>
        <Row>
          <Col md={4}>
            <h5>About Us</h5>
            <p>Security is paramount for business success and personal events. Engaging Security specializes in providing comprehensive security solutions across the UK, from large cities to remote locations. We offer flexible short-term contracts with rapid response times, enabling you to focus on your core operations while we safeguard your assets and people.</p>
          </Col>
          <Col md={4}>
            <h5>Quick Links</h5>
            <ul className="list-unstyled">
              <li><a href="#" className="text-decoration-none text-light">Home</a></li>
              <li><a href="#" className="text-decoration-none text-light">About</a></li>
              <li><a href="#" className="text-decoration-none text-light">Services</a></li>
              <li><a href="#" className="text-decoration-none text-light">Contact</a></li>
            </ul>
          </Col>
          <Col md={4}>
            <h5>Contact</h5>
            <p>Address: ENGAGING SECURITY LTD
                        3rd Floor, 86-90 Paul Street, London, England
                        EC2A 4NE</p>
            <p>Phone: 020 8087 1952</p>
            <p>Email: contactus@engagingsecurity.com</p>
            <p>Developed by: Zia Sadiq, Contact: +923136857527</p>
            {/* <ul className="list-inline social-icons">
              <li className="list-inline-item"><a href="#" target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-facebook"></i></a></li>
              <li className="list-inline-item"><a href="#" target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-twitter"></i></a></li>
              <li className="list-inline-item"><a href="#" target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-instagram"></i></a></li>
              <li className="list-inline-item"><a href="#" target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-linkedin"></i></a></li>
            </ul> */}
          </Col>
        </Row>
        <hr className="my-4" />
        <p className="text-center">© {new Date().getFullYear()} Engaging Security Ltd. All rights reserved.</p>
      </Container>
    </footer>
  );
};

export default Footer;
