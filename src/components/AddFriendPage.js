import React from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import {history} from '../routers/AppRouter';


import AddFriendForm from './AddFriendForm.js';
import { startAddFriend, startEditFriend } from '../actions/friends'
import { startAddList, startEditList, startRemoveList } from '../actions/lists'
import selectFriendsByPriority from '../selectors/selectFriendsByPriority';

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

              // 0. Add friend to last slot in new list
              var newPriority = friend.priority;
              var newList = selectFriendsByPriority(this.state.friends, newPriority);
              friend.orderInList = newList.length + 1;

              // 1. Save edited friend
              console.log('Passed in this.props.dispatch(startEditFriend(friend)) to onSubmit');
              this.props.dispatch(startEditFriend(friend.id, {...friend}));

              // 2. Add a new list if necessary
              this.props.dispatch(startAddList(friend.priority));

              // 3. If the old list is empty, delete it.
              var originalPriority = this.props.friend.priority;
              var countInListBeforeDelete = 0;
              this.state.friends.forEach(
                function(friend) {
                  if (friend.priority == originalPriority) {
                    countInListBeforeDelete += 1;
                  }
                }
              )
              if (countInListBeforeDelete === 1) {
                this.props.dispatch(startRemoveList(originalPriority));
              }

              // 4. Redirect user to home screen
              history.push('/');
            }
            :
            // Otherwise, if we're adding a friend...
            (friend) => {
              console.log('Passed in this.props.dispatch(startAddFriend(friend)) to onSubmit');
              this.props.dispatch(startAddFriend(friend));
              this.props.dispatch(startAddList(friend.priority));
              history.push('/');
            }
        }
      />
    )
  }
}

const mapStateToProps = (state) => {
  return {
    friends: state.friends
  }
}

export default connect(mapStateToProps)(AddFriendPage);
