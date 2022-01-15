import React from 'react';
import styled from "styled-components";
import Ratings from './components/Ratings';
import Review from './components/Review';

const Container = styled.div`
    width:100vw;
    min-height:100vh;
    display:flex;
    align-items:center;
    justify-content:center;
    font-family: 'Spartan', sans-serif;
    position:relative;
    overflow-x:hidden;

    @media only screen and (max-width:900px){

        flex-direction:column;
    }
`

const BackgroundImageTop = styled.img`
    position:absolute;
    top:0;
    left:0;
`

const BackgroundImageBottom = styled.img`
    position:absolute;
    bottom:0;
    right:0;
`

const Wrapper = styled.div`
    display:flex;
    align-items:center;
    justify-content:center;
    flex-direction:column;
    z-index:100;

    padding:100px;

    @media only screen and (max-width:900px){
        padding:100px;
        margin:50px 0;
    }

    @media only screen and (max-width:400px){
        padding:10px;
        margin:50px 0;
    }
`

const Top = styled.div`
    display:flex;
    align-items:center;
    justify-content:space-between;
    margin-bottom:20px;

    @media only screen and (max-width:900px){
       flex-direction:column;
       justify-content:center;
    }
`

const Left = styled.div`
    flex:1;
    display:flex;
    align-item:center;
    flex-direction:column;
    justify-content:flex-start;

    @media only screen and (max-width:900px){
        display:flex;
       flex-direction:column;
       justify-content:center;
       width:100%;
       padding:0 20px;
    }
`

const Title = styled.h1`
    font-weight:700;
    width:60%;
    margin-bottom:20px;
    font-size: 42px;
    color:hsl(300, 43%, 22%);

    @media only screen and (max-width:900px){
       text-align:center;
       font-size:28px;
       width:100%;
       padding:0 40px;
    }
`

const Content = styled.p`
    font-size:14px;
    font-weight:500;
    width:75%;
    line-height:1.5;
    color:hsl(303, 10%, 53%);

    @media only screen and (max-width:900px){
       text-align:center;
       width:100%;
    }
`

const Right = styled.div`
    flex:1;
    display:flex;
    flex-direction:column;
    align-items:flex-end;

    @media only screen and (max-width:900px){
       padding:0 20px;
       width:100%;
    }

`

const Bottom = styled.div`
    display:flex;
    align-items:center;
    justify-content:space-between;
    width:100%;

    @media only screen and (max-width:900px){
       flex-direction:column;
       justify-content:center;
       display:flex;
       align-items:center;
       padding:0 20px;
    }
`

const SocialProofSection = () => {
    return (
        <Container>
            <BackgroundImageTop src="/assets/SocialProofSection/bg-pattern-top-desktop.svg" alt=""/>
            <BackgroundImageBottom src="/assets/SocialProofSection/bg-pattern-bottom-desktop.svg" alt=""/>
            <Wrapper>
                <Top>
                    <Left>
                        <Title>
                            10,000+ of our users love our products.
                        </Title>
                        <Content>
                            We only provide great products combined with excellent customer service.
                            See what our satisfied customers are saying about our services.
                        </Content>
                    </Left>
                    <Right>
                        <Ratings stars="5" review="Reviews" marginright="100"/>
                        <Ratings stars="5" review="Report Guru" marginright="50"/>
                        <Ratings stars="5" review="BestTech" marginright="0"/>
                    </Right>
                </Top>
                <Bottom>
                    <Review
                        margintop="0"
                        profileImg="/assets/SocialProofSection/image-colton.jpg"
                        profileName="Colton Smith"
                        profileRole="Verified Buyer"
                        review='"We needed the same printed design as the one we had ordered a week prior.
                                Not only did they find the original order, but we also received it in time.
                                Excellent!"'
                    />
                    <Review
                        margintop="30"
                        profileImg="/assets/SocialProofSection/image-irene.jpg"
                        profileName="Irene Roberts"
                        profileRole="Verified Buyer"
                        review='"Customer service is always excellent and very quick turn around. Completely
                            delighted with the simplicity of the purchase and the speed of delivery."'
                    />
                    <Review
                        margintop="60"
                        profileImg="/assets/SocialProofSection/image-anne.jpg"
                        profileName="Anne Wallace"
                        profileRole="Verified Buyer"
                        review='"Put an order with this company and can only praise them for the very high
                                standard. Will definitely use them again and recommend them to everyone!"'
                    />
                </Bottom>
            </Wrapper> 
        </Container>
    )
}

export default SocialProofSection
