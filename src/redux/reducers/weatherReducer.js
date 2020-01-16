// Store data from server to outfitReducer
const weatherReducer = (state = {},action) => {
    switch (action.type) {
      case 'SET_WEATHER':
        return action.payload
      default:
        return state;
    }
  };
  
export default weatherReducer;