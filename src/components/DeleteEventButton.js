import React from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';

import {startRemoveEvent} from '../actions/events';




const deleteEventButton = (props) => (
  <button onClick={() => {props.dispatch(startRemoveEvent(props.id))}}>Delete</button>
)

// const mapStateToProps = (props) => {
//   return {
//     list: state.lists.find((list) => list === props.priority)
//   };
// };



export default connect()(deleteEventButton);
