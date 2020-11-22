import React from 'react'
import AppContainer from './styled'
import Header from '../../components/header'

export default function Home() {
  return (
    <AppContainer>
      <Header />
      <main>Main content</main>
      <footer>Footer</footer>
    </AppContainer>
  )
}
