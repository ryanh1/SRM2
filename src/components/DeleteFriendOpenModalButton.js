import React from 'react';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';
import { connect } from 'react-redux';

import {startRemoveFriend} from '../actions/friends';
// import {startRemoveList} from '../actions/lists';
import {startRemoveLocation} from '../actions/locations';
import {startRemoveEvent} from '../actions/events';
import numberOfFriendsWithLocation from '../selectors/numberOfFriendsWithLocation';
import numberOfFriendsWithPriority from '../selectors/numberOfFriendsWithPriority';
import selectEventsByFriendID from '../selectors/selectEventsByFriendID';


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

    // 3. Delete all of that friend's events.
    const friendsEvents = selectEventsByFriendID(this.props.events, this.state.friend.id);
    console.log(JSON.stringify(friendsEvents));
    const eventIDs = friendsEvents.map((event) => { return event.id});
    console.log(JSON.stringify(eventIDs));
    eventIDs.forEach( (id) => {
      this.props.dispatch(startRemoveEvent(id));
    })

    // 4. Remove friend
    this.props.dispatch(startRemoveFriend(this.state.friend.id));

    // 5. Other
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
          className="bg-light custom-modal modal__medium-modal border border-dark rounded card-4 pb-4"
        >
          {console.log('Inside Modal. ','this.state.modalOpen = ', this.state.modalOpen)}
          <div className="pl-3 pr-3">Are you sure you want to delete friend: {this.state.friend.firstName} {this.state.friend.lastName}?</div>
          <div className="center-horrizontally mt-3">
            <button className="m-3 btn btn-danger card-1" onClick={this.onYesButtonClick}>Yes</button>
            <button className="m-3 btn btn-info card-1" onClick={this.onNoButtonClick}>No</button>
          </div>
        </Modal>

        {console.log('Inside DeleteFriendOpenModalButton ', 'this.props.modalOpen = ', this.state.modalOpen)}
        <button className="btn btn-info card-1" onClick={this.onDeleteButtonClick}>Delete {this.props.friend.firstName} {this.props.friend.lastName}</button>

      </div>
    )
  }
}

const mapStateToProps = (state) => {
    return {
      friends: state.friends,
      events: state.events
    };
};

export default connect(mapStateToProps)(DeleteFriendOpenModalButton);
