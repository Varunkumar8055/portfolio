import React from 'react';

const Experience: React.FC = () => {
  return (
    <section style={{ padding: '2rem' }}>
      <h2>Work Experience</h2>

      <div>
        <h3>Associate Technician – Toyota Kirloskar Motors</h3>
        <p><strong>Duration:</strong> 1 Year</p>
        <ul>
          <li>Led teams in cost management and resource allocation.</li>
          <li>Oversaw facility operations for key projects: CMPV and Logistic Floor Slope.</li>
          <li>Managed project efficiency, team coordination, and ensured smooth shop floor processes.</li>
        </ul>
      </div>

      <div style={{ marginTop: '1.5rem' }}>
        <h3>Freelance Full Stack Web Developer</h3>
        <ul>
          <li>Built dynamic web applications using React.js, Next.js, Node.js, and TypeScript.</li>
          <li>Integrated AI models and vector databases (Mistral, Weaviate) for intelligent apps.</li>
        </ul>
      </div>
    </section>
  );
};

export default Experience;
