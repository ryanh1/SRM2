import uuid from 'uuid';
import database from '../firebase/firebase';

const addAccount = (account) => ({
  type: 'ADD_ACCOUNT',
  account
});

export const startAddAccount = (uid, account) => {
    console.log(`In startAddAccount with account ${JSON.stringify(account)}.`)
    return database.ref(`users/${uid}/account`).set(account).catch(
      (e) => {console.log('Error saving account: ', e)}
    )
};

export const editAccount = (updates) => ({
  type: 'EDIT_ACCOUNT',
  updates
});

export const startEditAccount = (updates) => {
  return (dispatch, getState) => {
    const uid = getState().auth.uid;
    database.ref(`users/${uid}/account`).update(updates).then(() => {
      dispatch(editAccount(updates));
    });
  };
};
const setAccount = (account) => ({
  type: 'SET_ACCOUNT',
  account
});

export const startSetAccount = () => {
  return (dispatch, getState) => {
    const uid = getState().auth.uid;
    return database.ref(`users/${uid}/account`).once('value').then(
      (snapshot) => {
        const account = snapshot.val();
        dispatch(setAccount(account));
      }
    );
  };
};
