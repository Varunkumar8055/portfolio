import React from 'react';
import './Experience.css';

const Experience: React.FC = () => {
  return (
    <section className="experience-section">
      <h2 className="experience-title">Work Experience</h2>

      <div className="experience-card">
        <h3>Associate Technician – Toyota Kirloskar Motors</h3>
        <span className="experience-duration">1 Year</span>
        <p>
          Led teams in cost management, resource allocation, and facility operations. Worked on the <strong>CMPV</strong> (Compact Multi-Purpose Vehicle) and <strong>Logistic Floor Slope</strong> projects. Managed shop floor planning, optimizing efficiency and safety.
        </p>
      </div>

      <div className="experience-card">
        <h3>FUll Stack – StackLane</h3>
        <span className="experience-duration">Internship</span>
        <p>
          Spearheaded project operations and resource allocation across departments. Applied data-driven strategies to maintain operational excellence and cost efficiency in large-scale engineering workflows.
        </p>
      </div>
    </section>
  );
};

export default Experience;
