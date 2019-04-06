import React from 'react';
import ReactDOM from 'react-dom';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';

import FriendList from './FriendList';
import TopPanel from './TopPanel';
import Guide from './Guide';

const FriendKanban = (props) => {

  let content = [];
  (!props.lists || props.lists.length === 0) ?
    content.push(<span key='span'></span>) : (
    props.lists.map( (list) => {
      content.push(
        <div
          className="col-2.5 m-3 border border-secondary"
          key={list}>
            <FriendList list={list} key={list}/>
        </div>
      )
    })
  )

  return (
    <div className="p-4">

      <TopPanel locations={props.locations}/>
      <Guide friends={props.friends} guides={props.guides} page={"FriendKanban"} />
      {props.locations.length > 0 ? (<h1 className="text-center m-3">Your friends</h1>) : <div></div>}

      <div className="d-flex justify-content-between">
        <div className="row justify-content-between">
          {content}
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

export default connect(mapStateToProps)(FriendKanban);
