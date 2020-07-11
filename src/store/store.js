import { createStore, combineReducers } from 'redux';
import weather from "./weatherSlice";
const reducer=combineReducers(
    {
      weatherSlice:  weather.reducer
    }
);

const store= createStore(reducer);

export default store;
