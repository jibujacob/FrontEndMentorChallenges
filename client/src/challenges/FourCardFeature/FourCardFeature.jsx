import React from 'react';
import styled from "styled-components";
import Card from './components/Card';

const Container = styled.div`
    font-family: 'Poppins', sans-serif;
    background-color:hsl(0, 0%, 98%);
    display:flex;
    align-items:center;
    justify-content:center;
    /* padding:50px 70px; */
    width:100vw;
    min-height:100vh;
`

const Wrapper = styled.div`
    display:flex;
    align-items:center;
    justify-content:space-between;
    flex-direction:column;
    padding:30px;
    width:90%;
    height:90%;

    @media only screen and (max-width:1050px){
        margin-top:50px;

    }

`

const Top = styled.div`
    display:flex;
    align-items:center;
    justify-content:center;
    flex-direction:column;
    margin-bottom:40px;
`

const Title = styled.h1`
    font-weight:200;
    color:hsl(234, 12%, 34%);

    @media only screen and (max-width:1050px){
        font-size:22px;
    }

`

const SubTitle = styled.h1`
    font-weight:600;
    color:hsl(234, 12%, 34%);
    margin-bottom:10px;

    @media only screen and (max-width:1050px){
        font-size:22px;
    }

`

const Content = styled.p`
    font-size:14px;
    color:hsl(229, 6%, 66%);
    width:60%;
    text-align:center;
    line-height:1.5;

    @media only screen and (max-width:1050px){
        width:100%;
    }
`


const Bottom = styled.div`
    display:flex;

    @media only screen and (max-width:1050px){
        flex-direction:column;
        align-items:center;
        justify-content:center;
    }

`

const Left = styled.div`
    flex:1;
    display:flex;
    align-items:center;
    justify-content:center;
    flex-direction:column;
`

const Center = styled.div`
    flex:1;
    display:flex;
    align-items:center;
    justify-content:center;
    flex-direction:column;
`

const Right = styled.div`
    flex:1;
    display:flex;
    align-items:center;
    justify-content:center;
    flex-direction:column;
`


const FourCardFeature = () => {
    return (
        <Container>
            <Wrapper>
                <Top>
                    <Title>Reliable, efficient delivery</Title>
                    <SubTitle>Powered by Technology</SubTitle>
                    <Content>
                        Our Artificial Intelligence powered tools use millions of project data points 
                        to ensure that your project is successful
                    </Content>
                </Top>
                <Bottom>
                    <Left>
                        <Card
                            color="hsl(180, 62%, 55%)"
                            title="Supervisor"
                            content="Monitors activity to identify project roadblocks"
                            img="/assets/FourCardFeature/icon-supervisor.svg"
                        />
                    </Left>
                    <Center>
                        <Card
                            color="hsl(0, 78%, 62%)"
                            title="Team Builder"
                            content="Scans our talent network to create the optimal team for your project"
                            img="/assets/FourCardFeature/icon-team-builder.svg"
                        />
                        <Card
                            color="hsl(34, 97%, 64%)"
                            title="Karma"
                            content="Regularly evaluates our talent to ensure quality"
                            img="/assets/FourCardFeature/icon-karma.svg"
                        />
                    </Center>
                    <Right>
                        <Card
                            color="hsl(212, 86%, 64%)"
                            title="Calculator"
                            content="Uses data from past projects to provide better delivery estimates"
                            img="/assets/FourCardFeature/icon-karma.svg"
                        />
                    </Right>
                </Bottom>
            </Wrapper>
        </Container>
    )
}

export default FourCardFeature
