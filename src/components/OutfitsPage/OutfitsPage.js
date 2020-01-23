import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import HeartCheckbox from 'react-heart-checkbox';
import './OutfitsPage.css'

export default function OutfitsPage(){
  // Using hooks for sagas and redux
  let dispatch = useDispatch();
  let outfitData = useSelector(state => state.outfits);
  let gotWeather = useSelector(state => state.watcher)
  let weatherData = useSelector( state => state.weather.main);
  let zipCode = useSelector(state => state.user.zip_code);

  // Using hooks to destructure stepper and checked array in state
  const [activeStep, setActiveStep] = useState(0);
  const [checked, setCheck] = useState();
  let [imageID, setImageID] = useState();

  // Handles click on heart component
  const heartStatus = () => {
    setCheck(!checked);
    setImageID(imageID = outfitData[activeStep].id);
  }

  // Function will dispatch a payload based
  // on weather data from API
  function sortWeather(){
    if( weatherData && weatherData.temp !== undefined ){
      let temperature = weatherData && weatherData.temp;
      let season = NaN;
      if(temperature <= 200 && temperature >= 70){
        season = 1;
        }
      else if(temperature <= 50 && temperature >= 30){
        season = 2;
        }
      else if(temperature <= 30 && temperature >= -200){
        season = 3;
        }
      else if(temperature <= 70 && temperature >= 50){
        season = 4;
        }
      if(season !== NaN){
        dispatch({type: 'GET_OUTFITS', payload: season});
        }
      }
  };

  // Sending action to sagas to GET weather 
  // and dispatch action on page load
  useEffect(() => {
    dispatch({type: 'GET_WEATHER', payload: zipCode});
    // Once weather data is retreived from API
    // send action to sagas to GET outfits
    sortWeather();
    }, [dispatch, gotWeather, zipCode]);

  // Handle image click in stepper
  const handleNext = () => {
    setActiveStep(prevActiveStep => prevActiveStep + 1);
    if(activeStep > 3){
      setActiveStep(0)
    }
  };
  
  // On click, generates new outfits
  const newOutfit = () => {
    sortWeather()
  };

  // Conditional render outfit images from reducer
  function renderOutfits(){
    let copyOutfit = [...outfitData];
    return(
      copyOutfit.length > 0 && activeStep < copyOutfit.length ? 
      <img src={copyOutfit[activeStep].url}
           alt="Fashionable outfit"
           onClick={handleNext}/> : ''
    )
  }
  return(
    <section className="container">
      <div className="topDiv">
          {renderOutfits()}
          <HeartCheckbox imageID={imageID} checked={checked} onClick={heartStatus} tabindex="0" />
      </div>
      <div className="bottomDiv">
        <h3>Today's Forcast</h3>
        <h4>Current: {weatherData && weatherData.temp}°F</h4>
        <h4>High: {weatherData && weatherData.temp_max}°F</h4>
        <h4>Low: {weatherData && weatherData.temp_min}°F</h4>
        <button onClick={newOutfit}>Generate New Outfits</button>
      </div>
  </section>
  )
}