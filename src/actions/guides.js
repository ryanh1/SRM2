import uuid from 'uuid';
import database from '../firebase/firebase';

const incrementGuide = () => ({
  type: 'INCREMENT_GUIDE',
});

export const startIncrementGuide = (number) => {
  return (dispatch, getState) => {
    dispatch(incrementGuide(number))
  };
};

const editGuide = (number) => ({
  type: 'EDIT_GUIDE',
  number
});

export const startEditGuide = (number) => {
  return (dispatch, getState) => {
    dispatch(editGuide(number))
  };
};
