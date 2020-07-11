import React from 'react';

import './App.css';
import { Route, Switch }from 'react-router-dom'
import LocationWeather from "./components/LocationWeather";
import Favorite from "./components/Favorite";
import Header from "./components/Header";
import styled from 'styled-components'
const AppWrapper=styled.div`
margin-left: auto;
margin-right: auto;
width:60vw;
position: relative;
height:100vh;
`
function App() {
  return (
    <AppWrapper>
      <Header/>
      <Switch>
      <Route exact path="/" component={LocationWeather}/>
      <Route path="/favorites" component={Favorite}/>
      </Switch>
    </AppWrapper>
    
    
   
  );
}

export default App;
