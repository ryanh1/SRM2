const accountReducerDefaultState = {}

const accountReducer = (
  state = accountReducerDefaultState, action
) => {
  switch (action.type) {
    case 'ADD_ACCOUNT':
      return action.account
    case 'SET_ACCOUNT':
      return action.account;
    case 'EDIT_ACCOUNT':
      return {
        ...state,
        ...action.updates
      }
    default:
      return state;
  }
}

export default accountReducer;
