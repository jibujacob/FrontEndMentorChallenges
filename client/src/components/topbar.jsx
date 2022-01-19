import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    width:100vw;
    height:70px;
    position:sticky;
    top:0;
    display:flex;
    align-items:center;
    justify-content:space-between;
    font-family: 'Manrope', sans-serif;
    background-color:#d3e1e3;
    z-index:999;
    padding:50px;

    @media only screen and (max-width:450px){
        padding:0;
    }

`

const Wrapper = styled.div`
    padding:50px;
    display:flex;
    width:100%;
    align-items:center;
    justify-content:space-between;

    @media only screen and (max-width:450px){
        padding:20px;
    }

`

const Title = styled.span`
    font-weight:700;
    color:#135d66;
    margin:30px 0;
    letter-spacing:1px;
    font-size:22px;

`

const Span = styled.span`
    display:flex;
    align-items:center;
    justify-content:flex-end;
    font-size:24px;
    /* right:0;
    position:absolute; */
    cursor:pointer;
    padding:10px;
    color:black;
`

const Topbar = () => {
    return (
        <Container>
            <Wrapper>
                <Title>Frontend Mentor Challenges</Title>
                <Span><a href="https://github.com/jibujacob/FrontEndMentorChallenges" 
                        rel="noreferrer"
                    target="_blank">
                        <i className="fab fa-github"></i>
                    </a>         
                </Span>
            </Wrapper>
        </Container>
    )
}

export default Topbar
