const initialState = {
    selectedTimezones: [],
  };
  
  const rootReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'SELECT_TIMEZONE':
        return {
          ...state,
          selectedTimezones: [...state.selectedTimezones, action.payload],
        };
      default:
        return state;
    }
  };
  
  export default rootReducer;