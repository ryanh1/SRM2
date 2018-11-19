import React from 'react';
import ReactDOM from 'react-dom';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';

import FriendList from './FriendList';
import TopPanel from './TopPanel';


const FriendKanban = (props) => (
  <div className="p-4">
    <h1 className="text-center mb-4">Your friends</h1>
    <TopPanel />
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
  </div>
);


const mapStateToProps = (state) => {
  return {
    lists: state.lists,
  }
}

export default connect(mapStateToProps)(FriendKanban);
