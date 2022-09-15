import React from 'react'
import styled from 'styled-components'


const Container = styled.div`
background-color: var(--overlay);
color: #fff;
height: 100vh;
width: 100%;
position: relative;
background-color: black;

&:before{
    content: '';
    background: url('https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80') no-repeat center center/cover;
    height: 100%;
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 1;
    opacity: 0.4;
    
}
`
const Content = styled.div`
height: 100%;
display: flex;
justify-content: center;
max-width: 1100px;
margin: auto;
opacity:1;
`

const Info = styled.p`
font-size: 4rem;
font-style: italic;
color:white;
opacity:1;
z-index:2;
`






const Hero = () => {
  return (
    <Container>
    <Content>
        <Info>Welcome to Sociable</Info>
    </Content>
</Container>
  )
}

export default Hero