import React, { createContext, useContext, useState, useEffect } from 'react';
import axios from 'axios';

const MovieContext = createContext();

export const MovieProvider = ({ children }) => {
  const [movies, setMovies] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState(null);

  useEffect(() => {
    // Функція для отримання списку фільмів з MovieDB API
    const fetchMovies = async () => {
      try {
        const response = await axios.get(
          'https://api.themoviedb.org/3/discover/movie?api_key=YOUR_API_KEY&language=en-US'
        );
        setMovies(response.data.results);
      } catch (error) {
        console.error('Помилка при отриманні списку фільмів', error);
      }
    };

    // Викликаємо функцію при завантаженні компонента
    fetchMovies();
  }, []);

  return (
    <MovieContext.Provider
      value={{
        movies,
        selectedMovie,
        setSelectedMovie,
      }}
    >
      {children}
    </MovieContext.Provider>
  );
};

export const useMovieContext = () => {
  return useContext(MovieContext);
};
