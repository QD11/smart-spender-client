import React from 'react'
import styled from 'styled-components'

const SearchBar = ({setSearchValue}) => {
    
    return (
        <div>
            <label>Description</label>
            <SearchText type="text" placeholder="Search description..." onChange={(e) => setSearchValue(e.target.value)}/>
        </div>
    )
}

const SearchText = styled.input`
    width: 80%;
`

export default SearchBar
