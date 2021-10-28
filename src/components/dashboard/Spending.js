import React from 'react'
import styled from 'styled-components'

const Spending = ({spending}) => {
    return (
        <CardDiv>
            <div>
                {spending.description}
            </div>
            <div>
                {spending.amount}
            </div>
            <div>
                {spending.date}
            </div>
            <div>
                {spending.category}
            </div>
        </CardDiv>
    )
}

const CardDiv = styled.div`
    display: flex,
    width: 200px,
`

export default Spending
