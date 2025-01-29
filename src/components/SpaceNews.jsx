// src/components/SpaceNews.js
import { useEffect, useState } from 'react';
import axios from 'axios';

function SpaceNews() {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    // RSS feed'i JSON'a çevirmek için bir proxy kullanacağız (örneğin, rss2json)
    const fetchNews = async () => {
      try {
        const response = await axios.get('https://api.rss2json.com/v1/api.json', {
          params: {
            rss_url: 'https://www.nasa.gov/rss/dyn/breaking_news.rss',
          },
        });
        setNews(response.data.items);
        setLoading(false);
      } catch (err) {
        console.error('Haberler çekilirken hata:', err);
        setError(true);
        setLoading(false);
      }
    };

    fetchNews();
  }, []);

  if (loading) return <p>Yükleniyor...</p>;
  if (error) return <p>Bir hata oluştu.</p>;

  return (
    <div style={styles.container}>
      <h2>NASA Haberleri</h2>
      <ul style={styles.list}>
        {news.slice(0, 5).map(item => (
          <li key={item.guid} style={styles.item}>
            <a href={item.link} target="_blank" rel="noopener noreferrer" style={styles.link}>
              {item.title}
            </a>
            <p>{item.pubDate}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

const styles = {
  container: {
    margin: '2rem 0',
    textAlign: 'center',
  },
  list: {
    listStyleType: 'none',
    padding: 0,
  },
  item: {
    border: '1px solid #ddd',
    borderRadius: '8px',
    padding: '1rem',
    margin: '0.5rem 0',
  },
  link: {
    textDecoration: 'none',
    color: '#0b3d91',
    fontWeight: 'bold',
  },
};

export default SpaceNews;
