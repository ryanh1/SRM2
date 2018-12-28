const listsReducerDefaultState = []

const listsReducer = (
  state = listsReducerDefaultState, action
) => {
  switch (action.type) {
    case 'ADD_LIST':
      var listAlreadyExists = false;
      state.forEach( (list) => {
        if (list.priority == action.list.priority) {listAlreadyExists = true}
      })
      if (!listAlreadyExists) {
        const completeList = [
          ...state,
          action.list
        ]
        return completeList.sort()
      }
    case 'REMOVE_LIST':
      return state.filter( (list) => {
        return list.priority != action.priority
      })
    case 'SET_LISTS':
      return action.lists;
    case 'EDIT_LIST':
    return state.map((list) => {
      if (list.priority === action.list.priority) {
        return {
          ...list,
          ...action.list
        }
      } else {
        return list;
      }
    })
    default:
      return state;
  }
}

export default listsReducer;
