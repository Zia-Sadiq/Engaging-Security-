import React from 'react';
import './FaqsSection.css';
import { Accordion, Container } from 'react-bootstrap'; // Import Accordion and Container

const faqsData = [
  {
    question: "What are your business hours?",
    answer: "We are open Monday to Friday from 9:00 AM to 5:00 PM."
  },
  {
    question: "Do you offer free consultations?",
    answer: "Yes, we offer free initial consultations to discuss your project needs."
  },
  {
    question: "What payment methods do you accept?",
    answer: "We accept credit cards, debit cards, and bank transfers."
  },
  {
    question: "How long does it take to complete a project?",
    answer: "Project timelines vary depending on the scope and complexity of the project."
  },
  {
    question: "Do you provide guarantees?",
    answer: "Yes, we offer a satisfaction guarantee on all our services."
  }
];

const FaqsSection = () => {
  return (
    <section className="container mt-5">
      <h2>Frequently Asked Questions</h2>
      <Accordion>
        {faqsData.map((faq, index) => (
          <Accordion.Item eventKey={index} key={index}> 
            <Accordion.Header>{faq.question}</Accordion.Header>
            <Accordion.Body>
              <p>{faq.answer}</p>
            </Accordion.Body>
          </Accordion.Item>
        ))}
      </Accordion>
    </section>
  );
};

export default FaqsSection;