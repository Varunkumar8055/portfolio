import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Profile from './pages/Profile/Profile';
import About from './pages/About/About';
import Experience from './pages/Experience/Experience';
import Projects from './pages/Projects/Projects';
import Interests from './pages/Interests/Interests';
import Education from './pages/Education/Education';
import Contact from './pages/Contact/Contact';

const App: React.FC = () => {
  return (
    <>
      <Navbar />
      <main style={{ paddingBottom: '4rem' }}>
        <Routes>
          <Route path="/" element={<Profile />} />
          <Route path="/about" element={<About />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/interests" element={<Interests />} />
          <Route path="/education" element={<Education />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
};

export default App;
