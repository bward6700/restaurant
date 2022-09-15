import { EmailRounded, Facebook, HomeRounded, Instagram, LocalPhone, Twitter } from '@material-ui/icons'
import React from 'react'
import styled from 'styled-components'
import {useNavigate} from 'react-router-dom'

const Container = styled.div`
display:flex;
border-top: solid 3px black;
flex-wrap:wrap;
font-family: 'Source Code Pro', monospace;
`
const Left = styled.div`
flex:1;
display:flex;
flex-direction:column;
padding:20px;
`
const Center = styled.div`
flex:1;
padding:20px;
`
const Right = styled.div`
flex:1;
padding:20px;
`
const Title = styled.h3`
margin-bottom:30px;
text-decoration:underline;
`

const List = styled.ul`
margin:0;
padding:0;
list-style:none;
display:flex;
flex-direction:column;
flex-wrap:wrap;
`

const ListItem = styled.li`
margin-bottom:20px;
display:flex;
align-items:center;
cursor:pointer;

    &:hover{
        background-image: linear-gradient(to left, #ef5350, #f48fb1, #7e57c2, #2196f3, #26c6da, #43a047, #eeff41, #f9a825, #ff5722);
        color: transparent;
        background-clip: text;
        -webkit-background-clip: text;
    }
`


const SocialContainer = styled.div`
display:flex;
flex-direction:column;
`

const SocialIcon = styled.div`
margin-bottom:20px;
display:flex;
align-items:center;
cursor:pointer;

&:hover{
    background-image: linear-gradient(to right, #ef5350, #f48fb1, #7e57c2, #2196f3, #26c6da, #43a047, #eeff41, #f9a825, #ff5722);
    color: transparent;
    background-clip: text;
    -webkit-background-clip: text;
}
`

const ContactItem = styled.div`
margin-bottom:20px;
display:flex;
align-items:center;
cursor:pointer;

&:hover{
    background-image: linear-gradient(to right, #ef5350, #f48fb1, #7e57c2, #2196f3, #26c6da, #43a047, #eeff41, #f9a825, #ff5722);
    color: transparent;
    background-clip: text;
    -webkit-background-clip: text;
}
`

const Footer = () => {
  let nav = useNavigate();
    return (
    <Container>
        <Left>
            <Title>Socials</Title>
        <SocialContainer>
            <SocialIcon>
                <Facebook/>  Facebook
            </SocialIcon>
            <SocialIcon>
                <Instagram/>  Instagram
            </SocialIcon>
            <SocialIcon>
                <Twitter/>  Twitter
            </SocialIcon>
        </SocialContainer>
        </Left>
        <Center>
            <Title>Links</Title>
            <List>
                <ListItem onClick={() => {nav('/')}}>Home</ListItem>
                <ListItem onClick={() => {nav('/restaurants')}}>Restaurants</ListItem>
                <ListItem onClick={() => {nav('/friends')}}>Friends</ListItem>
            </List>
        </Center>
        <Right>
            <Title>Contact Adresses</Title>
            <ContactItem>
                <HomeRounded style={{marginRight:'10px'}}/> 1234 Social Way, Charlote NC 12345
            </ContactItem>
            <ContactItem>
                <LocalPhone style={{marginRight:'10px'}}/> +1 123-456-7890
            </ContactItem>
            <ContactItem>
                <EmailRounded style={{marginRight:'10px'}}/> Bward@r2hstudent.org
            </ContactItem>
        </Right>
    </Container>
  )
}

export default Footer