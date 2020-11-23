import React, { createContext, useReducer, useCallback } from 'react'

const MovieContext = createContext();

const initialState = {
  loading: false,
  results: [],
  error: false
};

function movieReducer(state, action) {
  switch (action.type) {
    case 'request':
      return {
        ...state, 
        loading: true,
        error: false,
      };
    case 'success':
      return {
        ...state, 
        loading: false,
        error: false,
        results: action.payload
      };
    case 'failure':
      return {
        ...state, 
        loading: false,
        error: true,
        results: []
      };
    default:
      return state;
  }
}

const MovieProvider = ({ children }) => {
  const memoizedMovieReducer = useCallback(movieReducer, [])
  const [state, dispatch] = useReducer(memoizedMovieReducer, initialState);

  return (
    <MovieContext.Provider value={{ state, dispatch }}>
      {children}
    </MovieContext.Provider>
  );
};

export { MovieProvider, MovieContext };