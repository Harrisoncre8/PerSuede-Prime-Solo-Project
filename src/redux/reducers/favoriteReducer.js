// Store data from server to favoriteReducer
const favoriteReducer = (state = [], action) => {
    switch (action.type) {
      case 'SET_FAVS':
        return [...action.payload];
      default:
        return state;
    }
  };
  
export default favoriteReducer;