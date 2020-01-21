import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import './OutfitsPage.css'

// Material UI stepper styling
const useStyles = makeStyles(theme => ({
  root: {
    maxWidth: 400,
    flexGrow: 1,
  },
  header: {
    display: 'flex',
    alignItems: 'center',
    height: 50,
    paddingLeft: theme.spacing(4),
    backgroundColor: theme.palette.background.default,
  },
  img: {
    height: 255,
    maxWidth: 400,
    overflow: 'hidden',
    display: 'block',
    width: '100%',
  },
}));

export default function OutfitsPage(){
  // Using hooks for sagas and redux
  let dispatch = useDispatch();
  let outfitData = useSelector(state => state.outfits);
  let weatherData = useSelector( state => state.weather.main);
  let zipCode = useSelector(state => state.user.zip_code);

  // Using hooks for stepper index in local state
  const classes = useStyles();
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
      <img className={classes.img}
      src={copyOutfit[activeStep].url}
      alt="Fashionable outfit"
      onClick={handleNext}/> :
      ''
    )
  }
  
  return(
    <div className={classes.root}>
        <h3>Today's Forcast</h3>
        {/* <h4>High: {weatherData && weatherData.temp_max}°F</h4>
        <h4>Low: {weatherData && weatherData.temp_min}°F</h4> */}
        {renderOutfits()}
      <button onClick={newOutfit}>Generate New Outfits</button>
  </div>
  )
}