// src/components/Asteroids.js
import { useEffect, useState } from 'react';
import axiosInstance from '../api/axiosInstance';

function Asteroids() {
  const [asteroids, setAsteroids] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    axiosInstance.get('/neo/rest/v1/feed')
      .then(response => {
        const nearEarthObjects = response.data.near_earth_objects;
        // En son tarihe ait asteroitleri al
        const latestDate = Object.keys(nearEarthObjects).sort().pop();
        setAsteroids(nearEarthObjects[latestDate]);
        setLoading(false);
      })
      .catch(err => {
        console.error('Asteroitler çekilirken hata:', err);
        setError(true);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Yükleniyor...</p>;
  if (error) return <p>Bir hata oluştu.</p>;

  return (
    <div style={styles.container}>
      <h2>Yaklaşan Asteroitler</h2>
      <ul style={styles.list}>
        {asteroids.slice(0, 10).map(asteroid => (
          <li key={asteroid.id} style={styles.item}>
            <p><strong>Ad:</strong> {asteroid.name}</p>
            <p><strong>Büyüklük:</strong> {asteroid.estimated_diameter.kilometers.estimated_diameter_max.toFixed(2)} km</p>
            <p><strong>Yaklaşma Tarihi:</strong> {asteroid.close_approach_data[0].close_approach_date}</p>
            <p><strong>Risk:</strong> {asteroid.is_potentially_hazardous_asteroid ? 'Tehlikeli' : 'Tehlikesiz'}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

const styles = {
  container: {
    maxWidth: '1400px',
    margin: '2rem auto',
    padding: '0 var(--container-padding)',
  },
  list: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
    gap: '1.5rem',
    padding: '1rem',
    '@media (min-width: 1024px)': {
      gridTemplateColumns: 'repeat(3, 1fr)',
    },
  },
  item: {
    backgroundColor: '#f8f9fa',
    border: '1px solid #ddd',
    borderRadius: '8px',
    padding: '1.5rem',
    boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
    '@media (min-width: 1024px)': {
      padding: '2rem',
    },
  },
};

export default Asteroids;
