import React from 'react'
import styled from 'styled-components'
import {connect} from 'react-redux';
import useOneDayWeather from "../hooks/useOneDayWeather";
import {getDegrees,getIconUrl} from "../util/util";
import FavoriteCard from "./FavoriteCard";
import useGetAllFavorites from "../hooks/useGetAllFavorites";
import NoFavorites from "./NoFavorites";
import ErrorBoundary from "./ErrorBoundary";
const FavoriteWrapper=styled.div`
display:flex;
flex-wrap:wrap;
justify-content:center;
margin:20px;
`
const Favorite=({favorites})=>{
    const favoriteesKeys=favorites.map(e=>e.key);
    
    const favoritesWeather=useGetAllFavorites(favorites);
    return(
        <>
            <ErrorBoundary>
            {
                favorites.length>0?  <FavoriteWrapper>
           {favoritesWeather.map((e,i)=>{
                let weather=favoritesWeather[i][0];
                
                let degrees=getDegrees(weather["Temperature"])
                let iconUrl=getIconUrl(weather);
                return(
                    <FavoriteCard key={favorites[i].key} id={favorites[i].key} name={favorites[i].name} degrees={degrees} icon={iconUrl}/>
                )
           })}
       </FavoriteWrapper>:<NoFavorites/>
            }
            </ErrorBoundary>
           
        </>
     
    )
}


const mapStateToProps = (state) =>{
    return{
       favorites:state.weatherSlice.favorites
    }
} 
export default connect(mapStateToProps)(Favorite);