import { useState, useEffect } from 'react';
import {WEATHER_KEY} from "../constants/constants";
function useFiveDayWeather(key){
    const [weather,setWeather] =useState({});
    useEffect(()=>{
            if(typeof key!=="undefined"){
                let fetchUrl=`https://dataservice.accuweather.com/forecasts/v1/daily/5day/${key}?apikey=${WEATHER_KEY}&metric=true`;
                fetch(fetchUrl).then(r=>r.json()).then(data=>setWeather(data));
            }
       
        
    },[key]);

    return weather;
}

export default useFiveDayWeather;