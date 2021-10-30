import React from 'react'
import styled from 'styled-components'

const AmountFilter = ({setPriceArray}) => {

    const handleOnChange = (event) => {
        setPriceArray(priceArray => {
            return({
                ...priceArray,
                [event.target.name]: parseInt(event.target.value)
            })
        })
    }

    return (
        <AmountDiv>
            <label>Amount</label>
            <PriceDiv>
                <InputSearch type="number" placeholder="min" min="0" name="min" onChange={handleOnChange}/>
                -
                <InputSearch type="number" placeholder="max" min="0" name="max" onChange={handleOnChange}/>
            </PriceDiv>
        </AmountDiv>
    )
}

const PriceDiv = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`

const InputSearch = styled.input`
    width: 30%;
`

const AmountDiv = styled.div`
    margin-top: 10px;
`

export default AmountFilter
