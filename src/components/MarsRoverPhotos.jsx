import { useState } from 'react';
import axiosInstance from '../api/axiosInstance';

function App() {
  const [rover, setRover] = useState('curiosity');
  const [sol, setSol] = useState('');
  const [camera, setCamera] = useState('');
  const [photos, setPhotos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    
    try {
      const response = await axiosInstance.get(`mars-photos/api/v1/rovers/${rover}/photos`, {
        params: {
          sol: sol,
          camera: camera || undefined,
        }
      });
      
      setPhotos(response.data.photos);
      if (response.data.photos.length === 0) {
        setError('No photos found for these parameters');
      }
    } catch (err) {
      setError('Error fetching photos: ' + err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={styles.container}>
      <form onSubmit={handleSubmit} style={styles.form}>
        <div style={styles.formGroup}>
          <label>Rover:</label>
          <select style={styles.select} value={rover} onChange={(e) => setRover(e.target.value)}>
            <option value="curiosity">Curiosity</option>
            <option value="opportunity">Opportunity</option>
            <option value="spirit">Spirit</option>
          </select>
        </div>
        <div style={styles.formGroup}>
          <label>Sol:</label>
          <input
            style={styles.input}
            type="number"
            value={sol}
            onChange={(e) => setSol(e.target.value)}
            required
          />
        </div>
        <div style={styles.formGroup}>
          <label>Kamera:</label>
          <input
            style={styles.input}
            type="text"
            value={camera}
            onChange={(e) => setCamera(e.target.value)}
            placeholder="Örneğin: FHAZ"
          />
        </div>
        <button style={styles.button} type="submit">Fotoğrafları Getir</button>
      </form>

      {loading && <div>Loading...</div>}
      {error && <div style={{ color: 'red', margin: '1rem 0' }}>{error}</div>}
      
      {photos.length > 0 && (
        <div style={styles.photos}>
          {photos.map((photo) => (
            <img
              key={photo.id}
              src={photo.img_src}
              alt={`Mars rover ${rover} - Sol ${sol}`}
              style={styles.photo}
            />
          ))}
        </div>
      )}
    </div>
  );
}

const styles = {
  container: {
    maxWidth: '1400px',
    margin: '2rem auto',
    padding: '0 var(--container-padding)',
    backgroundColor: '#ffffff',
  },
  form: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
    gap: '1rem',
    margin: '2rem 0',
    '@media (min-width: 768px)': {
      gridTemplateColumns: 'repeat(3, 1fr)',
    },
    padding: '1rem',
    backgroundColor: '#f8f9fa',
    borderRadius: '8px',
  },
  formGroup: {
    display: 'flex',
    flexDirection: 'column',
    gap: '0.5rem',
    textAlign: 'left',
  },
  input: {
    padding: '0.5rem',
    borderRadius: '4px',
    border: '1px solid #ddd',
    fontSize: '1rem',
  },
  select: {
    padding: '0.5rem',
    borderRadius: '4px',
    border: '1px solid #ddd',
    fontSize: '1rem',
  },
  button: {
    padding: '0.75rem 1.5rem',
    backgroundColor: '#007bff',
    color: '#ffffff',
    border: 'none',
    borderRadius: '4px',
    fontSize: '1rem',
    cursor: 'pointer',
    transition: 'background-color 0.3s',
    ':hover': {
      backgroundColor: '#0056b3',
    },
  },
  photos: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
    gap: '1.5rem',
    padding: '1rem',
    '@media (min-width: 1024px)': {
      gridTemplateColumns: 'repeat(auto-fill, minmax(350px, 1fr))',
    },
  },
  photo: {
    width: '100%',
    height: '250px',
    objectFit: 'cover',
    borderRadius: '8px',
    boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
    '@media (min-width: 1024px)': {
      height: '300px',
    },
  },
};

export default App;
