import React from 'react';
import styled from "styled-components";
import Stat from './components/Stat';

const Container = styled.div`
    width:100vw;
    min-height:100vh;
    display:flex;
    align-items:center;
    justify-content:center;
    font-family: 'Inter', sans-serif;
    color:hsl(0, 0%, 100%);
    background-color:hsl(233, 47%, 7%);
`

const Wrapper = styled.div`
    display:flex;
    width:70%;
    justify-content:center;
    @media only screen and (max-width:900px){
        flex-direction:column-reverse;
    }
`

const LeftContainer  = styled.div`
    background-color:hsl(244, 38%, 16%);
    display:flex;
    align-items:center;
    justify-content:space-around;
    flex-direction:column;
`

const Title = styled.h1`
    width:60%;
`

const Content = styled.p`
    width:60%;
`

const StatContainer = styled.div`
    width:60%;
    display:flex;
    align-items:center;
    justify-content:space-between;
`

const RightContainer = styled.div`
    height:100%;
    position:relative;

`

const Image = styled.img`
    object-fit:cover;
    height:auto;
    width:100%;

`

const Overlay = styled.div`
    position:absolute;
    top:0;
    bottom:0;
    left:0;
    right:0;
    margin:0 auto;
    background-color:hsl(277, 64%, 61%);
    mix-blend-mode: multiply;
`


const StatsPreviewCard = () => {
    return (
        <Container>
            <Wrapper>
                <LeftContainer>
                    <Title>Get insights that help your business grow.</Title>
                    <Content>
                        Discover the benefits of data analytics and make better decisions regarding revenue, customer 
                        experience, and overall efficiency.
                    </Content>
                    <StatContainer>
                        <Stat value="10k+" attribute="COMPANIES" />
                        <Stat value="314" attribute="TEMPLATES" />
                        <Stat value="12M+" attribute="QUERIES" />
                    </StatContainer>
                </LeftContainer>
                <RightContainer>
                    <Image src="/assets/StatsPreviewCard/image-header-desktop.jpg" alt="image"/>
                    <Overlay/>
                </RightContainer>
            </Wrapper>
        </Container>
    )
}

export default StatsPreviewCard
