import React from 'react';
import styled from 'styled-components';

import {connect} from 'react-redux';
import weather from "../store/weatherSlice";
import useOneDayWeather from "../hooks/useOneDayWeather";
import useFiveDayWeather from "../hooks/useFiveDayWeather";
import FavoriteIcon from '@material-ui/icons/Favorite';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import { IconButton } from '@material-ui/core';
import WaetherCard from "./WeatherCard";
import {getDegrees,getIconUrl,getFutureDegrees} from "../util/util";
import ErrorBoundary from "./ErrorBoundary";
import {getDay,getLocation} from "../util/util";
import useGetLocation from "../hooks/useGetLocation";
const WeatherWrapper=styled.div`
position:relative;
left: 25%;
`
const IconWrapper=styled.div`

padding:2px;
padding-top:5px;
`
const ICON=styled.img`
margin-top : 9px;
`
const TodayWeatherHeader=styled.div`
display:flex;
`
 const FutureWeatherWrapper=styled.div`
 display:flex;
 position:relative;
margin:auto;
 `
const LikeButtonWrapper=styled.div`

`
const WeatherReport=({current,favorites,addFavorite,removeFavorite,setLocation,location,setCurrent})=>{
    
  //  useEffect(()=>{
        getLocation((position)=>{
            let lat=position.coords.latitude;
            let lon=position.coords.longitude;
            setLocation({lat:lat,lon:lon});
        });
  //  },[]);
    let geoCurrent=useGetLocation(location.lat,location.lon)
    let currentToUse=current;
    if(typeof currentToUse.key ==="undefined"){
        currentToUse=geoCurrent;
    }
    const toggleFavorite=()=>{
        
        if(favorites.filter(el=>currentToUse.key===el.key).length){
            removeFavorite(currentToUse.key)
        }
        else{
            addFavorite({key:currentToUse.key,name:currentToUse.name})
        }
    }
   
    const weatherToday=useOneDayWeather(currentToUse.key)[0];
    const weatherFiveDays=useFiveDayWeather(currentToUse.key); 
    let iconUrl,degrees,headLineText;
    try
    {
        
        degrees=getDegrees(weatherToday["Temperature"])
      
        headLineText=weatherToday["WeatherText"];
     iconUrl=getIconUrl(weatherToday);
    }
    catch(e){}
    return(
        <>
        <ErrorBoundary>
        <TodayWeatherHeader>
                <IconWrapper>
                        <ICON src={iconUrl}/>    
                    </IconWrapper>  
                    <div>
                    <h2>{currentToUse.name}</h2> 
                    <p>{degrees}</p>
                    </div> 
                    <LikeButtonWrapper>
                        <IconButton onClick={toggleFavorite} size="medium">
                            {favorites.filter(el=>currentToUse.key===el.key).length?<FavoriteIcon style={{ color: 'red',fontSize: 50 }}  />:<FavoriteBorderIcon style={{ fontSize: 50 }} />}
                        </IconButton>
                    </LikeButtonWrapper>
                  
                   
                </TodayWeatherHeader>
                <WeatherWrapper>
                       <h1>{headLineText}</h1>
                   </WeatherWrapper>
        </ErrorBoundary>
        <ErrorBoundary>
        <FutureWeatherWrapper>
                   
                    {typeof weatherFiveDays["DailyForecasts"]!=="undefined"? weatherFiveDays["DailyForecasts"].map((e)=><WaetherCard key={e["Date"]} icon={getIconUrl(e["Day"])} title={e["Date"]} degrees={getFutureDegrees(e["Temperature"])} titleFunc={getDay}/>):null}
                </FutureWeatherWrapper>
        </ErrorBoundary>
             
        </>
         
    )
}

const mapStateToProps = (state) =>{
    return{
       current:state.weatherSlice.currentWeather,
       favorites:state.weatherSlice.favorites,
       location:state.weatherSlice.location
    }
} 
const mapDispatchToProps=(dispatch)=> {
    return { 
        addFavorite:(key)=>{dispatch(weather.actions.addFavorite(key))},
        removeFavorite:(key)=>{dispatch(weather.actions.removeFavorite(key))},
        setLocation:location=>{dispatch(weather.actions.setLocation(location))},
        setCurrent:current=>dispatch(weather.actions.setCurrent(current))
     }
  }
export default connect(mapStateToProps,mapDispatchToProps)(WeatherReport);