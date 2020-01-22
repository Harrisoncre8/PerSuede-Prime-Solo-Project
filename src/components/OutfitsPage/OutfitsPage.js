import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './OutfitsPage.css'

export default function OutfitsPage(){
  // Using hooks for sagas and redux
  let dispatch = useDispatch();
  let outfitData = useSelector(state => state.outfits);
  let weatherData = useSelector( state => state.weather.main);
  let zipCode = useSelector(state => state.user.zip_code);

  // Using hooks for stepper index in local state
  const [activeStep, setActiveStep] = React.useState(0);

  // Sending action to sagas to GET images 
  // and dispatch action on page load
  useEffect(() => {
    dispatch({type: 'GET_OUTFITS'});
    // dispatch({type: 'GET_WEATHER', payload: zipCode});
    }, [dispatch, zipCode]);

  // Handle image click in stepper
  const handleNext = () => {
    setActiveStep(prevActiveStep => prevActiveStep + 1);
    if(activeStep > 3){
      setActiveStep(0)
    }
  };
  
  // On click, generates new outfits
  const newOutfit = () => {
    dispatch({type: 'GET_OUTFITS'});
  }

  // Renders outfit images from reducer
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
      </div>
      <div className="bottomDiv">
        <h3>Today's Forcast</h3>
        <h4>High: {weatherData && weatherData.temp_max}°F</h4>
        <h4>Low: {weatherData && weatherData.temp_min}°F</h4>
        <button onClick={newOutfit}>Generate New Outfits</button>
      </div>
  </section>
  )
}