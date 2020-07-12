import { useState, useEffect } from 'react';
import {WEATHER_KEY} from "../constants/constants";
function useAutocomplete(term){
    const [citys,setCitys] =useState([]);
    useEffect(()=>{
      
        if(term.length){
            let fetchUrl=`https://dataservice.accuweather.com/locations/v1/cities/autocomplete?apikey=${WEATHER_KEY}&q=${term}`;
            fetch(fetchUrl).then(r=>r.json()).then(data=>setCitys(data));
        }
           
        
    },[term]);

    return citys;
}

export default useAutocomplete;