import React from 'react';
import './About.css';

const About: React.FC = () => {
  return (
    <section className="about-section">
      <h2 className="about-title">About Me</h2>
      <p className="about-text">
        I'm <strong>Varunkumar</strong>, an <strong>AI and Data Science Engineer</strong> passionate about building intelligent systems that improve lives. 
        With a strong foundation in machine learning, full-stack web development, and data-driven applications, I enjoy solving real-world problems and contributing to innovative projects.
      </p>
      <p className="about-text">
        I’ve completed multiple certifications, worked on diverse projects involving EEG data analysis, fashion outfit recommendation, and web development. 
        My journey from mechanical engineering to AI showcases my adaptability and passion for continuous learning.
      </p>

      <div className="about-cards-container">
        <div className="about-card">
          <h3>🛠 Full Stack Developer</h3>
          <p>Skilled in building scalable web applications using React.js, Node.js, Express, and MongoDB with a focus on user experience and performance.</p>
        </div>

        <div className="about-card">
          <h3>📊 Data Scientist</h3>
          <p>Experienced in Machine Learning, Deep Learning, and NLP. Projects include EEG brainwave analysis, classification models, and recommender systems.</p>
        </div>
      </div>
    </section>
  );
};

export default About;
