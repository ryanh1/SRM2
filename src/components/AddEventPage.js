import React from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';

import AddEventForm from './AddEventForm.js';
import { startAddEvent } from '../actions/events'

const AddEventPage = (props) => (
  <AddEventForm
    friendID={props.friendID}
    onSubmit={(event) => {
        console.log(`In addEventPage with ${JSON.stringify(event)}`);
        props.dispatch(startAddEvent(event));
        // props.history.push('/');
      }}/>
);

export default connect()(AddEventPage);
