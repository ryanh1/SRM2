import React from 'react';
import ReactDOM from 'react-dom';
import {connect} from 'react-redux';


import FriendList from './FriendList.js';
import AddFriendPage from './AddFriendPage.js';
import AddListPage from './AddListPage.js';




const FriendKanban = (props) => (
  <div>
    <h1>See your friends in different lists</h1>
    <AddListPage />

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
