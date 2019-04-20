const modesReducerDefaultState = {
  searchMode: false
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
    default:
      return state;
  }
}

export default modesReducer;
