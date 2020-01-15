import React, { useEffect } from 'react';
import {useDispatch, useSelector} from 'react-redux';

export default function OutfitsPage(){
  let dispatch = useDispatch();
  let data = useSelector(state => state.outfits);

  // Sending action to sagas to GET images 
  // and dispatch action on page load
  useEffect(() => {
    dispatch({type: 'GET_OUTFITS'})
    }, [dispatch]);

  return(
    <div>
      <p>Outfits Page</p>
        {data.map( image => {
          return(
            <div key={image.id}>
              <img alt="Fashionable clothing" width="400" height="400" src={image.url}/>
            </div>
          )
        })}
      <button>Generate New Outfits</button>
  </div>
  )
}
