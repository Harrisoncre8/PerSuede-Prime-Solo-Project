import React from 'react';
import { useDispatch, useSelector} from 'react-redux';
import './FavoritesItem.css';

export default function FavoritesItem(props){

// Using hooks to get data from sagas and redux
let dispatch = useDispatch();
let userData = useSelector(state => state.user);

// On click, delete image by id and refresh page
const handleDelete = () => {
    let userID = userData && userData.id;
    dispatch({type: 'UNHEART_STATUS', payload: {id: props.imageID, user: userID}});
    dispatch({type: 'GET_FAVS', payload: userID});
}
    return(
        <div className="favItem">
            <img src={props.url}/>
            <button className="removeBtn" onClick={handleDelete}>Delete Outfit</button>
        </div>
    )
}