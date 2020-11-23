import React, { createContext, useReducer, useCallback, useEffect } from 'react'

const MovieContext = createContext();

const initialState = {
  loading: false,
  results: [],
  error: false
};

const favouriteInitialState = [];

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

function favouriteReducer(state, action) {
  switch (action.type) {
    case 'LocalStorage_Init':
      if(!localStorage.getItem("favorites")){
        localStorage.setItem("favorites", JSON.stringify(state));
        return state;
      }else{
        const getFavorites = JSON.parse(localStorage.getItem("favorites"))
        return [...state, ...getFavorites];
      }
    case 'LocalStorage_Add':
      const newStateAdd = [...state, action.payload]
      localStorage.setItem("favorites", JSON.stringify(newStateAdd));
      return newStateAdd
    case 'LocalStorage_Remove':
      const newState = state.filter((v)=> v !== action.payload);
      localStorage.setItem("favorites", JSON.stringify(newState));
      return newState
    case 'LocalStorage_RemoveAll':
      localStorage.setItem("favorites", JSON.stringify([]))
      return state.length = 0;
    default:
      return state;
  }
}

const MovieProvider = ({ children }) => {
  const memoizedMovieReducer = useCallback(movieReducer, [])
  const memoizedFavouriteReducer = useCallback(favouriteReducer, [])
  const [state, dispatch] = useReducer(memoizedMovieReducer, initialState);
  const [favourite, favouriteDispatch] = useReducer(memoizedFavouriteReducer, favouriteInitialState);

  useEffect(()=>{
    console.log('favourite', favourite)
    favouriteDispatch({ type: 'LocalStorage_Init'})
  }, [])

  return (
    <MovieContext.Provider value={{ state, favourite, dispatch, favouriteDispatch }}>
      {children}
    </MovieContext.Provider>
  );
};

export { MovieProvider, MovieContext };