import { combineReducers } from 'redux';
import errors from './errorsReducer';
import favorite from './favoriteReducer';
import loginMode from './loginModeReducer';
import outfits from './outfitReducer';
import user from './userReducer';
import watcher from './watcherReducer';
import weather from './weatherReducer';

// rootReducer is the primary reducer for our entire project
// It bundles up all of the other reducers so our project can use them.
// This is imported in index.js as rootSaga

// Lets make a bigger object for our store, with the objects from our reducers.
// This is what we get when we use 'state' inside of 'mapStateToProps'
const rootReducer = combineReducers({
  errors, // contains registrationMessage and loginMessage
  favorite, // contains selected data
  loginMode, // will have a value of 'login' or 'registration' to control which screen is shown
  outfits, // contains data from outfits database
  user, // will have an id and username if someone is logged in
  watcher, // checks to confirm weather data is retreieved
  weather, // contains data from weather API
});

export default rootReducer;
