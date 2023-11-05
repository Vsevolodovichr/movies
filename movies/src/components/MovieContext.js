import React, { createContext, useContext, useState, useEffect } from 'react';
import axios from 'axios';

const MovieContext = createContext();

export const MovieProvider = ({ children }) => {
  const [movies, setMovies] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState(null);

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

  // Функція для отримання деталей конкретного фільму з API
  const fetchMovieDetails = async (movieId) => {
    try {
      const response = await axios.get(
        `https://api.themoviedb.org/3/movie/${movieId}?api_key=YOUR_API_KEY&language=en-US`
      );
      setSelectedMovie(response.data);
    } catch (error) {
      console.error('Помилка при отриманні деталей фільму', error);
    }
  };
  useEffect(() => {
    // Викликати функцію для отримання списку фільмів при завантаженні компонента
    fetchMovies();
  }, []);

  return (
    <MovieContext.Provider
      value={{
        movies,
        selectedMovie,
        fetchMovies,
        fetchMovieDetails,
      }}
    >
      {children}
    </MovieContext.Provider>
  );
};

export const useMovieContext = () => {
  return useContext(MovieContext);
};






