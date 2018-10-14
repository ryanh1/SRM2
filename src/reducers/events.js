const eventsReducerDefaultState = []

const eventsReducer = (
  state = eventsReducerDefaultState, action
) => {
  switch (action.type) {
    case 'ADD_EVENT':
      return [
        ...state,
        action.event
      ]
    case 'REMOVE_EVENT':
      console.log(`Inside events reducer`);
      return state.filter( ({id}) => {
        return id != action.id
      })
    case 'SET_EVENTS':
      console.log('Inside set_events reducer');
      return action.events;
    // case 'EDIT_EVENT':
    //   return state.map( (event) => {
    //     if (event.id === action.id) {
    //       return {
    //         ...event,
    //         action.updates
    //       }
    //     } else {
    //       return event;
    //     };
    //   });
    default:
      return state;
  }
}

export default eventsReducer;
