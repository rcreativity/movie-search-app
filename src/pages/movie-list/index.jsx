import React , { useState, useContext } from 'react'
import MovieListContainer from './styled'
import { MovieContext } from '../../movieProvider'
import Search from '../../components/search'

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
        console.log(json)
        if(json.Response === "False"){
          dispatch({ type: 'failure' })
        }
        dispatch({ type: 'success', payload: json.Search });
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

  return (
    <MovieListContainer>
      <Search 
        values={values} 
        submitForm={submitForm} 
        handleChange={handleChange} 
      />
      {state.error && 'error'}
    </MovieListContainer>
  )
}
