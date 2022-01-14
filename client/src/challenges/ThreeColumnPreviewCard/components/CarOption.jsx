import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
    padding : 50px;
    background-color:${props=>props.bgcolor};
    display:flex;
    flex-direction:column;
    font-family: 'Lexend Deca', sans-serif;
    width:320px;
    height:500px;
    justify-content:space-between;
    
    border-top-left-radius: ${props => props.position ==="left"? 10 : 0}px;
    border-bottom-left-radius: ${props => props.position ==="left"? 10 : 0}px;

    border-top-right-radius: ${props => props.position ==="right"? 10 : 0}px;
    border-bottom-right-radius: ${props => props.position ==="right"? 10 : 0}px;

    @media only screen and (max-width:700px){
        border-radius:0;
        border-top-left-radius: ${props => props.position ==="left"? 10 : 0}px;
        border-top-right-radius: ${props => props.position ==="left"? 10 : 0}px;

        border-bottom-right-radius: ${props => props.position ==="right"? 10 : 0}px;
        border-bottom-left-radius: ${props => props.position ==="right"? 10 : 0}px;
        height:420px;
        
    }

`

const Top = styled.div`
    display:flex;
    flex-direction:column;
`

const IconContainer = styled.div`
    margin-bottom:30px;
`
const Icon = styled.img`

`

const Title = styled.h1`
    font-family: 'Big Shoulders Display', cursive;
    font-weight:700;
    color:hsl(0, 0%, 95%);
    margin-bottom:30px;
    font-size:36px;
`

const Content = styled.p`
    color:hsla(0, 0%, 100%, 0.75);
    font-size:15px;
    line-height:1.5;
`

const Bottom = styled.div`

`

const Button = styled.button`
    border:none;
    background-color:hsl(0, 0%, 95%);
    color: ${props=>props.textcolor};
    padding:15px 30px;
    border-radius:50px;
    font-size:15px;
    cursor:pointer;
    font-weight:300;
    transition: 0.2s ease;

    @media only screen and (max-width:700px){
        margin:25px 0;
    }

    :hover{
        background-color: ${props=>props.textcolor};
        color:hsl(0, 0%, 95%);
        border:1px solid hsl(0, 0%, 95%);
    }
`

const CarOption = (props) => {

    return (
        <Wrapper bgcolor={props.bgcolor} position={props.position || null}>
            <Top>
                <IconContainer>
                    <Icon src={props.icon} alt={props.title}/>
                </IconContainer>
                <Title>{props.title}</Title>
                <Content>{props.content}</Content>
                
            </Top>
            <Bottom>
                <Button textcolor={props.bgcolor}>Learn More</Button>
            </Bottom>
        </Wrapper>
    )
}

export default CarOption
