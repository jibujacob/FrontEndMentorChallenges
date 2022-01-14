import React from 'react';
import styled from "styled-components";

const Container = styled.div`
    width:100vw;
    height:100vh;
    background-image:url("/assets/OrderSummaryCard/pattern-background-desktop.svg");
    background-repeat:no-repeat;
    background-color:hsl(225, 100%, 94%);
    display:flex;
    align-items:center;
    justify-content:center;
    font-family: 'Red Hat Display', sans-serif;

    @media only screen and (max-width:390px){
        background-image:url("/assets/OrderSummaryCard/pattern-background-mobile.svg");
    }

`

const Wrapper = styled.div`
    width:90vw;
    max-width:400px;
    border-radius:20px;
    background-color:white;

`

const Top = styled.div`
    width:100%;
`

const TopImage = styled.img`
    width:100%;
    
    height:auto;
    border-top-left-radius:20px;
    border-top-right-radius:20px;
`

const Bottom = styled.div`
    padding:40px;
    display:flex;
    align-items:center;
    justify-content:center;
    flex-direction:column;

`

const Title = styled.h2`
    font-weight:900;
    margin-bottom:20px;

`

const Content = styled.p`
    text-align:center;
    margin-bottom:20px;
    font-size:16px;
    color:hsl(224, 23%, 55%);
    line-height:1.5;
`
const PaymentWrapper = styled.div`
    width:100%;
`
const PaymentDetails = styled.div`
    display:flex;
    align-items:center;
    justify-content:space-between;
    background-color:hsl(225, 100%, 98%);
    border-radius:10px;
    margin-bottom:20px;
    padding:20px;
`
const Plan = styled.div`
    display:flex;
    align-items:center;
    justify-content:center;
`

const Icon = styled.img`
    margin-right:15px;
`

const PlanDetail = styled.div`

`

const PlanName = styled.p`
    font-size:16px;
    font-weight:700;
    margin-bottom:5px;
`

const PlanAmount = styled.p`
    color:hsl(224, 23%, 55%);;
    font-size:16px;
`

const ChangeLink = styled.p`
    font-size:12px;
    text-decoration:underline;
    cursor:pointer;
    color:hsl(245, 75%, 52%);
    transition:transform .2s ease;

    :hover{
        text-decoration:none;
        transform:scale(1.1);

    }

`

const PaymentButton = styled.button`
    width:100%;
    padding:10px;
    border-radius:10px;
    border:none;
    cursor: pointer;
    background-color:hsl(245, 75%, 52%);
    color:white;
    font-weight:700;
    margin-bottom:20px;
    -webkit-box-shadow: 0px 10px 27px -1px rgba(0,0,0,0.48); 
    box-shadow: 0px 10px 27px -1px rgba(0,0,0,0.48);
    transition:0.3s ease;

    :hover{
        opacity:0.7;
    }
`

const Cancel = styled.p`
    font-size:14px;
    color:hsl(224, 23%, 55%);
    font-weight:700;
    cursor:pointer;
    transition:0.2s ease color;

    :hover{
        color:black;
    }
`

const OrderSummaryCard = () => {
    return (
        <Container>
            <Wrapper>
                <Top>
                    <TopImage src="/assets/OrderSummaryCard/illustration-hero.svg" alt="Order_Image" />
                </Top>
                <Bottom>
                    <Title>Order Summary</Title>
                    <Content>
                        You can now listen to millions of songs, audiobooks, and podcasts on any 
                        device anywhere you like!
                    </Content>
                    <PaymentWrapper>
                        <PaymentDetails>
                            <Plan>
                                <Icon src="/assets/OrderSummaryCard/icon-music.svg" alt="music-icon"/>
                                <PlanDetail>
                                    <PlanName>Annual Plan</PlanName>
                                    <PlanAmount>&#x24;59.99/year</PlanAmount>
                                </PlanDetail>
                            </Plan>
                            <ChangeLink>Change</ChangeLink>
                        </PaymentDetails>
                    </PaymentWrapper>
                    <PaymentButton>Proceed to Payment</PaymentButton>
                    <Cancel>Cancel Order</Cancel>
                </Bottom>

            </Wrapper>    
        </Container>
    )
}

export default OrderSummaryCard
