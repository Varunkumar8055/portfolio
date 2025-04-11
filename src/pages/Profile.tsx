import React from 'react';

const Profile: React.FC = () => {
  return (
    <section style={{ padding: '2rem', textAlign: 'center' }}>
      <img
        src="https://avatars.githubusercontent.com/u/00000000?v=4" // Replace with your GitHub or personal photo URL
        alt="Varunkumar"
        style={{ width: '150px', borderRadius: '50%', marginBottom: '1rem' }}
      />
      <h1>Varunkumar</h1>
      <p>AI and Data Science Engineer | Full Stack Web Developer | B.Tech @ SIT</p>
    </section>
  );
};

export default Profile;
