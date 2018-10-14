import React from 'react';
import ReactDOM from 'react-dom';

const Event = (props) => (
  <div>
    <div>Date is: {props.date}</div>
    <div>Note is: {props.note}</div>
  </div>
);

export default Event;
