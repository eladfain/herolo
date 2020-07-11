import React from 'react'

import styled from 'styled-components'

import {connect} from 'react-redux';
import weather from "../store/weatherSlice";

import CityAutocomplete from "./CityAutocomplete";

import WeatherReport from "./WeatherReport";
const AutocompleteWrapper=styled.div`

`

const LocationWeatherWrapper=styled.div`
position:relative;
`
const WeatherReportWrapper=styled.div`
margin:auto;
position:absolute;
width:40vw;
left:10vw;
border-style: solid;
padding:10px;
`


const LocationWeather=()=>{
   

    

    return (
        <LocationWeatherWrapper>
            <AutocompleteWrapper>
              <CityAutocomplete/>
            </AutocompleteWrapper>
            <WeatherReportWrapper>
               <WeatherReport/>
                
            </WeatherReportWrapper>
        </LocationWeatherWrapper>
    )
}

const mapStateToProps = (state) =>{
    return{
       current:state.weatherSlice.currentWeather,
       favorites:state.weatherSlice.favorites
    }
} 
const mapDispatchToProps=(dispatch)=> {
    return { 
        addFavorite:(key)=>{dispatch(weather.actions.addFavorite(key))},
        removeFavorite:(key)=>{dispatch(weather.actions.removeFavorite(key))}
     }
  }
export default connect(mapStateToProps,mapDispatchToProps)(LocationWeather);