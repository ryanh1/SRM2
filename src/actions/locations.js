import uuid from 'uuid';
import database from '../firebase/firebase';
import extractLocationsFromFriends from '../selectors/extractLocationsFromFriends';

const addLocation = (location) => ({
  type: 'ADD_LOCATION',
  location
});

export const startAddLocation = (value = "Unknown") => {
  return (dispatch) => {
    const location = {
      value: value === "" ? "Unknown" : value,
      selected: true
    }
    dispatch(addLocation(location))
  };
};

const removeLocation = (value) => ({
  type: 'REMOVE_LOCATION',
  value
});

export const startRemoveLocation = (value) => {
  return (dispatch) => {
    dispatch(removeLocation(value));
  }
}

export const toggleLocation = (value) => ({
  type: 'TOGGLE_LOCATION',
  value
});

export const startToggleLocation = (value) => {
  return (dispatch) => {
    dispatch(toggleLocation(value));
  };
};

const setLocations = (locations) => ({
  type: 'SET_LOCATIONS',
  locations
});

export const startSetLocations = () => {
  return (dispatch, getState) => {
    const uid = getState().auth.uid;
    return database.ref(`users/${uid}/friends`).once('value').then(
      (snapshot) => {
        const friends = [];
        snapshot.forEach(
          (childSnapshot) => {
            friends.push(childSnapshot.val());
          }
        );
        const locationValues = extractLocationsFromFriends(friends);
        const locations = locationValues.map( (val) => {
          return {value: val, selected: true}
        })
      dispatch(setLocations(locations));
    });
  };
};
