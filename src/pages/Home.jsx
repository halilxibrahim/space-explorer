// src/pages/Home.js
import { Link } from 'react-router-dom';
import { useState } from 'react';

function Home() {
  const [hoveredCard, setHoveredCard] = useState(null);

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Welcome to Space Explorer</h1>
      <p style={styles.description}>
        Discover the wonders of space through Mars Rover photos and track near-Earth asteroids
      </p>
      
      <div style={styles.cards}>
        <Link 
          to="/mars-rover" 
          style={{
            ...styles.card,
            ...(hoveredCard === 'mars' ? styles.cardHovered : {})
          }}
          onMouseEnter={() => setHoveredCard('mars')}
          onMouseLeave={() => setHoveredCard(null)}
        >
          <div style={styles.cardContent}>
            <div style={styles.iconWrapper}>🌌</div>
            <h2 style={styles.cardTitle}>Mars Rover Photos</h2>
            <p style={styles.cardDescription}>Explore the surface of Mars through the eyes of NASAs rovers</p>
          </div>
        </Link>
        
        <Link 
          to="/asteroids" 
          style={{
            ...styles.card,
            ...(hoveredCard === 'asteroids' ? styles.cardHovered : {})
          }}
          onMouseEnter={() => setHoveredCard('asteroids')}
          onMouseLeave={() => setHoveredCard(null)}
        >
          <div style={styles.cardContent}>
            <div style={styles.iconWrapper}>☄️</div>
            <h2 style={styles.cardTitle}>Near-Earth Asteroids</h2>
            <p style={styles.cardDescription}>Track asteroids passing close to our planet</p>
          </div>
        </Link>
      </div>
    </div>
  );
}

const styles = {
  container: {
    minHeight: '60vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '2rem',
    background: 'linear-gradient(135deg, #ffffff 0%, #f5f5f5 100%)',
  },
  title: {
    fontSize: 'clamp(2rem, 5vw, 4rem)',
    color: '#333333',
    textAlign: 'center',
    marginBottom: '1rem',
    fontWeight: '700',
    textShadow: '0 2px 4px rgba(0,0,0,0.1)',
  },
  description: {
    fontSize: 'clamp(1rem, 2vw, 1.4rem)',
    color: '#666666',
    textAlign: 'center',
    maxWidth: '800px',
    marginBottom: '4rem',
  },
  cards: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
    gap: '2rem',
    width: '100%',
    maxWidth: '1200px',
    padding: '1rem',
  },
  card: {
    textDecoration: 'none',
    borderRadius: '20px',
    overflow: 'hidden',
    transition: 'transform 0.3s ease, box-shadow 0.3s ease, background-color 0.3s ease',
    background: 'rgba(255, 255, 255, 0.9)',
    backdropFilter: 'blur(10px)',
    border: '1px solid rgba(0, 0, 0, 0.1)',
  },
  cardHovered: {
    transform: 'translateY(-10px)',
    boxShadow: '0 20px 40px rgba(0,0,0,0.1)',
    backgroundColor: 'rgba(100, 149, 237, 0.1)', // Light cornflower blue background
  },
  cardContent: {
    padding: '2rem',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: 'center',
  },
  iconWrapper: {
    fontSize: '3rem',
    marginBottom: '1rem',
    padding: '1rem',
    borderRadius: '50%',
    background: 'rgba(0, 0, 0, 0.05)',
  },
  cardTitle: {
    fontSize: '1.5rem',
    color: '#333333',
    marginBottom: '1rem',
    fontWeight: '600',
  },
  cardDescription: {
    fontSize: '1rem',
    color: '#666666',
    lineHeight: '1.5',
  },
};

export default Home;
