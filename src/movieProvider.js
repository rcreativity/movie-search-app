import React, { createContext, useReducer } from 'react'

const MovieContext = createContext();

const initialState = {
  loading: false,
  result: [],
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
        result: action.payload
      };
    case 'failure':
      return {
        ...state, 
        loading: false,
        error: true,
        result: []
      };
    default:
      return state;
  }
}

const MovieProvider = ({ children }) => {
  const [state, dispatch] = useReducer(movieReducer, initialState);

  return (
    <MovieContext.Provider value={{ state, dispatch }}>
      {children}
    </MovieContext.Provider>
  );
};

export { MovieProvider, MovieContext };