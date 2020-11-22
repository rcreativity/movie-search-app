import React from 'react'
import { Link } from 'react-router-dom'
import {Header, LogoContainer, NavContainer} from './styled'

export default function index() {
  return (
    <Header>
      <LogoContainer>
        <Link to="/">Home</Link>
      </LogoContainer>
      <NavContainer>
        <Link to="/favourites">Favorites</Link>
      </NavContainer>
    </Header>
  )
}
