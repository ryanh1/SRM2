import React from 'react';
import ReactDOM from 'react-dom';
import {connect} from 'react-redux';

import FriendCard from './friendcard.js';
import selectFriendsByPriority from '../selectors/selectFriendsByPriority';
import filterOutFriendById from '../selectors/filterOutFriendById';
import sortFriendsInList from '../selectors/sortFriendsInList';

// import DeleteListButton from './deleteListButton';
import DeleteListOpenModalButton from './DeleteListOpenModalButton';
import { startEditFriend } from '../actions/friends'

class FriendList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      filteredFriends: selectFriendsByPriority(props.friends, props.priority)
    }
  }

  componentWillReceiveProps(nextProps){
    if(nextProps.friends!==this.props.friends) {
      this.setState( () => ( {filteredFriends: selectFriendsByPriority(nextProps.friends, this.props.priority)} ) )
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
            <h3 className="mr-5">List: {this.props.priority}</h3>
              <DeleteListOpenModalButton
                className="ml-auto"
                priority={this.props.priority}
                modalOpen={false}
              />
          </div>

          <div>
            {
              this.state.filteredFriends.length === 0 ? (
                <span>No friends.</span>
              ) : (
                this.state.filteredFriends.sort(sortFriendsInList).map( (friend) => {
                  return (
                    <div key={friend.id}>
                      <FriendCard
                        friend={friend}
                        id={friend.id}
                        key={friend.id}
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
    friends: state.friends
  }
}

export default connect(mapStateToProps)(FriendList);
