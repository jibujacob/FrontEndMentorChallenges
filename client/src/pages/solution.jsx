import React from 'react';
import styled from 'styled-components';
import { Link } from "react-router-dom";

import Solutiontile from '../components/solutionTile';
import { Challenges } from '../data';

const Container = styled.div`
    width:100vw;
    min-height:100vh;
    padding:30px 50px;
    font-family: 'Manrope', sans-serif;
    background-color:#d3e1e3;
`

const Wrapper = styled.div`
    display:flex;
    align-items:center;
    justify-content:center;
    flex-direction:column;
`

const Title = styled.h2`
    font-weight:500;
    text-align:center;
    color:#135d66;
    margin:30px 0;
    letter-spacing:1px;
` 

const OptionContainer = styled.div`
    display:flex;
    align-items:center;
    justify-content:space-around;
    flex-wrap:wrap;
`
const Solution = () => {
    return (
        <Container>
            <Wrapper>
                <Title>Solutions</Title>
                <OptionContainer>
                    {Challenges.map(challenge => {
                        return (
                            <>
                                <Link to={"/challenge/"+challenge.id} style={{textDecoration:"none"}}>
                                    <Solutiontile 
                                        challengeImage={challenge.Image}
                                        challengeName={challenge.Name}
                                        challengeDesc={challenge.Description}
                                    />
                                </Link>
                            </>
                        )
                    })}
                </OptionContainer>
            </Wrapper>
        </Container>
    )
}

export default Solution
