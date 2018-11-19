import uuid from 'uuid';
import database from '../firebase/firebase';
import extractListsFromFriends from '../selectors/extractListsFromFriends';


const addList = (priority) => ({
  type: 'ADD_LIST',
  priority
});

export const startAddList = (priority) => {
  return (dispatch, getState) => {
    console.log(`In startAddList with priority ${priority}.`)
    const uid = getState().auth.uid;
    return database.ref(`users/${uid}/lists/${priority}`).set(priority).then(
      dispatch(addList(priority))
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
const editLIST = (id, updates) => ({
  type: 'EDIT_LIST',
  id,
  updates
});

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
