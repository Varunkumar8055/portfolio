import React from 'react';

const Contact: React.FC = () => {
  return (
    <section style={{ padding: '2rem' }}>
      <h2>Contact Me</h2>
      <p>If you'd like to get in touch, feel free to contact me through the details below:</p>
      <ul>
        <li><strong>Email:</strong> varunkumar@example.com</li>
        <li><strong>Phone:</strong> +91-9876543210</li>
        <li><strong>LinkedIn:</strong> <a href="https://linkedin.com/in/varunkumar" target="_blank" rel="noopener noreferrer">linkedin.com/in/varunkumar</a></li>
        <li><strong>GitHub:</strong> <a href="https://github.com/varunkumar" target="_blank" rel="noopener noreferrer">github.com/varunkumar</a></li>
      </ul>
    </section>
  );
};

export default Contact;
