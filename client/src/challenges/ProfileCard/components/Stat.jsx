import React from 'react'
import styled from "styled-components";

const StatContainer = styled.div`
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;

`

const StatValue = styled.h3`
    margin-bottom:5px;
`

const StatAttribute = styled.p`
    color:hsl(0, 0%, 59%);
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
