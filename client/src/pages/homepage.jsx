import styled from "styled-components"

const Container = styled.div`
    height: calc(100vh - 50px);
    top:50px;
` 
const Wrapper = styled.div`
    padding:10px;
`
const Homepage = () => {
    return (
        <Container>
            <Wrapper>
                Homepage
            </Wrapper>
        </Container>
    )
}

export default Homepage
