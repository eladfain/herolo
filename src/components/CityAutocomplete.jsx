import React from 'react'
import TextField from '@material-ui/core/TextField';
import {Autocomplete} from '@material-ui/lab';
import {connect} from 'react-redux';
import useAutocomplete from "../hooks/useAutocomplete"; 
import weather from "../store/weatherSlice";
import ErrorBoundary from "./ErrorBoundary";
const CityAutocomplete=({term,setTerm,setCurrent})=>{
    const keyStroke=(e)=>{
        setTerm(e.target.value);
    }
    const autocompleteSubmit=(event,value)=>{
        let newCity=autocompleteOptions.filter(v=>v.LocalizedName===value);
        if(newCity.length){
            let newCurrent={key:newCity[0]["Key"],name:value};
            setCurrent(newCurrent);
        }
       
    }
    const autocompleteOptions=useAutocomplete(term);
    const options=autocompleteOptions.map((option) => option.LocalizedName);
    return(
        <ErrorBoundary>
        <Autocomplete
                    value={term}
                    
                    id="searchCity"
                    onChange={autocompleteSubmit}
                    options={options}
                    renderInput={(params) => (
                    <TextField onChange={keyStroke}  {...params} label="Search City" margin="normal" variant="outlined" />
                    )}
                />
        </ErrorBoundary>
          
    )
}

const mapStateToProps = (state) =>{
    return{
       term:state.weatherSlice.term  
    }
} 
const mapDispatchToProps=(dispatch)=> {
    return { 
        setTerm:(term)=>dispatch(weather.actions.setTerm(term)),
        setCurrent:(key)=>dispatch(weather.actions.setCurrent(key))
     }
  }

  export default connect(mapStateToProps,mapDispatchToProps)(CityAutocomplete);

