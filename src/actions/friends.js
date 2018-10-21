import uuid from 'uuid';
import database from '../firebase/firebase';
// import lengthOfList from '../selectors/lengthOfList';

// ADD_FRIEND
const addFriend = (friend) => ({
  type: 'ADD_FRIEND',
  friend
});

//dispatch addFriend
export const startAddFriend = ({
  id = "",
  firstName = "",
  lastName = "",
  priority = 0,
  orderInList = 0,
  events = []
} = {}) => {
  return (dispatch, getState) => {
    const friend = {
      id: id === "" ? uuid() : id,
      // orderInList: lengthOfList(priority),
      firstName,
      lastName,
      priority,
      orderInList,
      events,
    }
    return database.ref(`friends/${friend.id}`).update(friend).then(
      dispatch(addFriend(friend))
    ).catch(
      (e) => {console.log('Error saving friend: ', e)}
    );
    console.log('dispatched startAddFriend');
  };
};


// REMOVE_FRIEND
const removeFriend = (id) => ({
  type: 'REMOVE_FRIEND',
  id
});

// dispatch removeFriend
export const startRemoveFriend = (id) => {
  console.log(`Inside startRemoveFriend with id ${id}`);
  return (dispatch, getState) => {
    return database.ref(`friends/${id}`).remove().then(() => {
      dispatch(removeFriend(id));
    });
  }
}

export const editFriend = (id, updates) => ({
  type: 'EDIT_FRIEND',
  id,
  updates
});

export const startEditFriend = (id, updates) => {
  return (dispatch, getState) => {
    database.ref(`friends/${id}`).update(updates).then(() => {
      dispatch(editFriend(id, updates));
    });
  };
};

const setFriends = (friends) => ({
  type: 'SET_FRIENDS',
  friends
});

export const startSetFriends = () => {
  return (dispatch, getState) => {
    return database.ref(`friends`).once('value').then(
      (snapshot) => {
        const friends = [];
        snapshot.forEach(
          (childSnapshot) => {
            friends.push(childSnapshot.val());
          }
        );
      dispatch(setFriends(friends));
    });
  };
};
