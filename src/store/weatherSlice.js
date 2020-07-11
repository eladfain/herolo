import { createSlice } from '@reduxjs/toolkit';

const weather=createSlice({
    name:"weatherSlice",
    initialState:{
        favorites:[],
        currentWeather:{},//key:"215854",name:"Tel Aviv"
        term:"",
        location:{}
    },
    reducers:{
        addFavorite:(state,action)=>{
            state.favorites.push(action.payload);
        },
        removeFavorite:(state,action)=>{
            let newFavorite=state.favorites.filter(e=>e.key!=action.payload);
            state.favorites=newFavorite;
        },
        setCurrent:(state,action)=>{
            state.currentWeather=action.payload;
        },
        setTerm:(state,action)=>{
            state.term=action.payload;
        },
        setLocation:(state,action)=>{
            state.location=action.payload;
        }
    }
    
});

export default weather;