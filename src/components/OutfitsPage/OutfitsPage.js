import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import './OutfitsPage.css'

export default function OutfitsPage(){

  // Using hooks for sagas and redux
  let dispatch = useDispatch();
  let outfitData = useSelector(state => state.outfits);
  let weatherData = useSelector( state => state.weather.main);
  let zipCode = useSelector(state => state.user.zip_code);

  // Sending action to sagas to GET images 
  // and dispatch action on page load
  useEffect(() => {
    dispatch({type: 'GET_OUTFITS'});
    dispatch({type: 'GET_WEATHER', payload: zipCode});
    }, [dispatch, zipCode]);
  
  // On click, generates new outfits
  const newOutfit = () => {
    dispatch({type: 'GET_OUTFITS'});
  }

  return(
    <div id='grad'>
      <h1>Outfits Page</h1>
        <h3>Today's Forcast</h3>
        <h4>High: {weatherData && weatherData.temp_max}°F</h4>
        <h4>Low: {weatherData && weatherData.temp_min}°F</h4>
        {outfitData.map( image => {
          return(
            <div key={image.id}>
              <img alt="Fashionable clothing" width="400" height="400" src={image.url}/>
            </div>)})}
      <button onClick={newOutfit}>Generate New Outfits</button>
  </div>
  )
}