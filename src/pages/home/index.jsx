import React from 'react'
import {AppContainer, MainContainer} from './styled'
import Header from '../../components/header'
import Footer from '../../components/footer'
import MovieList from '../movie-list'

export default function Home() {
  return (
    <AppContainer>
      <Header />
      <MainContainer>
        <MovieList />
      </MainContainer>
      <Footer />
    </AppContainer>
  )
}
