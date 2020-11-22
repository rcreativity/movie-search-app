import React from 'react'
import { MovieProvider } from './movieProvider'
import Home from './pages/home'

function App() {
  return (
    <MovieProvider>
      <Home />
    </MovieProvider>
  )
}

export default App;
