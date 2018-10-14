import React from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import {Link} from 'react-router-dom';

import EventList from './eventlist.js';


const FriendCard = (props) => (
    <div>
      <Link to={`/friends/${props.id}`}>
        {props.firstName} {props.lastName}
      </Link>
      <EventList friendID={props.id}/>
    </div>
);

export default connect()(FriendCard);
