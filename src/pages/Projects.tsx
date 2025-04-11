import React from 'react';

const Projects: React.FC = () => {
  return (
    <section style={{ padding: '2rem' }}>
      <h2>Projects</h2>

      <div>
        <h3>🧠 EEG-Based Cognitive Level Classifier</h3>
        <p>
          Classified student learning levels ('Best' vs 'Slow' learners) using EEG signals. Extracted band power,
          entropy, and coherence features and trained a CNN-LSTM model.
        </p>
      </div>

      <div>
        <h3>🎯 Fashion Outfit Recommender from User Photos</h3>
        <p>
          Suggests outfits by analyzing user-uploaded clothes using DeepFashion dataset, GPT-2, and FAISS retrieval.
          Deployed on GCP with a Streamlit UI.
        </p>
      </div>

      <div>
        <h3>💬 Inspiring Quotes Generator</h3>
        <p>
          Created a REST API-based quote generator using NLP. Developed during early learning of ML and NLP
          concepts.
        </p>
      </div>

      <div>
        <h3>🌐 Second Brain</h3>
        <p>
          Productivity tool using RAG, Weaviate, Mistral, and Next.js for managing thoughts, research, and knowledge
          across devices.
        </p>
      </div>
    </section>
  );
};

export default Projects;
