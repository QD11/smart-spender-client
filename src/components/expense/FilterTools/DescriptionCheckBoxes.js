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
                {categories.map(category => {
                    return(
                        <DescDiv>
                            <CheckBoxLabelCombo onChangeHandler={onChangeHandler} category={category}/>
                        </DescDiv>
                    )
                })}
            </CategoriesCheckBox>
        </CategoriesDiv>
    )
}

const DescDiv = styled.div`
display:flex;
`

const CategoriesDiv = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 10px;
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
