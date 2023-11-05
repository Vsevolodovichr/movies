// src/components/Home.js
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useAppContext } from '../context/AppContext';
import axios from 'axios';
import './Home.css';

const Home = () => {
  const { dispatch } = useAppContext();

  // У цьому прикладі фіктивний список фільмів
  const fakeMovies = [
    { id: 1, title: 'Movie 1', description: 'Description of Movie 1' },
    { id: 2, title: 'Movie 2', description: 'Description of Movie 2' },
    { id: 3, title: 'Movie 3', description: 'Description of Movie 3' },
  ];

  useEffect(() => {
    // Виконуємо асинхронний запит до API за списком фільмів
    const fetchData = async () => {
      try {
        // Здійснюємо запит до API та очікуємо на відповідь
        const response = await axios.get(`URL-ДО-ВАШОГО-API/movies`);
  
        // Отримуємо дані з API відповіді
        const data = response.data;
  
        // Оновлюємо стан за допомогою dispatch
        dispatch({ type: 'SET_MOVIES', payload: data });
      } catch (error) {
        console.error('Помилка при отриманні даних про фільми', error);
      }
    };
  
    // Викликаємо функцію для виконання запиту
    fetchData();
  }, [dispatch]);


  return (
    <div>
      <h1>Movie List</h1>
      <ul>
        {fakeMovies.map((movie) => (
          <li key={movie.id}>
            <h2>{movie.title}</h2>
            <p>{movie.description}</p>
            <Link to={`/movies/${movie.id}`}>
              <button>View Details</button>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;