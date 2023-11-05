import React, { createContext, useContext, useState } from 'react';

const MovieContext = createContext();

export const MovieProvider = ({ children }) => {
  const [movies, setMovies] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState(null);

  // Ваші функції для отримання та оновлення даних з API можуть бути тут

  return (
    <MovieContext.Provider
      value={{
        movies,
        selectedMovie,
        setSelectedMovie,
        // Додайте тут функції, які отримують і оновлюють дані
      }}
    >
      {children}
    </MovieContext.Provider>
  );
};

export const useMovieContext = () => {
  return useContext(MovieContext);
};
