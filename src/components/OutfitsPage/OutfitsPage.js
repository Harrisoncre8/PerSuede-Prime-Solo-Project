import React, { useEffect } from 'react';
import {useDispatch, useSelector} from 'react-redux';

export default function OutfitsPage(){
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

  return(
    <div>
      <p>Outfits Page</p>
        <p>{weatherData && weatherData.temp}</p>
        {/* {false ? <div>is true</div> : <div>is false </div>} */}
        {outfitData.map( image => {
          return(
            <div key={image.id}>
              <img alt="Fashionable clothing" width="400" height="400" src={image.url}/>
            </div>
          )
        })}
      <button>Generate New Outfits</button>
      <pre>{JSON.stringify(weatherData,null,2)}</pre>
  </div>
  )
}

// 