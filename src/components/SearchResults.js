import React from 'react';
import ReactDOM from 'react-dom';

import SearchResultFriend from '../components/SearchResultFriend';
import SearchResultEvent from '../components/SearchResultEvent';


const SearchResults = (props) => (
  <div>
    <div>
      {props.friendsResults.map( (friend) => {
        const eventsForFriend = props.eventsResults.filter( (event) => {
          return event.friendID == friend.id;
        })

        return (<SearchResultFriend
          friend={friend}
          searchText={props.searchText.toLowerCase()}
          key={friend.id}
          eventsForFriend={eventsForFriend}
        />)
      })}
    </div>
  </div>
);

export default SearchResults;
