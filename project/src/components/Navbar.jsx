import React from 'react'
import styled from 'styled-components'
import {useNavigate} from 'react-router-dom'

const Container = styled.div`
height:70px;
width:100%;
border-bottom: solid 3px black;
padding-bottom:15px;
`
const Wrapper = styled.div`
padding: 10px 20px;
display: flex;
align-items:center;
justify-content: space-between;
`
const Left = styled.div``

const Right = styled.div`
display:flex;
`

const Title = styled.h1`
display:flex;
justify-content:flex-start;
font-family: 'Source Code Pro', monospace;
background-image: linear-gradient(to right, #ef5350, #f48fb1, #7e57c2, #2196f3, #26c6da, #43a047, #eeff41, #f9a825, #ff5722);
color: transparent;
background-clip: text;
-webkit-background-clip: text;
cursor:pointer;

  &:hover{
    transform:scale(1.1);
  }
`
const Item = styled.p`
display:flex;
align-items:center;
cursor:pointer;
padding-left:30px;
font-family: 'Source Code Pro', monospace;

&:hover{
  transform:scale(1.2);
  background-image: linear-gradient(to right, #ef5350, #f48fb1, #7e57c2, #2196f3, #26c6da, #43a047, #eeff41, #f9a825, #ff5722);
  color: transparent;
  background-clip: text;
  -webkit-background-clip: text;
}
`



const Navbar = () => {
  let nav = useNavigate();
  
  return (
    <div>
      <Container>
        <Wrapper>
          <Left>
          <Title onClick={() => {nav('/')}}>Sociable</Title>
          </Left>

          <Right>
          <Item onClick={() => {nav('/')}}>Home</Item>
          <Item onClick={() => {nav('/restaurants')}}>Restaurants</Item>
          <Item onClick={() => {nav('/friends')}}>Friends</Item>
          </Right>
        </Wrapper>
      </Container>
      </div>
  )
}

export default Navbar