import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    width:320px;
    border-radius:5px;
    border:none;
    border-top:4px solid ${props=>props.color};
    margin:15px;
    margin-bottom:15px;
    background-color:white;
    box-shadow: 1px 9px 25px -13px rgba(0,0,0,0.72);
    -webkit-box-shadow: 1px 9px 25px -13px rgba(0,0,0,0.72);
    -moz-box-shadow: 1px 9px 25px -13px rgba(0,0,0,0.72);
`

const Wrapper = styled.div`
    padding:30px;

`

const Title = styled.h3`
    color:hsl(234, 12%, 34%);
    font-weight:600;
    margin-bottom:10px;
`

const Content = styled.p`
    color:hsl(229, 6%, 66%);
    font-size:12px;
    width:80%;
    line-height:1.7;
    margin-bottom:30px;
`

const ImageContainer = styled.div`
    display:flex;
    align-items: center;
    justify-content:flex-end;
`

const Image = styled.img`

`

const Card = (props) => {
    return (
        <Container color={props.color}>
            <Wrapper>
                <Title>{props.title}</Title>
                <Content>{props.content}</Content>
                <ImageContainer>
                    <Image src={props.img} alt={props.title}/>
                </ImageContainer>
            </Wrapper>
        </Container>
    )
}

export default Card
