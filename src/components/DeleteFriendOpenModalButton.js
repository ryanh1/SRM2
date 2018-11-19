import React from 'react';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';
import { connect } from 'react-redux';

import {startRemoveFriend} from '../actions/friends';
// import {startRemoveList} from '../actions/lists';
import {startRemoveLocation} from '../actions/locations';
import numberOfFriendsWithLocation from '../selectors/numberOfFriendsWithLocation';
import numberOfFriendsWithPriority from '../selectors/numberOfFriendsWithPriority';

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
    // 1. If friend was the only one with this location, delete location
    if (numberOfFriendsWithLocation(this.props.friends, this.state.friend.location) <= 1) {
      this.props.dispatch(startRemoveLocation(this.state.friend.location));
    }

    // 2. If friend was the only one with this list, delete lists
    // if (numberOfFriendsWithPriority(this.props.friends, this.state.friend.priority) <= 1) {
    //   this.props.dispatch(startRemoveList(this.state.friend.priority));
    // }

    // 3. Remove friend
    this.props.dispatch(startRemoveFriend(this.state.friend.id));


    // 4. Other
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
          className="bg-light modal border border-dark"
        >
          {console.log('Inside Modal. ','this.state.modalOpen = ', this.state.modalOpen)}
          <div>Are you sure you want to delete friend: {this.state.friend.firstName} {this.state.friend.lastName}?</div>
          <div className="mt-3">
            <button onClick={this.onYesButtonClick}>Yes</button>
            <button onClick={this.onNoButtonClick}>No</button>
          </div>
        </Modal>

        {console.log('Inside DeleteFriendOpenModalButton ', 'this.props.modalOpen = ', this.state.modalOpen)}
        <button onClick={this.onDeleteButtonClick}>Delete {this.props.friend.firstName} {this.props.friend.lastName}</button>

      </div>
    )
  }
}

const mapStateToProps = (state) => {
    return {
      friends: state.friends
    };
};

export default connect(mapStateToProps)(DeleteFriendOpenModalButton);
