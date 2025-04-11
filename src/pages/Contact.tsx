import React from 'react';
import { FaLinkedin, FaGithub, FaEnvelope, FaPhone } from 'react-icons/fa';
import './Contact.css';

const Contact: React.FC = () => {
  return (
    <section className="contact-section">
      <h2 className="contact-title">Contact Me</h2>

      <div className="contact-grid">
        <div className="contact-card">
          <FaEnvelope className="contact-icon" />
          <p>Email</p>
          <a href="mailto:varunkumar@example.com">varunkumar@example.com</a>
        </div>

        <div className="contact-card">
          <FaPhone className="contact-icon" />
          <p>Phone</p>
          <a href="tel:+918722188037">+91 87221 88037</a>
        </div>

        <div className="contact-card">
          <FaLinkedin className="contact-icon" />
          <p>LinkedIn</p>
          <a
            href="https://www.linkedin.com/in/varunkumar-m-s-829519296/"
            target="_blank"
            rel="noopener noreferrer"
          >
            linkedin.com/in/varunkumar
          </a>
        </div>

        <div className="contact-card">
          <FaGithub className="contact-icon" />
          <p>GitHub</p>
          <a
            href="https://github.com/Varunkumar8055"
            target="_blank"
            rel="noopener noreferrer"
          >
            github.com/Varunkumar8055
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
