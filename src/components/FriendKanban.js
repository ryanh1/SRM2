import React from 'react';
import ReactDOM from 'react-dom';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';

import FriendList from './FriendList.js';
import AddFriendPage from './AddFriendPage.js';

const FriendKanban = (props) => (
  <div>
    <Link to={'/managelists'}>Manage lists</Link>
    <h1>See your friends in different lists</h1>

    <div>
      {
        (!props.lists || props.lists.length === 0) ? (
          <span>No friends.</span>
        ) : (
          props.lists.map( (list) => {
            return (
              <div key={list}>
                <FriendList priority={list} />
              </div>
            )
          })
        )
      }
    </div>
    <AddFriendPage />
  </div>
);


const mapStateToProps = (state) => {
  return {
    lists: state.lists,
  }
}

export default connect(mapStateToProps)(FriendKanban);
