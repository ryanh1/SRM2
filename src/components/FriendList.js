import React from 'react';
import ReactDOM from 'react-dom';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';


import FriendCard from './FriendCard.js';
import selectFriendsByPriority from '../selectors/selectFriendsByPriority';
import filterOutFriendById from '../selectors/filterOutFriendById';
import sortFriendsInList from '../selectors/sortFriendsInList';
import selectFriendsBySelectedLocations from '../selectors/selectFriendsBySelectedLocations';

import DeleteListOpenModalButton from './DeleteListOpenModalButton';
import { startEditFriend } from '../actions/friends';
import {defaultName0, defaultPriority} from '../system/variables';
import { startAddList, startRemoveList } from '../actions/lists'


class FriendList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      filteredFriends: selectFriendsByPriority(props.friends, props.list.priority)
    }
  }

  componentWillReceiveProps(nextProps){
    if(nextProps.friends!==this.props.friends) {
      this.setState( () => ( {filteredFriends: selectFriendsByPriority(nextProps.friends, this.props.list.priority)} ) )
    }
  }

  swapFriendOrder = (friend, overlappingFriend) => {
    var orderInList = friend.orderInList - 1
    var newFriend = {...friend, orderInList}
    orderInList = overlappingFriend.orderInList + 1;
    var newOverlappingFriend = {...overlappingFriend, orderInList};
    this.props.dispatch(startEditFriend(friend.id, newFriend));
    this.props.dispatch(startEditFriend(overlappingFriend.id, newOverlappingFriend));
    console.log('newFriend', JSON.stringify(newFriend))
    console.log('newOverlappingFriend', JSON.stringify(newOverlappingFriend))
    console.log('new Filtered Friends', JSON.stringify(this.state.filteredFriends))
  }

  onCheckButton = (friend) => {
    // 0. Update orderInList and priority values
    var self = this;
    var originalPriority = friend.priority;
    var originalOrderInList = friend.orderInList;
    var originalFriendID = friend.id;
    var newPriority = defaultPriority;
    var newList = selectFriendsByPriority(this.props.friends, defaultPriority);
    friend.orderInList = newList.length + 1;
    friend.priority = newPriority;

    // 1. Save edited friend
    this.props.dispatch(startEditFriend(friend.id, {...friend}));

    // 2. Add a new list if necessary
    if (numberOfListsWithPriority(this.props.lists, newPriority) == 0) {
      this.props.dispatch(startAddList(newPriority));
    }

    // 3. If the old list is empty, delete it.
    var countInListBeforeDelete = 0;
    this.props.friends.forEach(
      function(friend) {
        if (friend.priority == originalPriority) {
          countInListBeforeDelete += 1;
        }
      }
    )
    console.log('countInListBeforeDelete: ', JSON.stringify(countInListBeforeDelete));
    if (countInListBeforeDelete === 0 ) {
      this.props.dispatch(startRemoveList(originalPriority));
    } else {
      // 4. If the old list is not empty, decrementOrderOfHigherFriends
      this.state.filteredFriends.forEach(
        function(friend) {
          if (friend.orderInList > originalOrderInList) {
            if (friend.id != originalFriendID) {
              friend.orderInList -= 1;
              self.props.dispatch(startEditFriend(friend.id, friend));
            }
          }
        }
      )
    }
  }

  onUpButton = (friend) => {
      console.log('onUpButton', friend.firstName, friend.lastName, 'order', friend.orderInList);
      var overlappingFriend = this.state.filteredFriends.find((f) => f.orderInList === friend.orderInList - 1);
      if (overlappingFriend != undefined) {
        console.log(friend.firstName, friend.lastName, 'going to overlap with', overlappingFriend.firstName, overlappingFriend.lastName);
        this.swapFriendOrder(friend, overlappingFriend);
      }
  }

  onDownButton = (friend) => {
      var overlappingFriend = this.state.filteredFriends.find((f) => f.orderInList === friend.orderInList + 1);
      if (overlappingFriend != undefined) {
        this.swapFriendOrder(overlappingFriend, friend);
      }
  }

  render() {
    return (
      <div>
        <div className="m-3">
          <div className="d-flex justify-content-between">
            <Link to={`/lists/${this.props.list.priority}`} className="text-dark">
              <h3 className="mr-5">{this.props.list.priority}. {this.props.list.name}</h3>
            </Link>
            <DeleteListOpenModalButton
              className="ml-auto"
              priority={this.props.list.priority}
              modalOpen={false}
            />
          </div>

          <div>
            {
              selectFriendsBySelectedLocations(this.state.filteredFriends, this.props.locations).length === 0 ? (
                <span>No friends.</span>
              ) : (
                selectFriendsBySelectedLocations(this.state.filteredFriends, this.props.locations).sort(sortFriendsInList).map( (friend) => {
                  return (
                    <div key={friend.id}>
                      <FriendCard
                        friend={friend}
                        id={friend.id}
                        key={friend.id}
                        checkButton={this.onCheckButton}
                        upButton={this.onUpButton}
                        downButton={this.onDownButton}
                        change={true}
                      />
                    </div>
                  )
                })
              )
            }
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    friends: state.friends,
    locations: state.locations,
    lists: state.lists
  }
}

export default connect(mapStateToProps)(FriendList);
