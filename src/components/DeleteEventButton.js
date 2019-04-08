import React from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';

import {startRemoveEvent} from '../actions/events';




const deleteEventButton = (props) => (
  <div className="center-horrizontally">
    <button className="btn btn-info" onClick={() => {props.dispatch(startRemoveEvent(props.id))}}>Delete</button>
  </div>
)

// const mapStateToProps = (props) => {
//   return {
//     list: state.lists.find((list) => list === props.priority)
//   };
// };



export default connect()(deleteEventButton);
