import {startSetLists} from './lists';
import {startSetFriends} from './friends';
import {startSetEvents} from './events';
import {startSetAccount} from './account';
import {startSetLocations} from './locations';


const setInitialState = () => {
  return (dispatch, getState) => {
    console.log('start setInitialState');
    dispatch(startSetLists());
    dispatch(startSetFriends());
    dispatch(startSetAccount());
    dispatch(startSetLocations());
    return dispatch(startSetEvents());
  }
}

export default setInitialState;
