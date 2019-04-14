import React from 'react';
import ReactDOM from 'react-dom';

import removeDuplicates from '../selectors/removeDuplicates';

const performSearch = (searchText, friends, events) => {
  const searchTextLower = searchText.toLowerCase();
  var friendsResults;
  var eventsResults;

  if (searchText === '') {
    searchText = '',
    friendsResults = [],
    eventsResults = []
  } else {

    // Find results where the search term is in the friend.
    friendsResults = friends.filter((friend) => {
      return (JSON.stringify(friend).toLowerCase().includes(searchTextLower))
    });

    const friendsResultsIds = friendsResults.map((friend) => {
      friend.id
    });

    // Find results where the search term is in the event and set that state.
    eventsResults = events.filter((event) => {
      return JSON.stringify(event).toLowerCase().includes(searchTextLower);
    });

    // Prep friendIdsToPush
    const friendIdsToPush = [];

    // For each event in eventsResults...
    eventsResults.forEach( (event) => {

      // If eventResults friendIDs are not in the friendsResultsIds, get ready to push those friends.
      if (!friendsResultsIds.includes(event.friendID)) {
        friendIdsToPush.push(event.friendID);
      }
    });

    // Find those friends by ids
    const friendsToPush = friends.filter( (friend) => {
      return friendIdsToPush.includes(friend.id);
    });

    // Push those friends
    friendsToPush.forEach((friend) => {
      friendsResults.push(friend);
    });

    friendsResults = removeDuplicates(friendsResults);
  }

  const result = {
    searchText,
    friendsResults,
    eventsResults
  }
  return result;

}

export default performSearch;
