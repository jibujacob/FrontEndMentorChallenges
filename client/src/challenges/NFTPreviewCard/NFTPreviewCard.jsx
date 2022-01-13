import styled from "styled-components";

const Container = styled.div`
    width: 100vw;
    height:100vh;
    display:flex;
    align-items:center;
    justify-content:center;
    background-color:hsl(217, 54%, 11%);
    font-family: 'Outfit', sans-serif;
`

const Wrapper = styled.div`
    background-color:hsl(216, 50%, 16%);
    padding:20px;
    border-radius:10px;
`

const Top = styled.div`
    color:white;
    margin-bottom:10px;
`

const ImageContainer = styled.div`
    position:relative;
`

const Image = styled.img`
    max-width:300px;
    max-height:300px;
    border-radius:5px;
    cursor:pointer;
    transition:0.5s ease;
    backface-visibility:hidden;
    opacity:1;

    :hover{
        opacity:0.3;

    }
`

const OverlayImageContainer = styled.div`
    transition: .5s ease;
    opacity:0;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    opacity: 0;
    width: 300px;
    margin: 0 auto;
    border-radius:5px;
    background-color: hsl(178, 100%, 50%);
    cursor: pointer;
    display: flex;
    align-items:center;
    justify-content:center;
    :hover{
        opacity:0.7;
    }
`

const OverlayImage = styled.img``


const Body = styled.div`
    color:white;
    margin-bottom:10px;
`

const Title = styled.h2`
    margin: 20px 0;
    font-size:18px;
    font-weight: 600;
    color:hsl(0, 0%, 100%);
    cursor:pointer;
    transition:0.5s ease;

    :hover{
        color:hsl(178, 100%, 50%)
    }
`

const Content = styled.p`
    width:300px;
    margin: 20px 0;
    font-size:18px;
    font-weight:300;
    color:hsl(215, 51%, 70%);
`

const Info = styled.div`
    display:flex;
    align-items:center;
    justify-content:space-between;
    margin: 20px 0;
`

const CostInfo = styled.div`
    display:flex;
    align-items:center;
    justify-content:center;
`

const NFTImage = styled.img`

`
const NFTCost = styled.span`
    margin-left:5px;
    fonst-size:18px;
    font-weight:600;
    color:hsl(178, 100%, 50%)
`
const TimeInfo = styled.div`
    display:flex;
    align-items:center;
    justify-content:center;
`

const ClockImage = styled.img`

`

const ClockText = styled.span`
    margin-left:5px;
    fonst-size:18px;
    font-weight:300;
    color:hsl(215, 51%, 70%);
`

const Divider = styled.hr`
    margin: 20px 0;
    border:none;
    border-bottom:1px solid hsl(215, 32%, 27%)
`
const Bottom = styled.div`
    margin: 20px 0 10px;
    color:white;
    
`

const BottomInfo = styled.div`
    display:flex;
    align-items:center;
    justify-content: flex-start;
`

const ProfileImage = styled.img`
    width:30px;
    height:30px;
    border-radius:50%;
    border:1px solid hsl(0, 0%, 100%);
`

const ProfileDetail = styled.p`
    margin-left:15px;
    font-size:16px;
    font-weight:300;
    color:hsl(215, 51%, 70%);
`

const ProfileName = styled.span`
    color:hsl(0, 0%, 100%);
    cursor:pointer;
    transition:0.5s ease;

    :hover{
        color:hsl(178, 100%, 50%)
    }
`

const NFTPreviewCard = () => {
    return (
        <Container>
            <Wrapper>
                <Top>
                    <ImageContainer>
                        <Image src="/assets/NFTPreviewCard/image-equilibrium.jpg" alt="NFTPreviewImage"/>
                        <OverlayImageContainer>
                            <OverlayImage src="/assets/NFTPreviewCard/icon-view.svg" alt="visible_image"/>
                        </OverlayImageContainer>
                    </ImageContainer>
                </Top>
                <Body>
                    <Title>
                        Equilibrium #3429
                    </Title>
                    <Content>
                        Our Equilibrium collection promotes balance and calm.
                    </Content>
                    <Info>
                        <CostInfo>
                            <NFTImage src="/assets/NFTPreviewCard/icon-ethereum.svg" alt="NFT_Image"/>
                            <NFTCost>0.041 ETH</NFTCost>
                        </CostInfo>
                        <TimeInfo>
                            <ClockImage src="/assets/NFTPreviewCard/icon-clock.svg" alt="" />
                            <ClockText>3 days left</ClockText>
                        </TimeInfo>
                    </Info>
                </Body>
                <Divider/>
                <Bottom>
                    <BottomInfo>
                        <ProfileImage src="/assets/NFTPreviewCard/image-avatar.png" alt="Profile_Img"/>
                        <ProfileDetail>Creation of <ProfileName>Jules Wyvern</ProfileName></ProfileDetail>
                    </BottomInfo>
                </Bottom>
            </Wrapper>
        </Container>
    )
}

export default NFTPreviewCard
