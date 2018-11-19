const listsReducerDefaultState = []

const listsReducer = (
  state = listsReducerDefaultState, action
) => {
  switch (action.type) {
    case 'ADD_LIST':
      const reducedList = state.filter( (priority) => {
        return priority != action.priority
      })
      const completeList = [
        ...reducedList,
        action.priority
      ]
      return completeList.sort()
    case 'REMOVE_LIST':
      return state.filter( (priority) => {
        return priority != action.priority
      })
    case 'SET_LISTS':
      return action.lists;
    // case 'EDIT_LIST':
    //   return state.map( (list) => {
    //     if (list.id === action.id) {
    //       return {
    //         ...list,
    //         action.updates
    //       }
    //     } else {
    //       return list;
    //     };
    //   });
    default:
      return state;
  }
}

export default listsReducer;
