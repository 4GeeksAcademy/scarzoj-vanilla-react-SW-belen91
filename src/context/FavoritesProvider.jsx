import { createContext, useContext, useState } from "react";

const FavoritesContext = createContext();

export const FavoritesProvider = ({ children }) => {
  const [favorites, setFavorites] = useState([]);

  const toggleFavorite = (item) => {
    setFavorites((prev) => {
      const exists = prev.some((fav) => fav.id === item.id && fav.type === item.type);
      if (exists) {
        return prev.filter((fav) => !(fav.id === item.id && fav.type === item.type));
      } else {
        return [...prev, item];
      }
    });
  };

  const isFavorite = (item) => {
    return favorites.some((fav) => fav.id === item.id && fav.type === item.type);
  };

  return (
    <FavoritesContext.Provider value={{ favorites, toggleFavorite, isFavorite }}>
      {children}
    </FavoritesContext.Provider>
  );
};

export const useFavorites = () => useContext(FavoritesContext);