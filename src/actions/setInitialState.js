import {startSetLists} from './lists';
import {startSetFriends} from './friends';
import {startSetEvents} from './events';
import {startSetAccount} from './account';

const setInitialState = () => {
  return (dispatch, getState) => {
    console.log('start setInitialState');
    dispatch(startSetLists());
    dispatch(startSetFriends());
    dispatch(startSetAccount());
    return dispatch(startSetEvents());
  }
}

export default setInitialState;
