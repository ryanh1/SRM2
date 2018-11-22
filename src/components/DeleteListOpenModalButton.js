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
    console.log('this.state.friends: ', JSON.stringify(this.state.friends));
    console.log('this.state.priority: ', JSON.stringify(this.state.priority));
    this.props.friends.forEach(
      function(friend) {
        if (friend.priority === self.state.priority) {
          createdDefault = true;
          console.log('friend: ', JSON.stringify(friend));
          self.props.dispatch(startEditFriend(friend.id, {priority: defaultPriority}))
        }
      }
    )
    if (createdDefault === true) {
      this.props.dispatch(startAddList(defaultPriority));
    }
    if (this.state.priority != defaultPriority) {
      this.props.dispatch(startRemoveList(this.state.priority));
    }
    this.setState({modalOpen: false});
    this.forceUpdate();
  }

  render() {
    return (
      <div>
        <Modal
          isOpen={this.state.modalOpen}
          onRequestClose={this.onNoButtonClick}
          closeTimeoutMS={200}
          contentLabel={'Confirm'}
          className="bg-light modal border border-dark"
        >
          <div className="pl-3 pr-3">Are you sure you want to delete list {this.state.priority}?</div>
          <div className="mt-3">
            <button onClick={this.onYesButtonClick}>Yes</button>
            <button onClick={this.onNoButtonClick}>No</button>
          </div>
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
