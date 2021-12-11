import React from 'react'
import styled from 'styled-components'


const CheckBoxLabelCombo = ({category, onChangeHandler}) => {
    return (
        <DescDiv>
            <input type="checkbox" key={category.id} id={`${category.id}`} name={category.description} onChange={onChangeHandler}/>
            <DescLabel for={`${category.id}`}>{category.description}</DescLabel>
        </DescDiv>
    )
}

const DescDiv = styled.div`
display:flex;
`

const DescLabel = styled.label`
    font-size: 12px;
    cursor: pointer;
`

export default CheckBoxLabelCombo
