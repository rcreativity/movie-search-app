import React, {useState, useContext} from 'react'
import { Link } from 'react-router-dom'
import { MovieCardLi, ImageHolder, MovieDescriptor, Button} from './styled'
import { MovieContext } from '../../movieProvider'

export default function MovieCard({movie}) {
  const { favorites, favouriteDispatch } = useContext(MovieContext);
  const { imdbID, Title, Poster, Year } = movie;
  const [isFavorite, setIsFavorite] = useState(false)

  const addFavourite = (Id) => {
    const getFavorites = JSON.parse(localStorage.getItem("favorites"))
    console.log(getFavorites.includes(Id));
    if(!getFavorites.includes(Id)){
      favouriteDispatch({type: 'LocalStorage_Add', payload: Id});
      setIsFavorite(true)
    }else if(getFavorites.includes(Id)){
      favouriteDispatch({type: 'LocalStorage_Remove', payload: Id});
      setIsFavorite(false)
    }
  }

  const checkIsFavorite = (Id) => {
    const getFavorites = JSON.parse(localStorage.getItem("favorites"))
    return getFavorites.includes(Id);
  }

  return (
    <MovieCardLi>
      <Link to={`/${imdbID}`}><ImageHolder image={Poster} /></Link>
      <MovieDescriptor>
        <h3>Title : <i>{Title}</i></h3>
        <div className="favourite">
          <div className="year">Year : <strong><i>{Year}</i></strong></div>
          <Button type="Button" isFavorite={isFavorite || checkIsFavorite(imdbID) } className="favourite-button-" onClick={() => addFavourite(imdbID)}>Favorite</Button>  
        </div>  
      </MovieDescriptor>
    </MovieCardLi>
  )
}
