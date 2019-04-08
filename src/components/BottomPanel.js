import React from 'react';
import ReactDOM from 'react-dom';
import {connect} from 'react-redux';

import LocationsSelectorModal from './LocationsSelectorModal';
import FriendList from './FriendList';


const BottomPanel = (props) => {

  let friendLists = [];
  (!props.lists || props.lists.length === 0) ?
    friendLists.push(<span key='span'></span>) : (
    props.lists.map( (list) => {
      friendLists.push(
        <div
          className="col-sm-12 col-md-6 col-lg-6 col-xl-4"
          key={list.priority}>
            <div className="card-2 p-2">
              <FriendList list={list} key={list.priority}/>
            </div>
        </div>
      )
    })
  )

  return (
    <div>
      <div id="Your_friends">
        {props.locations.length > 0 ? (
          <div className="container">
            <div className="row justify-content-between mb-4">
              <div className="col-1">
                <LocationsSelectorModal/>
              </div>
              <h1 className="col-10 text-center">Your friends</h1>
              <div className="col-1"></div>
            </div>
          </div>
        ) : <div></div>}
      </div>
      <div className="container">
        <div className="row">
          {friendLists}
        </div>
      </div>
    </div>
  );
}

  const mapStateToProps = (state) => {
    return {
      lists: state.lists,
      locations: state.locations,
      friends: state.friends,
      guides: state.guides
    }
  }

  export default connect(mapStateToProps)(BottomPanel);
