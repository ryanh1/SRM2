import React from 'react';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';
import { connect } from 'react-redux';
import {startToggleLocation} from '../actions/locations';

import LocationsSelector from './LocationsSelector';

class LocationsSelectorModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }

  onFilterButtonClick = () => {
    this.setState({modalOpen: true});
  }

  onCloseButtonClick = () => {
    this.setState({modalOpen: false})
  }

  onSelectAllClick = () => {
    this.props.locations.forEach( (location) => {
      if (!location.selected) {
        this.props.dispatch(startToggleLocation(location.value));
      }
    })
  }

  onSelectNoneClick = () => {
    this.props.locations.forEach( (location) => {
      if (location.selected) {
        this.props.dispatch(startToggleLocation(location.value));
      }
    })
  }

  render() {
    return (
      <div>
        <Modal
          isOpen={this.state.modalOpen}
          onRequestClose={this.onCloseButtonClick}
          closeTimeoutMS={200}
          contentLabel={'Confirm'}
          className="bg-light modal filter-modal border border-dark pb-4"
        >
          <div>
          <div className="button-center mb-3">
            <button className="mr-3" onClick={this.onSelectAllClick}>Select All</button>
            <button className="mr-3" onClick={this.onSelectNoneClick}>Select None</button>
            <button onClick={this.onCloseButtonClick}>Close</button>
          </div>
            <LocationsSelector/>
          </div>
        </Modal>

        <button className="mt-3" onClick={this.onFilterButtonClick}>Locations</button>

      </div>
    )
  }
}

const mapStateToProps = (state, props) => {
    return {
      locations: state.locations
    };
};

export default connect(mapStateToProps)(LocationsSelectorModal);
