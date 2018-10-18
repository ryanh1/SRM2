import React from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import {Redirect} from 'react-router-dom'

import AddFriendPage from './AddFriendPage';
import EventList from './EventList.js';
import DeleteFriendOpenModalButton from './DeleteFriendOpenModalButton';
import {startRemoveFriend} from '../actions/friends';


const EditFriendPage = (props) => (
  <div className="text-center">
    <h2 className="m-2">Edit friend</h2>
    <div>
      <div className="text-center d-inline-flex border border-secondary mt-5 m-3 p-3">
        <AddFriendPage friend={props.friend}/>
      </div>
    </div>
    <div className="text-center d-inline-flex border border-secondary mt-5 m-3 p-3">
      <EventList friendID={props.friend.id}/>
    </div>
    <DeleteFriendOpenModalButton
      friend={props.friend}
      history={props.history}
      modalOpen={false}
    />
    {/* <button onClick={() => {
      props.dispatch(startRemoveFriend(props.friend.id));
      props.history.push('/');
    }}>Delete</button> */}
  </div>
);


const mapStateToProps = (state, props) => {
    return {
      friend: state.friends.find((friend) => friend.id === props.match.params.id)
    };
};

export default connect(mapStateToProps)(EditFriendPage);
