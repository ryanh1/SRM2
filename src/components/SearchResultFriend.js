import React from 'react';
import ReactDOM from 'react-dom';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';

import SearchResultEvent from '../components/SearchResultEvent';

const SearchResultFriend = (props) => (
  <div className="card-1 mb-3 mt-3 p-2">
    <Link to={`/friends/${props.friend.id}`} className="h5">
      {props.friend.firstName} {props.friend.lastName}
    </Link>
    <div>Location: {props.friend.location}</div>
    <div>{props.friend.todo != '' ? `To do: ${props.friend.todo}` : ''}</div>
    <div>
      {props.eventsForFriend.map( (event) => {
        return (<SearchResultEvent event={event} searchText={props.searchText} key={event.id}/>)
      })}
    </div>
  </div>
);

export default SearchResultFriend;
