import React from 'react';
import ReactDOM from 'react-dom';
import moment from 'moment';

import DeleteEventOpenModalButton from './DeleteEventOpenModalButton';

const Event = (props) => (
  <div className="text-left m-2 p-2 bg-light card-1">
    <div>{moment(props.date).format("MMM Do YYYY, h:mm:ss a")}</div>
    <div>{props.note}</div>
    <DeleteEventOpenModalButton eventId={props.id}/>
  </div>
);

export default Event;
