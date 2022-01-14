import React from 'react';
import styled from 'styled-components';
import CarOption from './components/CarOption';

const Container = styled.div`
    width:100vw;
    min-height:100vh;
    display: flex;
    align-items:center;
    justify-content:center;
    background-color:hsl(0, 0%, 95%);
`

const Wrapper = styled.div`
    display:flex;
    margin:50px 20px;

    @media only screen and (max-width:700px){
        flex-direction:column;

    }
`

const ThreeColumnPreviewCard = () => {
    return (
        <Container>
            <Wrapper>
                <CarOption 
                    icon="/assets/3ColumnPreviewCard/icon-sedans.svg"
                    title="SEDANS"
                    content="Choose a sedan for its affordability and excellent fuel economy. Ideal for cruising in the city 
                        or on your next road trip."
                    bgcolor="hsl(31, 77%, 52%)"
                    position="left"
                />
                <CarOption 
                    icon="/assets/3ColumnPreviewCard/icon-suvs.svg"
                    title="SUVS"
                    content="Take an SUV for its spacious interior, power, and versatility. Perfect for your next family vacation 
                        and off-road adventures."
                    bgcolor="hsl(184, 100%, 22%)"
                />
                <CarOption 
                    icon="/assets/3ColumnPreviewCard/icon-luxury.svg"
                    title="LUXURY"
                    content="Cruise in the best car brands without the bloated prices. Enjoy the enhanced comfort of a luxury 
                        rental and arrive in style."
                    bgcolor="hsl(179, 100%, 13%)"
                    position="right"
                />
            </Wrapper>
        </Container>
    )
}

export default ThreeColumnPreviewCard
