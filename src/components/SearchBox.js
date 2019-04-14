import React from 'react';
import ReactDOM from 'react-dom';
import {connect} from 'react-redux';

import {startEditSearch} from '../actions/search'

class SearchBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchText: ''
    }
  }

  onInputChange = (e) => {
    const searchText = e.target.value;
    this.setState(() => ({searchText}));
    this.props.dispatch(startEditSearch(searchText));
  }

  render() {
    return (
      <div className="center-horrizontally">
        <input
          type="search"
          placeholder="Search..."
          value={this.state.searchText}
          onChange={this.onInputChange}
        />
      </div>
    )
  }
}

export default connect()(SearchBox);