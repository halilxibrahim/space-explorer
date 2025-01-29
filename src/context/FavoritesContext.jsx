// src/context/FavoritesContext.js
import { createContext, useState } from 'react';

export const FavoritesContext = createContext();

export function FavoritesProvider({ children }) {
  const [favorites, setFavorites] = useState([]);

  const addFavorite = (photo) => {
    setFavorites((prev) => [...prev, photo]);
  };

  const removeFavorite = (photoUrl) => {
    setFavorites((prev) => prev.filter((item) => item.url !== photoUrl));
  };

  return (
    <FavoritesContext.Provider value={{ favorites, addFavorite, removeFavorite }}>
      {children}
    </FavoritesContext.Provider>
  );
}
