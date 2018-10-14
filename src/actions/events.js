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
    return database.ref(`events/${eventFull.id}`).set(eventFull).then(
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
    return database.ref(`events/${id}`).remove().then(
      dispatch(removeEvent(id))
    ).catch(
      (e) => {console.log('Error deleting event: ', e)}
    )
  }
}

// EDIT_EVENT
const editEVENT = (id, updates) => ({
  type: 'EDIT_EVENT',
  id,
  updates
});

const setEvents = (events) => ({
  type: 'SET_EVENTS',
  events
});

export const startSetEvents = () => {
  return (dispatch, getState) => {
    return database.ref(`events`).once('value').then(
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
