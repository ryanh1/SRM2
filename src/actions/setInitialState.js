import {startSetLists} from './lists';
import {startSetFriends} from './friends';
import {startSetEvents} from './events';

const setInitialState = () => {
  return (dispatch, getState) => {
    console.log('start setInitialState');
    dispatch(startSetLists());
    dispatch(startSetFriends());
    return dispatch(startSetEvents());
  }
}

export default setInitialState;
