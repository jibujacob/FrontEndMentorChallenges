import React from 'react';
import styled from 'styled-components';
import Stat from './components/Stat';

const Container = styled.div`
    width:100vw;
    min-height:100vh;
    display:flex;
    align-items:center;
    justify-content:center;
    background-color:hsl(233, 47%, 7%);
    color:hsl(0, 0%, 100%);
    font-family: 'Inter', sans-serif;

    @media only screen and (max-width:720px){
        width:100vw;
        min-height:100vh;
    }
`
const Wrapper = styled.div`
    display:flex;
    max-width:900px;
    max-height:500px;
    margin:50px 20px;

    @media only screen and (max-width:720px){
        flex-direction:column-reverse;
        max-height:95%;
    }
    
`

const Left = styled.div`
    padding:50px 70px 50px 50px;
    background-color:hsl(244, 38%, 16%);
    border-top-left-radius:10px;
    border-bottom-left-radius:10px;
    display:flex;
    flex-direction:column;

    @media only screen and (max-width:720px){
        padding:0;
        width:100%;
        height:90%;
        border-top-left-radius:0;
        border-bottom-right-radius:10px;
        align-items:center;
        justify-content:center;
    }
`

const Title = styled.h1`
    margin:30px 0;
    @media only screen and (max-width:720px){
        text-align:center;
        margin-bottom:10px;
        width:85%;
    }

`

const Span=styled.span`
    color:hsl(277, 64%, 61%);
    
`

const Content = styled.p`
    margin:30px 0 40px;
    color:hsla(0, 0%, 100%, 0.75);
    font-size:15px;
    line-height:1.5;

    @media only screen and (max-width:720px){
        text-align:center;
        margin:10px 0 30px;
        width:90%;
    }
`

const StatsDetails = styled.div`
    display:flex;
    margin-top:60px;
    align-items:center;
    justify-content:space-between;
    width:90%;

    @media only screen and (max-width:720px){
        flex-direction:column;
        margin:0;
    }
`

const Right = styled.div`
    width:100%;
    max-height:100%;
    background-image:url("/assets/StatsPreviewCard/image-header-desktop.jpg");
    background-repeat:no-repeat;
    background-size:cover;
    background-color:hsl(277, 64%, 61%);
    background-blend-mode:multiply;
    border-top-right-radius:10px;
    border-bottom-right-radius:10px;
    

    @media only screen and (max-width:720px){
        flex-direction:column-reverse;
        width:100%;
        min-height:300px;
        background-image:url("/assets/StatsPreviewCard/image-header-mobile.jpg");
        border-top-left-radius:10px;
        border-bottom-right-radius:0;

    }
`


const StatsPreviewCard = () => {
    return (
        <Container>
            <Wrapper>
                <Left>
                    <Title>Get <Span>insights</Span> that help your business grow.</Title>
                    <Content>
                        Discover the benefits of data analytics and make better decisions regarding revenue, customer 
                        experience, and overall efficiency.
                    </Content>
                    <StatsDetails>
                        <Stat value="10k+" attribute="COMPANIES"/>
                        <Stat value="314" attribute="TEMPLATES"/>
                        <Stat value="12M+" attribute="QUERIES"/>
                    </StatsDetails>
                </Left>
                <Right></Right>
            </Wrapper>
        </Container>
    )
}

export default StatsPreviewCard
