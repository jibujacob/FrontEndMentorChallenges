import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    width:100vw;
    height:70px;
    position:sticky;
    top:0;
    display:flex;
    align-items:center;
    justify-content:center;
    font-family: 'Manrope', sans-serif;
    background-color:#d3e1e3;
    z-index:999;
`

const Wrapper = styled.div`
    padding:10px;
`

const Title = styled.span`
    font-weight:700;
    color:#135d66;
    margin:30px 0;
    letter-spacing:1px;
    font-size:22px;
    text-align:center;
`

const Topbar = () => {
    return (
        <Container>
            <Wrapper>
                <Title>Frontend Mentor Challenges</Title>
            </Wrapper>
        </Container>
    )
}

export default Topbar
