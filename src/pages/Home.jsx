// src/pages/Home.js
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Welcome to Space Explorer</h1>
      <p style={styles.description}>
        Discover the wonders of space through Mars Rover photos and track near-Earth asteroids
      </p>
      
      <div style={styles.cards}>
        <Link to="/mars-rover" style={styles.card}>
          <h2>🌌 Mars Rover Photos</h2>
          <p>Explore the surface of Mars through the eyes of NASAs rovers</p>
        </Link>
        
        <Link to="/asteroids" style={styles.card}>
          <h2>☄️ Near-Earth Asteroids</h2>
          <p>Track asteroids passing close to our planet</p>
        </Link>
      </div>
    </div>
  );
}

const styles = {
  container: {
    width: '100%',
    maxWidth: '1400px',
    margin: '0 auto',
    padding: '1rem',
    backgroundColor: '#ffffff',
    boxSizing: 'border-box',
    '@media (min-width: 640px)': {
      padding: '1.5rem',
    },
    '@media (min-width: 1024px)': {
      padding: '2rem',
    },
  },
  title: {
    fontSize: 'clamp(1.5rem, 4vw, 3rem)',
    textAlign: 'center',
    marginBottom: 'clamp(0.5rem, 2vw, 1rem)',
    color: '#1a1a1a',
    fontWeight: 'bold',
  },
  description: {
    textAlign: 'center',
    fontSize: 'clamp(0.875rem, 2vw, 1.2rem)',
    color: '#666',
    marginBottom: 'clamp(1.5rem, 4vw, 3rem)',
    padding: '0 clamp(0.5rem, 2vw, 1rem)',
    maxWidth: '800px',
    margin: '0 auto 2rem',
  },
  cards: {
    display: 'grid',
    gridTemplateColumns: '1fr',
    gap: 'clamp(1rem, 3vw, 2rem)',
    padding: 'clamp(0.5rem, 2vw, 1rem)',
    width: '100%',
    boxSizing: 'border-box',
    '@media (min-width: 640px)': {
      gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
    },
    '@media (min-width: 1024px)': {
      gridTemplateColumns: 'repeat(2, 1fr)',
      maxWidth: '1200px',
      margin: '0 auto',
    },
  },
  card: {
    backgroundColor: '#ffffff',
    padding: 'clamp(1.25rem, 3vw, 2rem)',
    borderRadius: '12px',
    boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
    textDecoration: 'none',
    color: '#1a1a1a',
    transition: 'all 0.3s ease',
    border: '1px solid #eee',
    minHeight: 'clamp(160px, 20vw, 200px)',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    '@media (hover: hover)': {
      '&:hover': {
        transform: 'translateY(-5px)',
        boxShadow: '0 6px 12px rgba(0,0,0,0.15)',
      },
    },
    '@media (max-width: 640px)': {
      marginBottom: '1rem',
    },
    '& h2': {
      fontSize: 'clamp(1.25rem, 3vw, 1.5rem)',
      marginBottom: 'clamp(0.5rem, 2vw, 1rem)',
    },
    '& p': {
      fontSize: 'clamp(0.875rem, 2vw, 1rem)',
      color: '#666',
    },
  },
};

export default Home;
