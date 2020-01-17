import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

// worker Saga: will be fired on "GET_WEATHER" action
function* getWeather(action) {
    let zipCode = action.payload
  try {
      const response = yield axios.get(`/api/weather/${zipCode}`);
      yield put({ type: 'SET_WEATHER', payload: response.data})
  } catch (error) {
    alert('Sorry, something went wrong while getting weather data')
    console.log('Error getting weather in saga', error);
  }
}

function* weatherSaga() {
  yield takeLatest('GET_WEATHER', getWeather);
}

export default weatherSaga;