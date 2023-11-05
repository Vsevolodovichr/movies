import React from 'react';
import { BrowserRouter as  Route, BrowserRouter, Routes } from 'react-router-dom';
import Home from '../src/components/Home';
import MovieDetails from '../src/components/MovieDetails';
import { Link } from 'react-router-dom';

function App() {
  return (
    
    <div className="App">
      <header>
        <h1>Movie App</h1>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/movies/1">Movie 1</Link>
            </li>
            <li>
              <Link to="/movies/2">Movie 2</Link>
            </li>
            <li>
              <Link to="/movies/3">Movie 3</Link>
            </li>
          </ul>
        </nav>
      </header>
      
      <BrowserRouter>
       <Routes>
         <Route path="/" exact component={Home} />
         <Route path="/movies/:id" component={MovieDetails} />
       </Routes>
      </BrowserRouter>
    </div>
  
  );
}

export default App;