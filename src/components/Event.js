import React from 'react';
import ReactDOM from 'react-dom';

import DeleteEventButton from './DeleteEventButton';

const Event = (props) => (
  <div className="text-left m-2 p-2 bg-light border border-secondary">
    <div>Date is: {props.date}</div>
    <div>Note is: {props.note}</div>
    <DeleteEventButton id={props.id}/>
  </div>
);

export default Event;
