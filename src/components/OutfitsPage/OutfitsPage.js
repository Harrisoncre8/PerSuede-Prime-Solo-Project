import React, { useEffect } from 'react';
import {useDispatch, useSelector, userEffect} from 'react-redux';

export default function OutfitsPage(){
  let dispatch = useDispatch();

  // Sending action to sagas to GET images
  function outfits(){
    dispatch({type: 'GET_OUTFITS'})
  }

  // Dispatch the action on page load
  useEffect(() => {
    // Update the document title using the browser API
    document.title = outfits();
  });

  return(
    <div>
      <p>Outfits Page</p>
      <div>
        <img width="400" height="400" src="https://n.nordstrommedia.com/id/sr3/a0032f51-5f5a-4ef9-8730-60a9a6a936fa.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196&dpr=2" alt="An outfit from the PerSuede database!"/>
      </div>
      <button>Generate New Outfits</button>
  </div>
  )
}
