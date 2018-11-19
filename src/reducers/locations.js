const locationsReducerDefaultState = []

const locationsReducer = (
  state = locationsReducerDefaultState, action
) => {
  switch (action.type) {
    case 'ADD_LOCATION':
      return [
        ...state,
        action.location
      ]
    case 'REMOVE_LOCATION':
      return state.filter( (location) => {
        return location.value != action.value
      })
    case 'TOGGLE_LOCATION':
      return state.map((location) => {
        if (location.value === action.value) {
          const selected = !location.selected;
          return {
            ...location,
            selected
          }
        } else {
          return location;
        }
      })
    case 'SET_LOCATIONS':
      return action.locations;
    default:
      return state;
  }
}

export default locationsReducer;
