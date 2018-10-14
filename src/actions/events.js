import uuid from 'uuid';

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
    dispatch(addEvent(eventFull));
  };
};

const removeEvent = (priority) => ({
  type: 'REMOVE_EVENT',
  priority
});

export const startRemoveEvent = (priority) => {
  console.log(`Inside startRemoveEvent with priority ${priority}`);
  return (dispatch, getState) => {
    dispatch(removeEvent(priority));
  }
}

// EDIT_EVENT
const editEVENT = (id, updates) => ({
  type: 'EDIT_EVENT',
  id,
  updates
});
