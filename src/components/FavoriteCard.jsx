import React from 'react'
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import {connect} from 'react-redux';
import weather from "../store/weatherSlice";
import WaetherCard from "./WeatherCard";
const CardWrapper=styled.div`


`

const FavoriteCard=({id,name,degrees,icon,setCurrent})=>{
    const navigate=()=>{
        setCurrent({key:id,name:name});
    }
    return(
        <CardWrapper>
            <Link to="/" onClick={navigate} >
            <WaetherCard title={name} degrees={degrees} icon={icon}/>
            </Link>
            
        </CardWrapper>
    )
}

const mapDispatchToProps=(dispatch)=> {
    return { 
        setCurrent:(key)=>dispatch(weather.actions.setCurrent(key))
     }
  }
export default connect(null,mapDispatchToProps)(FavoriteCard);