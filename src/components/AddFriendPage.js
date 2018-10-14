import React from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';

import AddFriendForm from './AddFriendForm.js';
import { startAddFriend } from '../actions/friends'

const AddFriendPage = (props) => (
  <AddFriendForm onSubmit={(friend) => {
        console.log('Passed in props.dispatch(startAddFriend(friend)) to onSubmit');
        props.dispatch(startAddFriend(friend));
        // props.history.push('/');
      }}/>
);

export default connect()(AddFriendPage);
