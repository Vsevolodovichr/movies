// src/components/MovieDetails.js
import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useAppContext } from '../context/AppContext';
import axios from 'axios';

const MovieDetails = () => {
  const { dispatch } = useAppContext();
  const { id } = useParams();

  // В цьому прикладі фіктивні дані про фільм з ідентифікатором `1`
  const fakeMovie = {
    id: 1,
    title: 'Movie 1',
    description: 'Description of Movie 1',
    director: 'Director Name',
    releaseYear: 2023,
  };

  useEffect(() => {
    // Замініть URL на реальний URL вашого API та параметри запиту
    axios.get(`URL-ДО-ВАШОГО-API/movies/${id}`)
      .then((response) => {
        // Оновіть стан за допомогою dispatch з отриманими даними з API
        dispatch({ type: 'SET_SELECTED_MOVIE', payload: response.data });
      })
      .catch((error) => {
        console.error('Помилка при отриманні даних про фільм', error);
      });
  }, [id, dispatch]);

  return (
    <div>
      <h1>Movie Details</h1>
      <div>
        <h2>{fakeMovie.title}</h2>
        <p>{fakeMovie.description}</p>
        <p>Director: {fakeMovie.director}</p>
        <p>Release Year: {fakeMovie.releaseYear}</p>
      </div>
    </div>
  );
};

export default MovieDetails;

