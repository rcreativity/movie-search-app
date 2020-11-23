import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import { MovieCardLi, ImageHolder, MovieDescriptor, Button} from './styled'

export default function MovieCard({movie}) {
  const { imdbID, Title, Poster, Year } = movie;
  const [isFavorite, setIsFavorite] = useState(false)

  const addFavourite = (Id) => {
    setIsFavorite(!isFavorite)
  }

  return (
    <MovieCardLi>
      <Link to={`/${imdbID}`}><ImageHolder image={Poster} /></Link>
      <MovieDescriptor>
        <h3>Title : <i>{Title}</i></h3>
        <div className="favourite">
          <div className="year">Year : <strong><i>{Year}</i></strong></div>
          <Button type="Button" isFavorite={isFavorite} className="favourite-button-" onClick={() => addFavourite(imdbID)}>Favorite</Button>  
        </div>  
      </MovieDescriptor>
    </MovieCardLi>
  )
}
