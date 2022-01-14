import React from 'react';
import styled from "styled-components";
import Stat from './components/Stat';

const Container = styled.div`
    width:100vw;
    height:100vh;
    display:flex;
    align-items:center;
    justify-content:center;
    background-color:hsl(185, 75%, 39%);
    font-family: 'Kumbh Sans', sans-serif;
    font-size:18px;
    overflow:hidden;
`
const BackgroundDesignTop = styled.img`
    position:fixed;
    /* top:-60%;
    left:-20%; */
    top:-60vh;
    left:-20vw;

    @media only screen and (max-width:500px){
        top:-60vh;
        left:-190vw;
    }   

`

const BackgroundDesignBottom = styled.img`
    position:fixed;
    bottom:-70vh;
    right:-15vw;
    /* bottom:-75%;
    right:-15%; */
    @media only screen and (max-width:500px){
        bottom:-70vh;
        right:-180vw;
    }
`

const Wrapper = styled.div`
    margin:50px 30px;
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
    border-radius:10px; 
    background-color:white;
    z-index:100;
`

const Header = styled.div`

`

const HeaderImage = styled.img`
    border-top-right-radius:10px;
    border-top-left-radius:10px;
`

const Body = styled.div`
    padding:50px 50px 30px;
    display:flex;
    align-items:center;
    justify-content:center;
    flex-direction:column;
    position:relative;
`

const UserDetails = styled.div`
    display:flex;
    align-items:center;
    justify-content:center;
`

const ProfilePic = styled.img`
    border-radius:50%;
    position:absolute;
    top: -60px;
    border: 5px solid white;
`

const Username = styled.h3`
    font-weight:700;
    margin-right:10px;
`

const Age = styled.p`
    font-weight:400;
    color:hsl(0, 0%, 59%);
`

const Location = styled.p`
    font-weight:400;
    color:hsl(0, 0%, 59%);
    font-size:16px;
    margin-top:15px;
`
const Hr = styled.hr`
    border-top:0px solid;
    width:100%;
`
const Footer = styled.div`
    display:flex;
    align-items:center;
    justify-content:space-between;
    width:100%;
    padding:30px;
`

const ProfileCard = () => {
    return (
        <Container>
            <BackgroundDesignTop src="/assets/ProfileCard/bg-pattern-top.svg" alt="bgtopimage"/>
            <BackgroundDesignBottom src="/assets/ProfileCard/bg-pattern-bottom.svg" alt="bgbottomimage"/>
            <Wrapper>
                <Header>
                    <HeaderImage src="/assets/ProfileCard/bg-pattern-card.svg" alt="header_img" />
                </Header>
                <Body>
                    <UserDetails>
                        <ProfilePic src="/assets/ProfileCard/image-victor.jpg" alt="profile_pic"/>
                        <Username>Victor Crest</Username>
                        <Age>26</Age>
                    </UserDetails>
                    <Location>London</Location>
                </Body>
                <Hr/>
                <Footer>
                    <Stat value="80k" attribute="Followers"></Stat>
                    <Stat value="803k" attribute="Likes"></Stat>
                    <Stat value="1.4k" attribute="Photos"></Stat>
                </Footer>
            </Wrapper>
            
        </Container>
    )
}

export default ProfileCard
