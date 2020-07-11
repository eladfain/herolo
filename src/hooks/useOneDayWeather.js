import { useState, useEffect } from 'react';
import {WEATHER_KEY} from "../constants/constants";
function useOneDayWeather(key){
    const [weather,setWeather] =useState({});
    useEffect(()=>{
             if(typeof key !=="undefined"&& key.length){
                let fetchUrl=`http://dataservice.accuweather.com/currentconditions/v1/${key}?apikey=${WEATHER_KEY}` ;
                fetch(fetchUrl).then(r=>r.json()).then(data=>setWeather(data));
            }
   
        
    },[key]);

    return weather;
}

export default useOneDayWeather;