import React from 'react';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';
import { connect } from 'react-redux';

import {startRemoveList} from '../actions/lists';
import ConfirmModal from './ConfirmModal';

class DeleteListOpenModalButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modalOpen: props.modalOpen,
      priority: props.priority
    }
  }

  onDeleteButtonClick = () => {
    this.setState({modalOpen: true});
    console.log('Inside onButtonClick ', 'this.state.modalOpen = ', this.state.modalOpen);
  }

  onNoButtonClick = () => {
    this.setState({modalOpen: false})
  }

  onYesButtonClick = () => {
    this.props.dispatch(startRemoveList(this.state.priority));
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
        >
          {console.log('Inside Modal. ','this.state.modalOpen = ', this.state.modalOpen)}
          <div>Are you sure you want to delete list {this.state.priority}?</div>
          <button onClick={this.onYesButtonClick}>Yes</button>
          <button onClick={this.onNoButtonClick}>No</button>
        </Modal>

        {console.log('Inside DeleteListOpenModalButton ', 'this.props.modalOpen = ', this.state.modalOpen)}
        <button onClick={this.onDeleteButtonClick}>Delete</button>

      </div>
    )
  }
}

export default connect()(DeleteListOpenModalButton);
