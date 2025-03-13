import React from 'react';
import './FaqsSection.css';
import { Accordion, Container } from 'react-bootstrap'; // Import Accordion and Container

const faqsData = [
  {
    question: "Are your security guards licensed?",
    answer: "Yes, absolutely. All of our security personnel are fully licensed and according to local/national regulations, e.g., SIA. We maintain up-to-date records of all licenses and can provide verification upon request. We prioritize compliance with all legal requirements."
  },
  {
    question: "What kind of background checks do you perform?",
    answer: "We conduct thorough background checks, including criminal record checks, verification of previous employment, and reference checks. We are committed to hiring only trustworthy and reliable individuals. Our screening process is rigorous to ensure the safety and security of our clients."
  },
  {
    question: "What type of training do your guards receive?",
    answer: `Our security guards undergo extensive training, which includes:<br />
            De-escalation techniques.<br />
            Emergency response procedures.<br />
            First aid and CPR.<br />
            Conflict resolution.<br />
            Site-specific training relevant to the client's needs.<br />
            Ongoing training to keep up with industry standards.<br />
            We also provide ongoing training to ensure our guards are up-to-date with the latest security protocols.`
  },
  {
    question: "Are you insured?",
    answer: "Yes, we carry comprehensive insurance coverage, including liability insurance, to protect both our clients and our employees. We can provide proof of insurance upon request."
  },
  {
    question: "How do you determine your pricing?",
    answer: `Our pricing is based on several factors, including:<br />
             The level of security required.<br />
             The number of security personnel needed.<br />
             The duration of the service.<br />
             The specific location and potential risks.<br />
             We provide detailed, transparent quotes tailored to each client's unique needs.`
  },
  {
    question: "Can you provide references?",
    answer: "Yes, we can provide references from satisfied clients upon request. We have a strong track record of providing reliable and professional security services."
  },
  {
    question: "How do you handle emergency situations?",
    answer: "We have well-defined emergency response protocols. Our security guards are trained to assess situations quickly and take appropriate action. We maintain constant communication with our control center and can coordinate with local law enforcement and emergency services as needed."
  },
  {
    question: "Do you provide 24/7 support?",
    answer: "Yes, we offer 24/7 support. Our control center is staffed around the clock to respond to any security concerns or emergencies. We are always available to our clients."
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
              <p dangerouslySetInnerHTML={{ __html: faq.answer }}></p>
            </Accordion.Body>
          </Accordion.Item>
        ))}
      </Accordion>
    </section>
  );
};

export default FaqsSection;
