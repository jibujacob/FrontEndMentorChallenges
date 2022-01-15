import React, { useState } from 'react';
import styled from "styled-components";

const Container = styled.div`
    width:100vw;
    min-height:100vh;
    display:flex;
    align-items:center;
    justify-content:center;
    background-color:hsl(210, 46%, 95%);
    font-family: 'Manrope', sans-serif;
`

const Wrapper = styled.div`
    min-height:360px;
    padding:10px;
    display:flex;
    align-items:center;
    justify-content:center;
    max-width:750px;
    height: 300px;

    @media only screen and (max-width:640px){
        flex-direction:column;
        min-height:600px;
    }
`

const Left = styled.div`
    background-image:url("/assets/ArticlePreview/drawers.jpg");
    background-size:cover;
    background-repeat:no-repeat;
    min-height:300px;
    min-width:320px;

    border-top-left-radius:10px;
    border-bottom-left-radius:10px;

    @media only screen and (max-width:640px){
        min-height:200px;
        border-bottom-left-radius:0;
        border-top-right-radius:10px;
    }
`

const Right = styled.div`
    padding: 30px;
    display:flex;
    flex-direction:column;
    background-color:white;
    height:300px;
    position:relative;
    justify-content:space-around;

    border-top-right-radius:10px;
    border-bottom-right-radius:10px;

    @media only screen and (max-width:640px){
        max-width:320px;
        border-top-right-radius:0;
        border-bottom-left-radius:10px;
        justify-content:initial;
    }

`

const Title = styled.h4`
    font-weight:700;
    color:hsl(217, 19%, 35%);
    margin-bottom:10px;
`

const Content = styled.p`
    font-size:14px;
    line-height:1.5;
    color:hsl(214, 17%, 51%);
    margin-bottom:10px;
`

const Bottom = styled.div `
    display:flex;
    align-items:center;
    justify-content:space-between;
    display:flex;

    @media only screen and (max-width:640px){
        display:${props => props.clicked};
    }

`
const ProfileContainer = styled.div`
    display:flex;
    align-items:center;   
`

const ProfileImage = styled.img`
    width:40px;
    height:40px;
    border-radius:50%;
    margin-right:10px;
`

const ProfileDetails = styled.div`
    display:flex;
    flex-direction:column;
`

const ProfileName = styled.span`
    font-size:12px;
    font-weight:700;
    color:hsl(217, 19%, 35%);
    margin-top:5px;
`

const Date = styled.span`
    font-size:14px;
    color:hsl(212, 23%, 69%);
`

const Share = styled.img`
    background-color: hsl(210, 46%, 95%);
    padding:10px;
    border-radius:50%;
    display:flex;
    align-items:center;
    justify-content:center;  
    cursor:pointer;
`

const Pointer = styled.div`

    position:absolute;
    bottom:90px;
    right:0;
    height:60px;
    width:60%;
    background-color:hsl(217, 19%, 35%);
    border-radius:10px;
    padding:0 30px;
    align-items:center;
    justify-content:space-between;
    display:none;
    display:${props => props.clicked};

    /* display:none; */
    @media only screen and (max-width:640px){
        display:${props => props.clicked};
        width:100%;
        border-radius:0;
        bottom:0;
        left:0;
        border-bottom-left-radius:10px;
        border-bottom-right-radius:10px;
    }
`

const PointerLeft = styled.div`
    display:flex;
    align-items:center;
    justify-content:space-between;
    width:100%;

    @media only screen and (max-width:640px){
        width:70%;
    }
`

const ShareIcon = styled.span`
    letter-spacing:5px;
    font-size:15px;
    font-weight:500;
    color:hsl(212, 23%, 69%);

`

const FbIcon = styled.img`
    cursor:pointer;
`

const TwIcon = styled(FbIcon)`

`

const PnIcon = styled(FbIcon)`

`

const Shicon= styled(FbIcon)`
    padding:10px;
    border-radius:50%;
    background-color: hsl(210, 46%, 95%);
    display:none;

    @media only screen and (max-width:640px){
        display:block;
    }
`


const ArticlePreview = () => {

    const [shareClicked,SetShareClicked] = useState(false);
    return (
        <Container>
            <Wrapper>
                <Left/>
                <Right>
                    <Title>
                        Shift the overall look and feel by adding these wonderful 
                        touches to furniture in your home
                    </Title>
                    <Content>
                        Ever been in a room and felt like something was missing? Perhaps 
                        it felt slightly bare and uninviting. I’ve got some simple tips 
                        to help you make any room feel complete.
                    </Content>
                    <Bottom clicked = {shareClicked ? "none" : "flex"}>
                        <ProfileContainer>
                            <ProfileImage src="/assets/ArticlePreview/avatar-michelle.jpg" alt="profileimg" />
                            <ProfileDetails>
                                <ProfileName>Michelle Appleton</ProfileName>
                                <Date>28 Jun 2020</Date>
                            </ProfileDetails>
                        </ProfileContainer>
                        <Share src="/assets/ArticlePreview/icon-share.svg" 
                            alt="shareimg"
                            onClick={()=>SetShareClicked(!shareClicked)}
                            />
                    </Bottom>
                    <Pointer clicked = {shareClicked ? "flex" : "none"}>
                        <PointerLeft>
                            <ShareIcon>SHARE</ShareIcon>
                            <FbIcon src="/assets/ArticlePreview/icon-facebook.svg" alt="fbicon"/>
                            <TwIcon src="/assets/ArticlePreview/icon-twitter.svg" alt="twicon"/>
                            <PnIcon src="/assets/ArticlePreview/icon-pinterest.svg" alt="pnicon"/>
                        </PointerLeft>
                        <Shicon src="/assets/ArticlePreview/icon-share.svg" 
                            alt="shicon"
                            onClick={()=>SetShareClicked(false)}
                            />
                    </Pointer>
                </Right>
            </Wrapper>
        </Container>
    )
}

export default ArticlePreview
