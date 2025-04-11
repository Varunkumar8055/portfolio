import React from 'react';
import './Projects.css';

const Projects: React.FC = () => {
  return (
    <section className="projects-section">
      <h2 className="projects-title">Projects</h2>

      <div className="project-card">
        <h3>🧠 EEG-Based Cognitive Level Classification</h3>
        <p>
          Developed a machine learning pipeline to classify students into <strong>Best Learner</strong> and <strong>Slow Learner</strong> categories using EEG signals.
          Applied signal processing, feature extraction (band power, entropy), and built CNN-LSTM models for classification.
        </p>
      </div>

      <div className="project-card">
        <h3>🧥 Fashion Outfit Recommender</h3>
        <p>
          Built a system that analyzes user-uploaded clothing images and recommends fashionable outfits using <strong>DeepFashion Dataset</strong>, <strong>RAG (GPT-2 + FAISS)</strong>, and deployed via <strong>GCP + Streamlit</strong>.
        </p>
      </div>

      <div className="project-card">
        <h3>💬 Inspiring Quote Generator</h3>
        <p>
          A fun web app that generates motivational quotes using NLP and REST APIs. Integrated with sentiment analysis to personalize quote recommendations.
        </p>
      </div>

      <div className="project-card">
        <h3>🗃️ Distributed Database Simulation</h3>
        <p>
          Simulated a distributed database system (DDBS) to demonstrate data fragmentation, replication, and query processing over nodes. Great for teaching and demos!
        </p>
      </div>
    </section>
  );
};

export default Projects;
