import React from 'react';
import ReactDOM from 'react-dom';
import moment from 'moment';

import DeleteEventButton from './DeleteEventButton';

const Event = (props) => (
  <div className="text-left m-2 p-2 bg-light border border-secondary">
    <div>{moment(props.date).format("MMM Do YYYY, h:mm:ss a")}</div>
    <div>{props.note}</div>
    <DeleteEventButton id={props.id}/>
  </div>
);

export default Event;
