import { useState, useEffect } from 'react';
import {WEATHER_KEY} from "../constants/constants";

function useGetAllFavorites(favorites){
    const [favoritesWeather,setFavoritesWeather] = useState([]);
    const favoriteesKeys=favorites.map(e=>e.key);
    useEffect(()=>{
        const promiseArr=[];
        for(let f in favorites){
            ((favorite)=>{
                
                let key = favorites[favorite].key;
                let fetchUrl=`http://dataservice.accuweather.com/currentconditions/v1/${key}?apikey=${WEATHER_KEY}` ; 
                promiseArr.push(
                    fetch(fetchUrl).then(r=>r.json())
                )
            })(f);
        }
        Promise.all(promiseArr).then(data=>setFavoritesWeather(data));
    },[favorites]);
    return favoritesWeather;
}


export default useGetAllFavorites;