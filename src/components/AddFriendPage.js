import React from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import {history} from '../routers/AppRouter';


import AddFriendForm from './AddFriendForm.js';
import { startAddFriend, startEditFriend } from '../actions/friends'
import { startAddList, startEditList, startRemoveList } from '../actions/lists'

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
          (this.props.function=="edit") ?
            (friend) => {
              console.log('Passed in this.props.dispatch(startEditFriend(friend)) to onSubmit');
              this.props.dispatch(startEditFriend(friend.id, {...friend}));
              this.props.dispatch(startAddList(friend.priority));

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
              history.push('/');
            }
            :
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
    friends: state.friends,
  }
}

export default connect(mapStateToProps)(AddFriendPage);
