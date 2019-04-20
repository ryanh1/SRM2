import React from 'react';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';
import { connect } from 'react-redux';


import {startRemoveEvent} from '../actions/events';

class DeleteEventOpenModalButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modalOpen: props.modalOpen
    }
  }

  onDeleteButtonClick = () => {
    this.setState({modalOpen: true});
  }

  onNoButtonClick = () => {
    this.setState({modalOpen: false})
  }

  onYesButtonClick = () => {
    this.props.dispatch(startRemoveEvent(this.props.eventId));
    this.setState({modalOpen: false});
  }

  render() {
    return (
      <div>
        <Modal
          isOpen={this.state.modalOpen}
          onRequestClose={this.onNoButtonClick}
          closeTimeoutMS={200}
          contentLabel={'Confirm'}
          ariaHideApp={false}
          className="bg-light custom-modal modal__medium-modal border border-dark rounded card-4 pb-4"
        >
          <div className="pl-3 pr-3">Are you sure you want to delete this note?</div>
          <div className="mt-3 center-horrizontally">
            <button className="m-3 btn btn-danger card-1" onClick={this.onYesButtonClick}>Yes</button>
            <button className="m-3 btn btn-secondary card-1" onClick={this.onNoButtonClick}>No</button>
          </div>
        </Modal>

        <div className="center-horrizontally">
          <button onClick={this.onDeleteButtonClick} className="btn btn-info">Delete</button>
        </div>

      </div>
    )
  }
}

export default connect()(DeleteEventOpenModalButton);
