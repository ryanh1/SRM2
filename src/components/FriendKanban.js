import React from 'react';
import ReactDOM from 'react-dom';
import {connect} from 'react-redux';

import TopPanel from './TopPanel';
import Guide from './Guide';
import BottomPanel from './BottomPanel';

const FriendKanban = (props) => {

  return (
    <div className="container-fluid">
      <TopPanel locations={props.locations} />
      <BottomPanel />
      <Guide friends={props.friends} guides={props.guides} page={"FriendKanban"} />
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
