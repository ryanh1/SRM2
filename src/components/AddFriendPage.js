import React from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import {history} from '../routers/AppRouter';


import AddFriendForm from './AddFriendForm.js';
import { startAddFriend } from '../actions/friends'
import { startAddList } from '../actions/lists'

const AddFriendPage = (props) => (
  <AddFriendForm
    friend={props.friend}
    onSubmit={(friend) => {
        console.log('Passed in props.dispatch(startAddFriend(friend)) to onSubmit');
        props.dispatch(startAddFriend(friend));
        props.dispatch(startAddList(friend.priority));
        history.push('/');
      }
    }
  />
);

export default connect()(AddFriendPage);
