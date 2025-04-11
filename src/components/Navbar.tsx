// src/components/Navbar.tsx
import React from 'react';
import { Link } from 'react-router-dom';
import useStore from '../store/useStore';

const Navbar: React.FC = () => {
  const { darkMode, toggleDarkMode } = useStore();

  return (
    <nav style={{ backgroundColor: darkMode ? '#111' : '#333', padding: '1rem' }}>
      <ul style={{ display: 'flex', gap: '1rem', listStyleType: 'none', margin: 0, alignItems: 'center' }}>
        <li><Link style={{ color: 'white', textDecoration: 'none' }} to='/'>Profile</Link></li>
        <li><Link style={{ color: 'white', textDecoration: 'none' }} to='/about'>About</Link></li>
        <li><Link style={{ color: 'white', textDecoration: 'none' }} to='/experience'>Experience</Link></li>
        <li><Link style={{ color: 'white', textDecoration: 'none' }} to='/projects'>Projects</Link></li>
        <li><Link style={{ color: 'white', textDecoration: 'none' }} to='/interests'>Interests</Link></li>
        <li><Link style={{ color: 'white', textDecoration: 'none' }} to='/education'>Education</Link></li>
        <li><Link style={{ color: 'white', textDecoration: 'none' }} to='/contact'>Contact</Link></li>
        <li>
          <button
            onClick={toggleDarkMode}
            style={{
              background: 'transparent',
              border: '1px solid white',
              color: 'white',
              cursor: 'pointer',
              padding: '0.3rem 0.6rem',
              borderRadius: '4px'
            }}
          >
            {darkMode ? '☀️ Light Mode' : '🌙 Dark Mode'}
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
