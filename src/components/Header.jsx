import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom';
const HeaderWrapper=styled.div`
border-style: solid;
display:flex;
border-radius:5px;
`

const PHeader=styled.p`

`

const LinkHeader=styled.div`
top:15px;
padding-left:5px;
position: absolute;
right: 15px;
display:flex;
flex-wrap:wrap;
`
const LinkWrapper=styled.div`
margin:5px;
`
const Header=()=>{

    return(
        <HeaderWrapper>
            <PHeader>Herolo Weather Task</PHeader>
            <LinkHeader>
            <LinkWrapper>
            <Link to="/">Home </Link>
            </LinkWrapper>
            <LinkWrapper>
            <Link to="/favorites">Favorites </Link>
            </LinkWrapper>  
                
            </LinkHeader>
        </HeaderWrapper>
    )
}

export default Header;