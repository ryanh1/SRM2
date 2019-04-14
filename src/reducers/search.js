const searchReducerDefaultState = '';

const searchReducer = (
  state = searchReducerDefaultState, action
) => {
  switch (action.type) {
    case 'EDIT_SEARCH':
      return action.searchText;
    default:
      return state;
  }
}

export default searchReducer;
