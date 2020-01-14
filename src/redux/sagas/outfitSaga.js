import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

// worker Saga: will be fired on "GET_OUTFITS" action
function* getOutfit() {
  try {
      const response = yield axios.get('/api/outfit');
      yield put({ type: 'SET_OUTFITS', payload: response.data})
  } catch (error) {
    alert('Sorry, something went wrong while getting outfits')
    console.log('Error getting outfits in saga', error);
  }
}

function* outfitSaga() {
  yield takeLatest('GET_OUTFITS', getOutfit);
}

export default outfitSaga;