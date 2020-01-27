import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import FavoritesItem from '../FavoritesItem/FavoritesItem';
import './FavoritesPage.css';

export default function FavoritesPage(){
  // Using hooks for sagas and redux
  let dispatch = useDispatch();
  let favData = useSelector(state => state.favorite);
  let userData = useSelector(state => state.user);

  useEffect(() => {
    let userID = userData && userData.id;
    dispatch({type: 'GET_FAVS', payload: userID})
  }, [userData, dispatch]);

  return(
    <div className="fav">
      <h2>Favorites Page</h2>
      {favData.map((item, i) => {
        return (
          <FavoritesItem key={i} url={item.url} imageID={item.outfits_id}/>
        )
      })}
    </div>
  )
}

