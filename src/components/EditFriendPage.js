import React from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';

import AddFriendForm from './AddFriendForm';
import {startRemoveFriend} from '../actions/friends';

const EditFriendPage = (props) => (
  <div>
    <div>id: {props.friend.id}, Name: {props.friend.firstName} {props.friend.lastName}</div>
    <button onClick={() => {props.dispatch(startRemoveFriend(props.friend.id))}}>Delete</button>
  </div>
);

const mapStateToProps = (state, props) => {
    return {
      friend: state.friends.find((friend) => friend.id === props.match.params.id)
    };
};

export default connect(mapStateToProps)(EditFriendPage);
