import React from 'react';
import ReactDOM from 'react-dom';
import {connect} from 'react-redux';

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
      <div className="ml-3 mr-3">
        <div className="scrollable">
          {this.props.locations.map(
            (location) => (
              <span key={location.value} className="mr-2 ml-2 overflow">
                <div className="form-check">
                  <input
                    type="checkbox"
                    value={location.value}
                    onChange={this.onCheck}
                    checked={location.selected}
                    className="form-check-input"
                    id={location.value}
                  />
                  <span className="form-check-label" key={location.value}> {location.value}</span>
                </div>
              </span>
            )
          )}
        </div>
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
