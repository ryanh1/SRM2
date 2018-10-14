import React from 'react';
import ReactDOM from 'react-dom';

import DeleteEventButton from './DeleteEventButton';

const Event = (props) => (
  <div>
    <div>Date is: {props.date}</div>
    <div>Note is: {props.note}</div>
    <DeleteEventButton id={props.id}/>
  </div>
);

export default Event;
