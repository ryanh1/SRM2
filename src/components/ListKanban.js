import React from 'react';
import ReactDOM from 'react-dom';
import {connect} from 'react-redux';
import arraySort from 'array-sort';

import LocationsSelectorModal from './LocationsSelectorModal';
import FriendList from './FriendList';
import SearchBox from './SearchBox';


const ListKanban = (props) => {

  let friendLists = [];
  (!props.lists || props.lists.length === 0) ?
    friendLists.push(<span key='span'></span>) : (
    arraySort(props.lists, 'priority').map( (list) => {
      friendLists.push(
        <div
          className="col-sm-12 col-md-6 col-lg-6 col-xl-4"
          key={list.priority}>
            <div className="card-2 p-2 mb-3">
              <FriendList list={list} key={list.priority}/>
            </div>
        </div>
      )
    })
  )

  return (
    <div className="container">
      <div className="row">
        {friendLists}
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

  export default connect(mapStateToProps)(ListKanban);
