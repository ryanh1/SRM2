import uuid from 'uuid';
import database from '../firebase/firebase';

// ADD_FRIEND
const addFriend = (friend) => ({
  type: 'ADD_FRIEND',
  friend
});

//dispatch addFriend
export const startAddFriend = ({
  id = '',
  firstName = "",
  lastName = "",
  priority = 0,
  events = []
} = {}) => {
  return (dispatch, getState) => {
    const friend = {
      id: !id == '' ? id : uuid(),
      firstName,
      lastName,
      priority,
      events
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
