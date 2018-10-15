import React from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import {Redirect} from 'react-router-dom'

import AddFriendPage from './AddFriendPage';
import {startRemoveFriend} from '../actions/friends';

const EditFriendPage = (props) => (
  <div>
    <AddFriendPage friend={props.friend}/>
    <button onClick={() => {
      props.dispatch(startRemoveFriend(props.friend.id));
      props.history.push('/');
    }}>Delete</button>
  </div>
);


const mapStateToProps = (state, props) => {
    return {
      friend: state.friends.find((friend) => friend.id === props.match.params.id)
    };
};

export default connect(mapStateToProps)(EditFriendPage);
