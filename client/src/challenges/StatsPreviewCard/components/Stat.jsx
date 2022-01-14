import React from 'react'
import styled from "styled-components";

const StatContainer = styled.div`
    display:flex;
    flex-direction:column;
    justify-content:space-between;
    
`

const StatValue = styled.h3`
    color:hsl(0, 0%, 100%);
    margin-bottom:7px;
`

const StatAttribute = styled.p`
    font-family: 'Lexend Deca', sans-serif;
    color:hsla(0, 0%, 100%, 0.75);
    font-size:10px;
`

const Stat = ({value,attribute}) => {
    return (
        <StatContainer>
            <StatValue>{value}</StatValue>
            <StatAttribute>{attribute}</StatAttribute>
        </StatContainer>
    )
}

export default Stat
