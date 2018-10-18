import React from 'react';
import ReactDOM from 'react-dom';
import {connect} from 'react-redux';

import FriendCard from './friendcard.js';
import selectFriendsByPriority from '../selectors/selectFriendsByPriority';
// import DeleteListButton from './deleteListButton';
import DeleteListOpenModalButton from './DeleteListOpenModalButton';



const FriendList = (props) => {
  var filteredFriends = selectFriendsByPriority(props.friends, props.priority);
  return (
    <div className="m-3">
      <div className="d-flex justify-content-between">
        <h3 className="mr-5">List: {props.priority}</h3>
        {/* <DeleteListButton priority={props.priority}/> */}
        <DeleteListOpenModalButton className="ml-auto"
          priority={props.priority}
          modalOpen={false}
        />
      </div>
      <div>
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
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    friends: state.friends
  }
}

export default connect(mapStateToProps)(FriendList);
