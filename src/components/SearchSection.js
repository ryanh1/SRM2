import React from 'react';
import ReactDOM from 'react-dom';
import {connect} from 'react-redux';

import SearchResults from './SearchResults';
import performSearch from '../selectors/performSearch';

class SearchSection extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      friends: props.friends,
      events: props.events,
      searchText: props.searchText,
      friendsResults: performSearch(props.searchText, props.friends, props.events).friendsResults,
      eventsResults: performSearch(props.searchText, props.friends, props.events).eventsResults
    }
  }

  static getDerivedStateFromProps (props, state){
    if(props.searchText!== state.searchText) {
      return {
        searchText: props.searchText,
        friendsResults: performSearch(props.searchText, props.friends, props.events).friendsResults,
        eventsResults: performSearch(props.searchText, props.friends, props.events).eventsResults
      }
    }
    return null;
  }

  render() {

    return (
      <div className="container">
        <SearchResults
          friendsResults={this.state.friendsResults}
          eventsResults={this.state.eventsResults}
          searchText={this.state.searchText.toLowerCase()}
        />
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    friends: state.friends,
    events: state.events,
    searchText: state.search
  }
}

export default connect(mapStateToProps)(SearchSection);
