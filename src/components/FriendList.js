import React from 'react';
import ReactDOM from 'react-dom';
import {connect} from 'react-redux';

import FriendCard from './friendcard.js';
import selectFriendsByPriority from '../selectors/selectFriendsByPriority';

import DeleteListButton from './deleteListButton';


const FriendList = (props) => {
  var filteredFriends = selectFriendsByPriority(props.friends, props.priority);
  return (
    <div>
      <h2>List: {props.priority}</h2>
      <DeleteListButton priority={props.priority}/>
      {
        filteredFriends.length === 0 ? (
          <span>No friends.</span>
        ) : (
          filteredFriends.map( (friend) => {
            return (
              <div key={friend.id}>
                <FriendCard firstName={friend.firstName} lastName={friend.lastName} id={friend.id} key={friend.id} />
              </div>
            )
          })
        )
      }
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    friends: state.friends
  }
}

export default connect(mapStateToProps)(FriendList);
