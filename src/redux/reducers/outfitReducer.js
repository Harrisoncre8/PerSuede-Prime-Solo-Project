// Store data from server to outfitReducer
const outfitReducer = (state = [],action) => {
    switch (action.type) {
      case 'SET_OUTFITS':
        return [...action.payload]
      default:
        return state;
    }
  };
  
export default outfitReducer;