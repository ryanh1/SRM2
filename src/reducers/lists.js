const listsReducerDefaultState = []

const listsReducer = (
  state = listsReducerDefaultState, action
) => {
  switch (action.type) {
    case 'ADD_LIST':
      const reducedList = state.filter( ({id}) => {
        return id != action.id
      })
      return [
        ...reducedList,
        action.priority
      ]
    case 'REMOVE_LIST':
      return state.filter( ({id}) => {
        return id != action.id
      })
    case 'SET_LISTS':
      console.log('Inside set_lists reducer');
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
