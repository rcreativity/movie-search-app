import styled from 'styled-components'

const MovieCardLi = styled.li`
  list-style: none;
  display: inline-block;
  width: calc(100% / 3);
  padding: 20px;
  box-sizing: border-box;
  text-align: center;
  background: rgb(199 132 132 / 50%);
  border: 1px solid #fff;
`

const ImageHolder = styled.div`
  background-image: url(${props => props.image});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center center;
  width: 300px;
  height: 400px;
  margin: 0 auto;
`

const MovieDescriptor = styled.div`
    background: rgba(255, 255, 255, 0.5);
    padding-bottom: 16px;
    box-sizing: border-box;
    padding-top: 1px;
    margin: 5px auto;
    border-radius: 10px;

  .favourite {
      display: flex;
      align-items: center;
      width: 270px;
      text-align: center;
      margin: 0 auto;
      & > * {
        width: 50%;

        &:first-child {
          text-align: left;
        }

        &:last-child {
          text-align: center;
        }
      }
  }
`

const Button = styled.button`
  background-color: ${props => props.isFavorite ? 'green' : 'red'};
  color: white;
  border: none;
  cursor: pointer;
  padding: 5px 10px;
  border-radius: 5px;
`

export  { MovieCardLi, ImageHolder, MovieDescriptor, Button};