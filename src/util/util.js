import {ICON_URL} from "../constants/constants";
export function getDegrees(el,unit){
    if(typeof el !=="undefined"){
        let  degreeUnit=el["Metric"]["Unit"];
        let  degrees=el["Metric"]["Value"]+degreeUnit;
        return degrees;
    }    

    
    
}
export function getFutureDegrees(el){
   
    let min= el["Minimum"];
    let degrees=min["Value"]+min["Unit"].toLowerCase();
    return degrees;
}
export function getIconUrl(el){
    
   let icon = el["WeatherIcon"]||el["Icon"];
    if(icon<10){
        icon="0"+icon;
    }
   let iconUrl=ICON_URL.replace("${icon}",icon);
   return iconUrl;
}

export const getDay=(d)=>{
    let day=new Date(d).getDay();
    var weekday = new Array(7);
weekday[0] = "Sun";
weekday[1] = "Mon";
weekday[2] = "Tues";
weekday[3] = "Wed";
weekday[4] = "Thur";
weekday[5] = "Fri";
weekday[6] = "Sat";
return weekday[day];
}

export function getLocation(callback){
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(callback);
      } else {
        return "Geolocation is not supported by this browser.";
      }
}