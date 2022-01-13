import styled from "styled-components";

const Container = styled.div`
    height:50px;
    position:"sticky";
`

const Wrapper = styled.div`
    padding:10px;
    display: flex;
    align-items:center;
    justify-content:center;
`

const Title = styled.h1`
    font-weight:bold;
    color:#15023a;
    font-family: 'Roboto', sans-serif;
    /* font-size:24px; */
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
