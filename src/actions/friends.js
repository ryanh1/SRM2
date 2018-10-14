import uuid from 'uuid';

// ADD_FRIEND
const addFriend = (friend) => ({
  type: 'ADD_FRIEND',
  friend
});

//dispatch addFriend
export const startAddFriend = ({
  firstName = "",
  lastName = "",
  priority = 0,
  events = []
} = {}) => {
  return (dispatch, getState) => {
    dispatch(addFriend({
      id: uuid(),
      firstName,
      lastName,
      priority,
      events
    }))
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
    dispatch(removeFriend(id));
  }
}
