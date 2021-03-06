import {startSetLists} from './lists';
import {startSetFriends} from './friends';
import {startSetEvents} from './events';
import {startSetAccount} from './account';
import {startSetLocations} from './locations';
import {startSetModes} from './modes';



const setInitialState = () => {
  return (dispatch, getState) => {
    console.log('start setInitialState');
    dispatch(startSetLists());
    dispatch(startSetFriends());
    dispatch(startSetAccount());
    dispatch(startSetLocations());
    dispatch(startSetModes());
    return dispatch(startSetEvents());
  }
}

export default setInitialState;
