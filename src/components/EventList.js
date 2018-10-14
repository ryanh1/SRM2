import React from 'react';
import ReactDOM from 'react-dom';
import {connect} from 'react-redux'

import Event from './event.js';
import AddEventPage from './AddEventPage';
import selectEventsByFriendID from '../selectors/selectEventsByFriendID';

const EventList = (props) => (
  <div>
    <div>Your history:</div>
    <AddEventPage friendID={props.friendID}/>
    {
      (!props.events || props.events.length === 0) ? (
        <span>No events.</span>
      ) : (
        props.events.map( (event) => {
          return (
            <div key={event}>
              <Event date={event.date} note={event.note} id={event.id}/>
            </div>
          )
        })
      )
    }
  </div>
);

const mapStateToProps = (state, props) => {
  return {
    events: selectEventsByFriendID(state.events, props.friendID),
  }
}

export default connect(mapStateToProps)(EventList);
