import uuid from 'uuid';
import database from '../firebase/firebase';


const addEvent = (event) => ({
  type: 'ADD_EVENT',
  event
});

export const startAddEvent = (event) => {
  return (dispatch, getState) => {
    const eventFull = {
      id: uuid(),
      ...event
    }
    console.log(`In startAddEvent. with ${JSON.stringify(event)}`);
    const uid = getState().auth.uid;
    return database.ref(`users/${uid}/events/${eventFull.id}`).set(eventFull).then(
      dispatch(addEvent(eventFull))
    ).catch( (e) => {
      (e) => {console.log('Error saving event: ', e)}
    });
  };
};

const removeEvent = (id) => ({
  type: 'REMOVE_EVENT',
  id
});

export const startRemoveEvent = (id) => {
  console.log(`Inside startRemoveEvent with id ${id}`);
  return (dispatch, getState) => {
    const uid = getState().auth.uid;
    return database.ref(`users/${uid}/events/${id}`).remove().then(
      dispatch(removeEvent(id))
    ).catch(
      (e) => {console.log('Error deleting event: ', e)}
    )
  }
}

export const editEvent = (id, updates) => ({
  type: 'EDIT_Event',
  id,
  updates
});

export const startEditEvent = (id, updates) => {
  return (dispatch, getState) => {
    const uid = getState().auth.uid;
    database.ref(`users/${uid}/events/${id}`).update(updates).then(() => {
      dispatch(editEvents(id, updates));
    });
  };
};

const setEvents = (events) => ({
  type: 'SET_EVENTS',
  events
});

export const startSetEvents = () => {
  return (dispatch, getState) => {
    const uid = getState().auth.uid;
    return database.ref(`users/${uid}/events`).once('value').then(
      (snapshot) => {
        const events = [];
        snapshot.forEach(
          (childSnapshot) => {
            events.push(childSnapshot.val());
          }
        );
      dispatch(setEvents(events));
    });
  };
};
