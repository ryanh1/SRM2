import database from '../firebase/firebase';


const toggleSearchMode = () => ({
  type: 'TOGGLE_SEARCH_MODE'
});

export const startToggleSearchMode = () => {
  return (dispatch) => {
    dispatch(toggleSearchMode())
  };
};

const toggleAddFriendMode = () => ({
  type: 'TOGGLE_ADD_FRIEND_MODE'
});

export const startToggleAddFriendMode = (updates) => {
  return (dispatch, getState) => {
    const uid = getState().auth.uid;
    return database.ref(`users/${uid}/modes`).update(updates).then(
      dispatch(toggleAddFriendMode())
    ).catch(
      (e) => {console.log('Error updating AddFriendMode state: ', e)}
    )
  }
};

const setModes = (modes) => ({
  type: 'SET_MODES',
  modes
});

export const startSetModes = () => {
  return (dispatch, getState) => {
    const uid = getState().auth.uid;
    return database.ref(`users/${uid}/modes`).once('value').then(
      (snapshot) => {
        const modes = {};
        snapshot.forEach(
          (childSnapshot) => {
            modes[childSnapshot.key] = childSnapshot.val();
          }
        );
      dispatch(setModes(modes));
    });
  };
};
