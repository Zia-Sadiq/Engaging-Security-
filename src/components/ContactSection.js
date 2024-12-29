import React, { useState } from 'react';
import './ContactSection.css';
import emailjs from '@emailjs/browser';
import { Form, Button } from 'react-bootstrap';

const ContactSection = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    const templateParams = {
      from_name: name,
      from_email: email,
      phone_number: phone,
      message: message,
      // Replace with the recipient email address
      to_email: 'contactus@engagingsecurity.com',
    };

    emailjs.send('service_2mkxzo8', 'template_zxabjak', templateParams, '69I_4iJxT2FjwKdPo')
      .then((result) => {
        alert('Message sent successfully!');
        // Reset form fields
        setName('');
        setEmail('');
        setPhone('');
        setMessage('');
      })
      .catch((error) => {
        alert('Failed to send message. Please try again.', error);
      });
  };

  return (
    <section className="contact-section">
      <div className="container">
        <h2 className="text-center mb-5">Contact Us</h2>
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="formBasicName">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPhone">
            <Form.Label>Phone Number</Form.Label>
            <Form.Control
              type="tel"
              placeholder="Enter phone number"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicMessage">
            <Form.Label>Message</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              placeholder="Enter your message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
            />
          </Form.Group>

          <Button variant="dark" type="submit"> 
        Submit
      </Button>
        </Form>
      </div>
    </section>
  );
};

export default ContactSection;