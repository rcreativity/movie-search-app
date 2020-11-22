import React, { createContext } from 'react'

const MovieContext = createContext();

const MovieProvider = ({ children }) => {
  const [count, setCount] = React.useState(4);

  const increment = () => setCount(counter => counter + 1);
  const decrement = () => setCount(counter => counter - 1);
  return (
    <MovieContext.Provider value={{ count, increment, decrement }}>
      {children}
    </MovieContext.Provider>
  );
};

export { MovieProvider, MovieContext };