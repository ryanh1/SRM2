import React from 'react';
import ReactDOM from 'react-dom';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';

import FriendList from './FriendList.js';
import AddFriendPage from './AddFriendPage.js';

const FriendKanban = (props) => (
  <div className="p-4">
    <Link
      className="d-flex justify-content-end"
      to={'/managelists'}
    >Manage lists</Link>
    <h1 className="text-center mb-4">See your friends in different lists</h1>

    <div className="d-flex justify-content-between">
      {
        (!props.lists || props.lists.length === 0) ? (
          <span>No friends.</span>
        ) : (
          props.lists.map( (list) => {
            return (
              <div
                className="border border-secondary"
                key={list}>
                  <FriendList priority={list} />
              </div>
            )
          })
        )
      }
    </div>
    <div className="text-center border border-secondary mt-5">
      <h2 className="m-2">Add a new friend.</h2>
      <AddFriendPage />
    </div>
  </div>
);


const mapStateToProps = (state) => {
  return {
    lists: state.lists,
  }
}

export default connect(mapStateToProps)(FriendKanban);
