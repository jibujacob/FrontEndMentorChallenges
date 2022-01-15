import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    display:flex;
    align-items:center;
    justify-content:center;
    background-color:hsl(300, 43%, 22%);
    border-radius:10px;
    font-size:15px;
    max-width:30%;
    margin-top:${props=>props.margintop}px;

    @media only screen and (max-width:900px){
        max-width:100%;
        margin-top:20px;
    }
`

const Wrapper = styled.div`
    display:flex;
    flex-direction:column;
    padding:30px;
`

const Top = styled.div`
    display:flex;
    align-items:center;
`

const ProfileImg = styled.img`
    width:40px;
    height:40px;
    border-radius:50%;
    margin-right:20px;
`

const ProfileDetails = styled.div`
    display:flex;
    flex-direction:column;
`

const ProfileName = styled.p`
    color:hsl(300, 24%, 96%);
    font-size:13px;
    font-weight:700;
    margin-bottom:5px;
`

const ProfileRole = styled.p`
    color:hsl(333, 80%, 67%);
    font-size:13px;
`

const Bottom = styled.div`
    margin-top:20px;
`

const Content = styled.div`
    color:hsl(300, 24%, 96%);
    font-size:12px;
    line-height:1.7;
`

const Review = (props) => {
    return (
        <Container margintop={props.margintop}>
            <Wrapper>
                <Top>
                    <ProfileImg src={props.profileImg} alt={props.profileName}/>
                    <ProfileDetails>
                        <ProfileName>{props.profileName}</ProfileName>
                        <ProfileRole>{props.profileRole}</ProfileRole>
                    </ProfileDetails>
                </Top>
                <Bottom>
                    <Content>
                        {props.review}
                    </Content>
                </Bottom>
            </Wrapper>    
        </Container>
    )
}

export default Review
