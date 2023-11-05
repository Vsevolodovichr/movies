// src/context/AppContext.js
import React, { createContext, useReducer, useContext } from 'react';

const AppContext = createContext();

const initialState = {
  movies: [],
  selectedMovie: null,
};

const appReducer = (state, action) => {
  switch (action.type) {
    // Додайте обробники для додавання/оновлення фільмів та вибору фільму
    default:
      return state;
  }
};

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(appReducer, initialState);

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
};

const useAppContext = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useAppContext must be used within an AppProvider');
  }
  return context;
};

export { AppProvider, useAppContext };
