import React from 'react'
import styled from 'styled-components';

const Container = styled.div`
    width:325px;
    height: 400px;
    border-radius:10px;
    cursor:pointer;
    background-color:#bbc9cd;
    transition:0.2s ease transform;
    box-shadow: 0px 1px 16px -1px rgba(0,0,0,0.75);
    -webkit-box-shadow: 0px 1px 16px -1px rgba(0,0,0,0.75);
    -moz-box-shadow: 0px 1px 16px -1px rgba(0,0,0,0.75);
    margin:20px;

    :hover{
        transform:scale(1.1);
        box-shadow: 0px 1px 16px 2px rgba(0,0,0,0.75);
        -webkit-box-shadow: 0px 1px 16px 2px rgba(0,0,0,0.75);
        -moz-box-shadow: 0px 1px 16px 2px rgba(0,0,0,0.75);
    }
`

const ChallengeImageContainer = styled.div`
    width:325px;
    height:240px;
`

const ChallengeImage = styled.img`
    width:100%;
    height:100%;
    object-fit:cover;
    border-top-left-radius:10px;
    border-top-right-radius:10px;

    
`

const ChallengeDetails = styled.div`
    padding:20px;
    display:flex;
    align-items:center;
    justify-content:center;
    flex-direction:column;
`

const Title = styled.h3`
    font-weight:500;
    color:#135d66;
    margin-bottom:5px;
`

const Description = styled.p`
    font-size:13px;
    line-spacing: 1.5;
    color:#388993;
`

const Solutiontile = (props) => {
    return (
        <Container>
            <ChallengeImageContainer>
                <ChallengeImage src={props.challengeImage} alt={props.challengeName}/>
            </ChallengeImageContainer>
            <ChallengeDetails>
                <Title>{props.challengeName}</Title>
                <Description>{props.challengeDesc}</Description>
            </ChallengeDetails>
        </Container>
    )
}

export default Solutiontile
