import styled from 'styled-components'

const Header = styled.header`
  margin: 0 auto;
  text-align: center;
  background: #343a40;
  display: flex;
  flex-direction: row;
  padding: 20px;
  box-sizing: border-box;
  color: #fff;
  & > div {
    width: 50%;

    &:first-child {
      text-align: left;
    }
    &:last-child {
      text-align: right;
    }

    a{
      color: #fff;
      text-decoration: none;

      &:hover {
        text-decoration: underline;
      }
    }
  }
`

const LogoContainer = styled.div``
const NavContainer = styled.div``

export {Header, LogoContainer, NavContainer};
