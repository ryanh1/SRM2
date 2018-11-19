import React from 'react';
import ReactDOM from 'react-dom';
import {connect} from 'react-redux';

import extractLocationsFromFriends from '../selectors/extractLocationsFromFriends';
import {startToggleLocation} from '../actions/locations';

class LocationsSelector extends React.Component {

  // constructor
  constructor(props) {
    super(props);
    this.state = {
      // locations: props.locations
    }
  }

  onCheck = (e) => {
    this.props.dispatch(startToggleLocation(e.target.value));
  }

  render() {
    return (
      <div>
        {this.props.locations.map(
          (location) => (
            <div key={location.value}>
              <input
                type="checkbox"
                value={location.value}
                onChange={this.onCheck}
                checked={location.selected}
              />
              <span key={location.value}> {location.value}</span>
            </div>
          )
        )}
      </div>
    )
  }
}

const mapStateToProps = (state, props) => {
    return {
      locations: state.locations
    };
};

export default connect(mapStateToProps)(LocationsSelector);
