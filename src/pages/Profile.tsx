import React from 'react';
import { FaLinkedin, FaGithub, FaEnvelope, FaPhone } from 'react-icons/fa';

const Profile: React.FC = () => {
  return (
    <section style={{ textAlign: 'center' }}>
      <img
        src="/me.jpg"
        alt="Varunkumar"
        style={{ width: '140px', height: '140px', borderRadius: '50%', border: '3px solid #1abc9c', marginBottom: '1rem' }}
      />
      <h1>
        Varunkumar <span className="badge">AI & Data Science</span> <span className="badge">Full Stack</span>
      </h1>
      <p style={{ color: '#ccc' }}>
        B.Tech @ SIT | React, Node.js | ML & NLP Enthusiast
      </p>
      <div style={{ marginTop: '1rem', fontSize: '1.5rem', display: 'flex', justifyContent: 'center', gap: '1.2rem' }}>
        <a href="https://www.linkedin.com/in/varunkumar-m-s-829519296/" target="_blank" rel="noopener noreferrer" style={{ color: '#0e76a8' }}><FaLinkedin /></a>
        <a href="https://github.com/Varunkumar8055" target="_blank" rel="noopener noreferrer" style={{ color: '#fff' }}><FaGithub /></a>
        <a href="mailto:varunkumar@example.com" style={{ color: '#f5f5f5' }}><FaEnvelope /></a>
        <a href="tel:+918722188037" style={{ color: '#f5f5f5' }}><FaPhone /></a>
      </div>
    </section>
  );
};

export default Profile;
