const modesReducerDefaultState = {
  searchMode: false,
  addFriendMode: true
};

const modesReducer = (
  state = modesReducerDefaultState, action
) => {
  switch (action.type) {
    case 'TOGGLE_SEARCH_MODE':
      return {
        ...state,
        searchMode: !state.searchMode
      };
    case 'TOGGLE_ADD_FRIEND_MODE':
      return {
        ...state,
        addFriendMode: !state.addFriendMode
      };
    case 'SET_MODES':
      return {
        ...state,
        ...action.modes
      }
    default:
      return state;
  }
}

export default modesReducer;
