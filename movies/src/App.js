import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { MovieProvider } from '../src/context/MovieProvider';
import MoviesList from '../src/components/MoviesList';
import MovieDetails from '../src/components/MovieDetails';

function App() {
  return (
    <Router>
      <MovieProvider>
        <div className="App">
          <header>
            <h1>Movie App</h1>
          </header>
          <main>
            <Routes>
              <Route path="/" element={<MoviesList />} />
              <Route path="/movie/:id" element={<MovieDetails />} />
            </Routes>
          </main>
        </div>
      </MovieProvider>
    </Router>
  );
}

export default App;
