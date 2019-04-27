import React from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import {history} from '../routers/AppRouter';

import AddFriendForm from './AddFriendForm.js';
import { startAddFriend, startEditFriend } from '../actions/friends'
import { startAddList, startRemoveList } from '../actions/lists'
import { startAddLocation, startRemoveLocation } from '../actions/locations'
import selectFriendsByPriority from '../selectors/selectFriendsByPriority';
import extractLocationsFromFriends from '../selectors/extractLocationsFromFriends';
import numberOfFriendsWithLocation from '../selectors/numberOfFriendsWithLocation';
import numberOfFriendsWithPriority from '../selectors/numberOfFriendsWithPriority';
import numberOfListsWithPriority from '../selectors/numberOfListsWithPriority';


class AddFriendPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      friends: props.friends
    }
  }

  render() {
    return (
      <AddFriendForm
        friend={this.props.friend}
        onSubmit={

          // If we're editing a friend...
          (this.props.function=="edit") ?
            (friend) => {

              // -1. Set original friend variables
              var self = this;
              var originalOrderInList = this.props.friend.orderInList;
              var originalFriendID = this.props.friend.id;
              var originalLocation = this.props.friend.location;
              var numberOfFriendsWithOriginalLocation = numberOfFriendsWithLocation(this.state.friends, originalLocation);
              var numberOfFriendsWithNewLocation = numberOfFriendsWithLocation(this.state.friends, friend.location);


              // 0. Add friend to last slot in new list
              var newPriority = friend.priority;
              var newList = selectFriendsByPriority(this.state.friends, newPriority);
              friend.orderInList = newList.length + 1;

              // 1. Save edited friend
              console.log('Passed in this.props.dispatch(startEditFriend(friend)) to onSubmit');
              this.props.dispatch(startEditFriend(friend.id, {...friend}));

              // 2. Add a new list if necessary
              console.log('numberOfListsWithPriority: ', numberOfListsWithPriority(self.props.lists, newPriority));
              if (numberOfListsWithPriority(self.props.lists, newPriority) === 0) {
                self.props.dispatch(startAddList(newPriority));
              }

              // 3. If the old list is empty, delete it.
              var originalPriority = this.props.friend.priority;
              var countInListBeforeDelete = 0;
              self.state.friends.forEach(
                function(friend) {
                  if (friend.priority == originalPriority) {
                    countInListBeforeDelete += 1;
                  }
                }
              )
              if (countInListBeforeDelete === 1 && originalPriority != newPriority) {
                self.props.dispatch(startRemoveList(originalPriority));
              } else {
                // 4. If the old list is not empty, decrementOrderOfHigherFriends
                var oldList = selectFriendsByPriority(self.state.friends, originalPriority);
                console.log('started to decrementOrderOfHigherFriends');
                console.log('orderInList: ', originalOrderInList);
                oldList.forEach(
                  function(friend) {
                    console.log('**1**');
                    if (friend.orderInList > originalOrderInList) {
                      console.log('**2**');
                      if (friend.id != originalFriendID) {
                        console.log('**3**');
                        friend.orderInList -= 1;
                        self.props.dispatch(startEditFriend(friend.id, friend));
                      }
                    }
                  }
                )

                // 5. If the location was changed:
                if (originalLocation != friend.location) {
                  console.log('**4**');
                  console.log('numberOfFriendsWithOriginalLocation', numberOfFriendsWithOriginalLocation);
                  console.log('numberOfFriendsWithNewLocation', numberOfFriendsWithNewLocation);
                  // 5A. If no other friends have the old location, delete the old location
                  if (numberOfFriendsWithOriginalLocation <= 1) {
                    console.log('**5**');
                    self.props.dispatch(startRemoveLocation(originalLocation));
                  }

                  // 5B. If no other friends have the new location, add the new location
                  if (numberOfFriendsWithNewLocation <= 0) {
                    console.log('**6**');
                    self.props.dispatch(startAddLocation(friend.location));
                  }
                }



              }

              // 6. Redirect user to home screen
              history.push('/');
            }
            :
            // Otherwise, if we're adding a friend...
            (friend) => {
              console.log('Passed in this.props.dispatch(startAddFriend(friend)) to onSubmit');
              var self = this;
              var numFriendsWithNewLocation = numberOfFriendsWithLocation(self.state.friends, friend.location);
              console.log('numFriendsWithNewLocation', numFriendsWithNewLocation);
              if (numFriendsWithNewLocation === 0) {
                self.props.dispatch(startAddLocation(friend.location));
              }
              self.props.dispatch(startAddFriend(friend));
              console.log('numberOfListsWithPriority: ', numberOfFriendsWithPriority(self.props.friends, friend.priority));
              if (numberOfFriendsWithPriority(self.props.friends, friend.priority) === 0) {
                console.log('add list');
                self.props.dispatch(startAddList(friend.priority));
              }
              history.push('/');
              document.body.classList.add('background-gradient-animation');
              setTimeout( function() {
                document.querySelector('body').classList.remove('background-gradient-animation')
              },
              7000);
            }
        }
      />
    )
  }
}

const mapStateToProps = (state) => {
  return {
    friends: state.friends,
    lists: state.lists
  }
}

export default connect(mapStateToProps)(AddFriendPage);
