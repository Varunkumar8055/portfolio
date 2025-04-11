import React from 'react';
import './Interests.css';

const Interests: React.FC = () => {
  return (
    <section className="interests-section">
      <h2 className="interests-title">Interests</h2>

      <div className="interests-grid">
        <div className="interest-card">
          <h3>🧠 Artificial Intelligence</h3>
          <p>
            Exploring machine learning, deep learning, and neural networks. Fascinated by building intelligent systems that can adapt and learn from data.
          </p>
        </div>

        <div className="interest-card">
          <h3>🌐 Full Stack Web Development</h3>
          <p>
            Passionate about creating robust and scalable web applications using modern frameworks like React, Node.js, and Next.js.
          </p>
        </div>

        <div className="interest-card">
          <h3>🧪 Data Science & Analytics</h3>
          <p>
            Love working with data — from cleaning and wrangling to analysis, visualization, and deriving actionable insights.
          </p>
        </div>

        <div className="interest-card">
          <h3>🎓 Teaching & Mentoring</h3>
          <p>
            I enjoy simplifying complex topics and helping others grow in tech through guidance, workshops, and peer mentoring.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Interests;
