import React from 'react';
import './Education.css';

const Education: React.FC = () => {
  return (
    <section className="education-section">
      <h2 className="education-title">Education</h2>

      <div className="education-grid">
        <div className="education-card">
          <h3>Siddaganga Institute of Technology, Tumkur</h3>
          <p><strong>B.Tech – Artificial Intelligence & Data Science</strong></p>
          <p>CGPA: 8.54 | 2021 – 2025</p>
          <p>Relevant coursework: Machine Learning, NLP, Data Structures, Web Development</p>
        </div>

        <div className="education-card">
          <h3>HMS Polytechnic, Tumkur</h3>
          <p><strong>Diploma – Mechanical Engineering</strong></p>
          <p>Graduated in 2021</p>
          <p>Hands-on projects and leadership roles in industry collaboration with Toyota</p>
        </div>
      </div>
    </section>
  );
};

export default Education;
