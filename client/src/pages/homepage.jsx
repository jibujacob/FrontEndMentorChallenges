import React from 'react'
import styled from 'styled-components';

const Container = styled.div`
    width:100vw;
    height:100vh;
    display:flex;
    align-items:center;
    justify-content:center;
    background-image:url("/assets/Homepage/luke-chesser-pJadQetzTkI-unsplash.jpg");
    background-size:cover;
    background-repeat:no-repeat;
    font-family: 'Manrope', sans-serif;
`

const Wrapper = styled.div`
    padding:20px;
    display:flex;
    align-items:center;
    justify-content:center;
`

const Title = styled.h1`
    font-size:50px;
    font-weight: 500;
    color:white;
    text-align:center;
    letter-spacing:1px;
`

const Homepage = () => {
    return (
        <Container>
            <Wrapper>
                <Title>Frontend Mentor Challenges</Title>
            </Wrapper>
        </Container>
    )
}

export default Homepage
