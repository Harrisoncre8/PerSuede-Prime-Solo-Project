// Store data from API to weatherReducer
const watcherReducer = (state = {},action) => {
    switch (action.type) {
      case 'CHECK_WEATHER':
        return null;
      default:
        return state;
    }
  };
  
export default watcherReducer;