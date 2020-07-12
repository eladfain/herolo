import { useState, useEffect } from 'react';
import {WEATHER_KEY} from "../constants/constants";

function useGetLocation(lat,lon){
    const [location,setLocation]=useState({});
    useEffect(()=>{
        if(typeof lat!=="undefined" && typeof lon!=="undefined"){
            let fetchUrl=`https://dataservice.accuweather.com/locations/v1/cities/geoposition/search?q=${lat},${lon}&apikey=${WEATHER_KEY}`;
        fetch(fetchUrl).then(r=>r.json()).then(data=>setLocation({key:data["Key"],name:data["EnglishName"]}))
        }
        
    },[lat,lon]);

    return location;
}

export default useGetLocation;