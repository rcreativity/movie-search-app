import React, { useContext } from 'react'
import { SearchContainer } from './styled'
import { MovieContext } from '../../movieProvider'

export default function Search() {
  const { count, increment, decrement } = useContext(MovieContext);

  return (
    <SearchContainer>
      <h2>Search Results</h2>
      <h1>{count}</h1>
      <button onClick={increment}> Increment</button>
      <button onClick={decrement}> Decrement</button>
    </SearchContainer>
  )
}
