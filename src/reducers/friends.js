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
      return state.filter( ({id}) => {
        return id != action.id
      })
    case 'EDIT_FRIEND':
      return state.map((friend) => {
        if (friend.id === action.id) {
          console.log('updates: ',JSON.stringify(action.updates));
          return {
            ...friend,
            ...action.updates
          }
        } else {
          return friend;
        }
      })
    case 'SET_FRIENDS':
      return action.friends;
    default:
      return state;
  }
}

export default friendsReducer;
