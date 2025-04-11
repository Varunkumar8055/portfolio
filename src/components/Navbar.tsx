// src/components/Navbar.tsx
import React from 'react';
import { NavLink } from 'react-router-dom';
import useStore from '../store/useStore';
import '../index.css'; // for nav-link and active-link styles

const Navbar: React.FC = () => {
  const { darkMode, toggleDarkMode } = useStore();

  return (
    <nav style={{ backgroundColor: darkMode ? '#111' : '#333', padding: '1rem' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        {/* Left: Navigation Links */}
        <ul style={{ 
          display: 'flex', 
          alignItems: 'center', 
          gap: '1rem', 
          listStyleType: 'none', 
          margin: 0, 
          padding: 0 
        }}>
          <li><NavLink to='/' className={({ isActive }) => isActive ? 'active-link' : 'nav-link'}>Profile</NavLink></li>
          <li><NavLink to='/about' className={({ isActive }) => isActive ? 'active-link' : 'nav-link'}>About</NavLink></li>
          <li><NavLink to='/experience' className={({ isActive }) => isActive ? 'active-link' : 'nav-link'}>Experience</NavLink></li>
          <li><NavLink to='/projects' className={({ isActive }) => isActive ? 'active-link' : 'nav-link'}>Projects</NavLink></li>
          <li><NavLink to='/interests' className={({ isActive }) => isActive ? 'active-link' : 'nav-link'}>Interests</NavLink></li>
          <li><NavLink to='/education' className={({ isActive }) => isActive ? 'active-link' : 'nav-link'}>Education</NavLink></li>
          <li><NavLink to='/contact' className={({ isActive }) => isActive ? 'active-link' : 'nav-link'}>Contact</NavLink></li>
        </ul>

        {/* Right: Theme Toggle Button */}
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
      </div>
    </nav>
  );
};

export default Navbar;
