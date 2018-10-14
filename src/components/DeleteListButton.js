import React from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';

import {startRemoveList} from '../actions/lists';




const deleteListButton = (props) => (
  <button onClick={() => {props.dispatch(startRemoveList(props.priority))}}>Delete</button>
)

const mapStateToProps = (props) => {
  return {
    list: state.lists.find((list) => list === props.priority)
  };
};



export default connect()(deleteListButton);
