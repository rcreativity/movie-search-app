import React from 'react'
import { Switch, Route } from "react-router-dom";
import {AppContainer, MainContainer} from './styled'
import Header from '../../components/header'
import Footer from '../../components/footer'
import MovieList from '../movie-list'

export default function Home() {
  return (
    <AppContainer>
      <Header />
      <MainContainer>
        <Switch>
            <Route exact path="/">
              <MovieList />
            </Route>
            <Route path="/favourites">
              <h2>Favorites</h2>
            </Route>
        </Switch>
      </MainContainer>
      <Footer />
    </AppContainer>
  )
}
