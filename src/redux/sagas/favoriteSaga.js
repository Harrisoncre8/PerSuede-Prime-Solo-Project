import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

// worker Saga: will be fired on 'HEART_STATUS' action
function* postStatus(action) {
    let imageID = action.payload.id
    console.log('WE IN THIS SAGAAAAAA', action.payload.status)
    try{
      yield axios.post(`api/favorite/${imageID}`, action.payload);
    } catch (error) {
      alert('Opps, something went wrong with your favorited outfit. Try again later.')
      console.log('Error with heart status in saga', error);
    }
  }

// worker Saga: will be fired on 'HEART_STATUS' action
function* deleteStatus(action) {
  let imageID = action.payload.id
  console.log('SAGA OF HEART CHANGE', action.payload)
  try{
    yield axios.delete(`api/favorite/${imageID}`, action.payload);
  } catch (error) {
    alert('Opps, something went wrong with your favorited outfit. Try again later.')
    console.log('Error with heart status in saga', error);
  }
}

// worker Saga: will be fired on 'GET_FAVS' action
function* getFavorites(action) {
    let userID = action.payload
    try {
      const response = yield axios.get(`/api/favorite/${userID}`);
      yield put({ type: 'SET_FAVS', payload: response.data});
    } catch (error) {
      alert('Sorry, something went wrong while getting favorite outfits')
      console.log('Error getting outfits in saga', error);
    }
  }

  function* favoriteSaga() {
    yield takeLatest('HEART_STATUS', postStatus);
    yield takeLatest('UNHEART_STATUS', deleteStatus);
    yield takeLatest('GET_FAVS', getFavorites);
}
  
  export default favoriteSaga;