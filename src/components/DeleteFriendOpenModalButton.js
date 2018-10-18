import React from 'react';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';
import { connect } from 'react-redux';

import {startRemoveFriend} from '../actions/friends';

class DeleteFriendOpenModalButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modalOpen: props.modalOpen,
      friend: props.friend
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
    this.props.dispatch(startRemoveFriend(this.state.friend.id));
    this.setState({modalOpen: false});
    this.props.history.push('/');
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
          <div>Are you sure you want to delete friend: {this.state.friend.firstName} {this.state.friend.lastName}?</div>
          <button onClick={this.onYesButtonClick}>Yes</button>
          <button onClick={this.onNoButtonClick}>No</button>
        </Modal>

        {console.log('Inside DeleteFriendOpenModalButton ', 'this.props.modalOpen = ', this.state.modalOpen)}
        <button onClick={this.onDeleteButtonClick}>Delete {this.props.friend.firstName} {this.props.friend.lastName}</button>

      </div>
    )
  }
}

export default connect()(DeleteFriendOpenModalButton);
