import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import HeartCheckbox from 'react-heart-checkbox';
import './OutfitsPage.css'

export default function OutfitsPage(){
  // Using hooks for sagas and redux
  let dispatch = useDispatch();
  let outfitData = useSelector(state => state.outfits);
  let gotWeather = useSelector(state => state.watcher);
  let userData = useSelector(state => state.user);
  let weatherData = useSelector( state => state.weather.main);

  // Setting local state and setState functions using hooks
  const [activeStep, setActiveStep] = useState(0);
  const [checked, setCheck] = useState();
  let [imageID, setImageID] = useState();

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
  // and dispatch action on page load based on weather data.
  // Checks heart on page load if heartStatus is true.
  useEffect(() => {
    let zipCode = userData.zip_code;
    dispatch({type: 'GET_WEATHER', payload: zipCode});
    sortWeather();
    }, [dispatch, userData, gotWeather]);

  // Global variable to be used with heart click handlers
  // let heartStatus = outfitData[activeStep] && outfitData[activeStep].heart_status;
  let heartStatus = outfitData[activeStep] && outfitData[activeStep].heart_status;

  useEffect(() => {
    if(heartStatus === true){
      setCheck(heartStatus)
    } else {
      setCheck(false);
    }
  }, [outfitData, heartStatus]);

  // Handle image click in image stepper
  const handleStepper = () => {
    setActiveStep(prevActiveStep => prevActiveStep + 1);
    if(activeStep > 3){
      setActiveStep(0)
    }
    if(heartStatus){
      setCheck(heartStatus)
    } else {
      setCheck(false)
    }
  };

  // Handles heart icon click dispatch to change
  // heart status of selected image
  const handleHeart = () => {
    let userID = userData.id;
    setImageID(imageID = outfitData[activeStep].id);
    console.log('BOOYAH', imageID, userID);
    if(!heartStatus){
      setCheck(heartStatus)
      dispatch({type: 'HEART_STATUS', payload: {id: imageID, status: true, user: userID}});
      }
    else {
      console.log('UNLIKE THISSSSSS', imageID, userID);
      setCheck(false)
      dispatch({type: 'UNHEART_STATUS', payload: {id: imageID, user: userID}});
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
           onClick={handleStepper}/> : ''
    )
  }
  return(
    <section className="container">
      <div className="topDiv">
          {renderOutfits()}
          <div className="heart">
          <HeartCheckbox  imageID={imageID} checked={checked} onClick={handleHeart} tabindex="0" />
          </div>
      </div>
      <div className="bottomDiv">
        <div className="textDiv">
          <h3>Hello, {userData.name}!</h3>
          <h4>Today's Forcast</h4>
          <h4>Current: {weatherData && weatherData.temp}°F</h4>
          <h4>High: {weatherData && weatherData.temp_max}°F</h4>
          <h4>Low: {weatherData && weatherData.temp_min}°F</h4>
          <button size="small" variant="contained" className="generateBtn" 
          onClick={newOutfit}>Generate New Outfits</button>
        </div>
      </div>
  </section>
  )
}