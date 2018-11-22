const guidesReducerDefaultState = 0;

const guidesReducer = (
  state = guidesReducerDefaultState, action
) => {
  switch (action.type) {
    case 'EDIT_GUIDE':
      return action.number;
    case 'INCREMENT_GUIDE':
      return state + 1;
    default:
      return state;
  }
}

export default guidesReducer;
