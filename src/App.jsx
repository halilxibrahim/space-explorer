// src/App.js
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import MarsRoverPhotos from './components/MarsRoverPhotos';
import Asteroids from './components/Asteroids';
import './index.css';

function App() {
  return (
    <Router>
      <div style={{ backgroundColor: '#f0f2f5', minHeight: '100vh', width: '100%' }}>
        <Navbar />
        <div style={{ padding: '1rem', maxWidth: '100%' }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/mars-rover" element={<MarsRoverPhotos />} />
            <Route path="/asteroids" element={<Asteroids />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
