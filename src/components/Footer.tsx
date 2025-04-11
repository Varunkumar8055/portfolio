import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer style={{
      backgroundColor: '#333',
      color: 'white',
      textAlign: 'center',
      padding: '1rem',
      position: 'fixed',
      bottom: 0,
      width: '100%'
    }}>
      <p>&copy; {new Date().getFullYear()} Varunkumar. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
