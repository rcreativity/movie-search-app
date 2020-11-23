import styled from 'styled-components'

const MovieListContainer = styled.section`
  margin: 0 auto;
  text-align: center;
  max-height: auto;
  min-height: 750px;
`

const ErrorMessage = styled.h2`
  background: #ce0000;
  padding: 10px;
  color: #fff;
  width: 60%;
  margin: 0 auto;
  text-align: center;
  border-radius: 5px;
`

const MovieListUl = styled.ul`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;
  padding: 20px;
  box-sizing: border-box;
`


export {MovieListContainer, ErrorMessage, MovieListUl};