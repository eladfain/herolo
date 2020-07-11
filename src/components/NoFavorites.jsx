import React from 'react'
import styled from 'styled-components'
const Wrapper=styled.div`
margin: 0;
    position: absolute;
    top: 50%;
    left: 50%;
    margin-right: -50%;
    transform: translate(-50%, -50%);
`
const NoFavorites=()=>{
    return(
        <Wrapper>
            <h1>No Favorites Selected</h1>
        </Wrapper>
    )
}

export default NoFavorites;