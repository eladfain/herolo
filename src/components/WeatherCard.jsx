import React from 'react'
import styled from 'styled-components';
const CardWrapper=styled.div`
border-style: double;
padding:2px;
margin:2px;
text-align: center;
border-radius:4px;
`
const WaetherCard=({title,degrees,icon,titleFunc})=>{
    let cardTitle=title;
    if(typeof titleFunc==="function"){
        cardTitle=titleFunc(cardTitle);
    }
    return(
        <CardWrapper>
            <p>{cardTitle}</p>
            <p>{degrees}</p>
            <img src={icon}/>
        </CardWrapper>
    )
}

export default WaetherCard;