import React from 'react'
import styled from 'styled-components'
import CheckBoxLabelCombo from './CheckBoxLabelCombo'

const DescriptionCheckBoxes = ({categories, setCategoriesFilter}) => {

    const onChangeHandler = (event) => {
        setCategoriesFilter(categoriesFilter => {
            return({
                ...categoriesFilter,
                [event.target.name] : !categoriesFilter[event.target.name]
            })
        })
    }

    return (
        <CategoriesDiv>
                <CategoriesLabel>Categories</CategoriesLabel>
            <CategoriesCheckBox>
                {categories.map(category => <CheckBoxLabelCombo id={category.id} onChangeHandler={onChangeHandler} category={category}/>)}
            </CategoriesCheckBox>
        </CategoriesDiv>
    )
}

const CategoriesDiv = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 0px;
`

const CategoriesLabel = styled.label`
    margin-top: 5px;
`

const CategoriesCheckBox = styled.div`
display: flex;
flex-direction: column;
margin-left: 5px;
`

export default DescriptionCheckBoxes
