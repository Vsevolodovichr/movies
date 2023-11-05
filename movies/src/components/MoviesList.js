import React, { useEffect } from 'react';
import { useMovieContext } from './MovieContext';

function MoviesList() {
  const { movies, fetchMovies } = useMovieContext();

  useEffect(() => {
    // Викликати функцію для отримання списку фільмів при завантаженні компонента
    fetchMovies();
  }, [fetchMovies]);

  return (
    <div className="movies-list">
      <h2>Список фільмів</h2>
      <ul>
        {movies.map((movie) => (
          <li key={movie.id}>
            <a href={`/movie/${movie.id}`}>
              {movie.title}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default MoviesList;
