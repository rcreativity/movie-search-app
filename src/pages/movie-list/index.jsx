import React , { useState, useContext } from 'react'
import {MovieListContainer, MovieListUl, ErrorMessage} from './styled'
import { MovieContext } from '../../movieProvider'
import Search from '../../components/search'
import MovieCard from '../../components/movieCard'

export default function MovieList() {
  const { state, dispatch } = useContext(MovieContext);
  const [values, setValues] = useState({
    search: "spider",
    type: "movie"
  });

  const submitForm = (e) => {
    e.preventDefault();
    const { search, type } = values;

    dispatch({ type: 'request' })
    if(search && type) {
      fetch(`http://www.omdbapi.com/?type=${type}&i=tt3896198&apikey=${process.env.REACT_APP_SECRETE_KEY}&s=${search}`)
      .then(response => response.json())
      .then(json => {
        if(json.Response === "False"){
          dispatch({ type: 'failure' })
        }else{
          dispatch({ type: 'success', payload: json.Search });
        }
      })
    }else{
      alert("Please fill the required fields")
    }
  }

  const handleChange = event => {
    const value = event.target.value;
    setValues({
      ...values,
      [event.target.name]: value
    });
  };

  console.log(state)
  const { error, results, loading } = state;

  return (
    <MovieListContainer>
      <Search 
        values={values} 
        submitForm={submitForm} 
        handleChange={handleChange} 
      />
      {loading && 'loading'}
      {error && (
        <ErrorMessage>Something went wrong, Please search with valid name</ErrorMessage>
      )}
      <MovieListUl>
        {!loading && results?.map((value)=> <MovieCard key={value?.imdbID} movie={value} /> )}
      </MovieListUl>
    </MovieListContainer>
  )
}
