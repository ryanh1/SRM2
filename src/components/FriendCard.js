import React from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import {Link} from 'react-router-dom';

const FriendCard = (props) => (
    <div className="font-weight-bold text-primary">
      <Link to={`/friends/${props.id}`}>
        {props.firstName} {props.lastName}
      </Link>
    </div>
);

export default connect()(FriendCard);
