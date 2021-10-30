import React from 'react'
import styled from 'styled-components'
import DescriptionCheckBoxes from './FilterTools/DescriptionCheckBoxes'
import SearchBar from './FilterTools/SearchBar'
import AmountFilter from './FilterTools/AmountFilter'

const FilterBox = ({setSearchValue, categories, setCategoriesFilter, setPriceArray}) => {

    return (
        <FilterDiv>
            <h3>Filter</h3>
            <SearchBar setSearchValue={setSearchValue} />
            <AmountFilter setPriceArray={setPriceArray} />
            <DescriptionCheckBoxes categories={categories} setCategoriesFilter={setCategoriesFilter} />
        </FilterDiv>
    )
}

const FilterDiv = styled.div`
    box-shadow: 1px 1px 5px 3px rgb(132 133 132 / 40%);
    background-color: white;
    border-radius: 10px;
    margin-left: 20px;
    text-align: center;
    position: -webkit-sticky;
    position: sticky;
    top: 20px;
    margin-top: 20px;
    width: 225px;
    height: 370px;
`

export default FilterBox
