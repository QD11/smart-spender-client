import React from 'react'
import styled from 'styled-components'

const Spending = ({spending}) => {

    const formatDate = (string) => {
        const year = string.slice(0,4)
        const month = string.slice(5,7)
        const day = string.slice(8,10)
        return `${month}/${day}/${year}`
    }

    return (
        <CardDiv>
                <SpanDec>
                    {spending.description}
                </SpanDec>
                <SpanAmo>
                    ${spending.amount}
                </SpanAmo>
                <SpanDat>
                    {formatDate(spending.date)}
                </SpanDat>
                <SpanCat>
                    {spending.category}
                </SpanCat>
        </CardDiv>
    )
}

const CardDiv = styled.div`
    box-shadow: 1px 1px 5px 3px rgb(132 133 132 / 40%);
    background-color: white;
    border-radius: 10px;
    height: 70px;
    display: flex;
    align-items: center;
    width: 100%;
    margin-bottom: 25px;
`

const SpanDec = styled.span`
    margin-left: 1em;
    width:170px;
`

const SpanAmo = styled.span`
    margin-left: 2px;
    width:100px;
`

const SpanDat = styled.span`
    margin-left: 2px;
    width:150px;
`

const SpanCat = styled.span`
    margin-left: 2px;
    width:150px;
`



export default Spending
