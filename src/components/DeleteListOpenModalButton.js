import React from 'react';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';
import { connect } from 'react-redux';

import {startRemoveList} from '../actions/lists';
import {startAddList} from '../actions/lists';
import {startEditFriend} from '../actions/friends';
import {defaultPriority} from '../system/variables';


class DeleteListOpenModalButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modalOpen: props.modalOpen,
      priority: props.priority,
      friends: props.friends
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
    var createdDefault = false;
    var self = this;
    this.state.friends.forEach(
      function(friend) {
        if (friend.priority == self.state.priority) {
          createdDefault = true;
          self.props.dispatch(startEditFriend(friend.id, {priority: defaultPriority}))
        }
      }
    )
    if (createdDefault === true) {
      this.props.dispatch(startAddList(defaultPriority));
    }
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
          <div>Are you sure you want to delete list {this.state.priority}?</div>
          <button onClick={this.onYesButtonClick}>Yes</button>
          <button onClick={this.onNoButtonClick}>No</button>
        </Modal>

        <button onClick={this.onDeleteButtonClick}>Delete</button>

      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    friends: state.friends,
  }
}

export default connect(mapStateToProps)(DeleteListOpenModalButton);
