import React from 'react'
import styled from 'styled-components'

const SearchBar = ({setSearchValue}) => {
    
    return (
        <SearchDiv>
            <label>Description</label>
            <SearchText type="text" placeholder="Search description..." onChange={(e) => setSearchValue(e.target.value)}/>
        </SearchDiv>
    )
}

const SearchDiv = styled.div`
    margin-top: -15px;
`

const SearchText = styled.input`
    width: 80%;
`

export default SearchBar
