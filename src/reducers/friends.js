const friendsReducerDefaultState = []

const friendsReducer = (
  state = friendsReducerDefaultState, action
) => {
  switch (action.type) {
    case 'ADD_FRIEND':
      return [
        ...state,
        action.friend
      ]
    case 'REMOVE_FRIEND':
      console.log(`Inside friends reducer`);
      return state.filter( ({id}) => {
        return id != action.id
      })
    case 'SET_FRIENDS':
      console.log('Inside set_friends reducer');
      return action.friends;
    // case 'EDIT_FRIEND':
    //   return state.map( (friend) => {
    //     if (friend.id === action.id) {
    //       return {
    //         ...friend,
    //         action.updates
    //       }
    //     } else {
    //       return friend;
    //     };
    //   });
    default:
      return state;
  }
}

export default friendsReducer;
