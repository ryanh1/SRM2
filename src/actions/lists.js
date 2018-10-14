import uuid from 'uuid';

const addList = (priority) => ({
  type: 'ADD_LIST',
  priority
});

export const startAddList = (priority) => {
  return (dispatch, getState) => {
    console.log(`In startAddList with priority ${priority}.`)
    dispatch(addList(priority));
  };
};

const removeList = (priority) => ({
  type: 'REMOVE_LIST',
  priority
});

export const startRemoveList = (priority) => {
  console.log(`Inside startRemoveList with priority ${priority}`);
  return (dispatch, getState) => {
    dispatch(removeList(priority));
  }
}

// EDIT_LIST
const editLIST = (id, updates) => ({
  type: 'EDIT_LIST',
  id,
  updates
});
