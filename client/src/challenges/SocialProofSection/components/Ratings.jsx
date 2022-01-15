import React from 'react';
import styled from "styled-components";


const Container = styled.div`
    display:flex;
    align-items:center;
    justify-content:flex-start;
    padding:20px 30px;
    border-radius:10px;
    background-color:hsl(300, 24%, 96%);
    font-size:12px;
    font-weight:700;
    color:hsl(300, 43%, 22%);
    margin:10px 0;
    width:80%;
    margin-right:${props=>props.marginright}px;

    @media only screen and (max-width:900px){
        margin-right:0px;
        width:100%;
        flex-direction:column;
        align-items:center;
        justify-content:center;
    }

`

const Left = styled.div`
    display:flex;
    align-items:center;
    justify-content:center;

`
const Star = styled.img`
    margin:0 2px;
`

const Right = styled.div`
    margin-left:30px;
    display:flex;
    align-items:center;
    justify-content:center;

    @media only screen and (max-width:900px){
        margin-left:0;
        margin-top:20px;
    }
`

const Ratings = (props) => {
    return (
        <Container marginright={props.marginright}>
            <Left>
                <Star src="/assets/SocialProofSection/icon-star.svg" alt="star" />
                <Star src="/assets/SocialProofSection/icon-star.svg" alt="star" />
                <Star src="/assets/SocialProofSection/icon-star.svg" alt="star" />
                <Star src="/assets/SocialProofSection/icon-star.svg" alt="star" />
                <Star src="/assets/SocialProofSection/icon-star.svg" alt="star" />
            </Left>
            <Right>Rated {props.stars} Stars in {props.review}</Right>
        </Container>
    )
}

export default Ratings
