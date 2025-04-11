import React from 'react';
import { Link } from 'react-router-dom';

const Navbar: React.FC = () => {
  return (
    <nav style={{ backgroundColor: '#333', padding: '1rem' }}>
      <ul style={{ display: 'flex', gap: '1rem', listStyleType: 'none', margin: 0 }}>
        <li><Link style={{ color: 'white', textDecoration: 'none' }} to='/'>Profile</Link></li>
        <li><Link style={{ color: 'white', textDecoration: 'none' }} to='/about'>About</Link></li>
        <li><Link style={{ color: 'white', textDecoration: 'none' }} to='/experience'>Experience</Link></li>
        <li><Link style={{ color: 'white', textDecoration: 'none' }} to='/projects'>Projects</Link></li>
        <li><Link style={{ color: 'white', textDecoration: 'none' }} to='/interests'>Interests</Link></li>
        <li><Link style={{ color: 'white', textDecoration: 'none' }} to='/education'>Education</Link></li>
        <li><Link style={{ color: 'white', textDecoration: 'none' }} to='/contact'>Contact</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
