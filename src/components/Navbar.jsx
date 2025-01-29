import { Link, useLocation } from 'react-router-dom';

function Navbar() {
  const location = useLocation();

  const isActive = (path) => {
    return location.pathname === path ? styles.activeLink : styles.link;
  };

  return (
    <nav style={styles.nav}>
      <h2 style={styles.title}>
        <Link to="/" style={styles.logoLink}>
          🚀 Space Explorer
        </Link>
      </h2>
      <div style={styles.links}>
        <Link to="/" style={isActive('/')}>Home</Link>
        <Link to="/mars-rover" style={isActive('/mars-rover')}>Mars Rover</Link>
        <Link to="/asteroids" style={isActive('/asteroids')}>Asteroids</Link>
      </div>
    </nav>
  );
}

const styles = {
  nav: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '1rem 2rem',
    backgroundColor: '#ffffff',
    boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
    '@media (max-width: 768px)': {
      flexDirection: 'column',
      padding: '1rem',
      gap: '1rem',
    },
  },
  title: {
    margin: 0,
  },
  logoLink: {
    color: '#1a1a1a',
    textDecoration: 'none',
    fontSize: '1.5rem',
    fontWeight: 'bold',
  },
  links: {
    display: 'flex',
    gap: '2rem',
    '@media (max-width: 768px)': {
      gap: '1rem',
      flexWrap: 'wrap',
      justifyContent: 'center',
    },
  },
  link: {
    color: '#666',
    textDecoration: 'none',
    padding: '0.5rem 1rem',
    borderRadius: '8px',
    transition: 'all 0.3s ease',
  },
  activeLink: {
    color: '#fff',
    textDecoration: 'none',
    padding: '0.5rem 1rem',
    borderRadius: '8px',
    backgroundColor: '#007bff',
    transition: 'all 0.3s ease',
  },
};

export default Navbar;
