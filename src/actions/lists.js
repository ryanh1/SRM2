import uuid from 'uuid';
import database from '../firebase/firebase';
import extractListsFromFriends from '../selectors/extractListsFromFriends';


const addList = (list) => ({
  type: 'ADD_LIST',
  list
});

export const startAddList = (priority) => {
  return (dispatch, getState) => {
    console.log(`In startAddList with priority ${priority}.`)
    const list = {priority, name: "List"}
    const uid = getState().auth.uid;
    return database.ref(`users/${uid}/lists/${priority}`).set(list).then(
      dispatch(addList(list))
    ).catch(
      (e) => {console.log('Error saving list: ', e)}
    )
  };
};

const removeList = (priority) => ({
  type: 'REMOVE_LIST',
  priority
});

export const startRemoveList = (priority) => {
  console.log(`Inside startRemoveList with priority ${priority}`);
  return (dispatch, getState) => {
    const uid = getState().auth.uid;
    return database.ref(`users/${uid}/lists/${priority}`).remove().then(
      dispatch(removeList(priority))
    ).catch(
      (e) => {console.log('Error removing list: ', e)}
    )
  }
}

// EDIT_LIST
const editList = (list) => ({
  type: 'EDIT_LIST',
  list
});

export const startEditList = (list) => {
  return (dispatch, getState) => {
    const uid = getState().auth.uid;
    database.ref(`users/${uid}/lists/${list.priority}`).update(list).then(() => {
      dispatch(editList(list));
    });
  };
};

const setLists = (lists) => ({
  type: 'SET_LISTS',
  lists
});

export const startSetLists = () => {
  return (dispatch, getState) => {
    const uid = getState().auth.uid;
    return database.ref(`users/${uid}/lists`).once('value').then(
      (snapshot) => {
        const lists = [];
        snapshot.forEach(
          (childSnapshot) => {
            lists.push(childSnapshot.val());
          }
        );
      dispatch(setLists(lists));
    });
  };
};
