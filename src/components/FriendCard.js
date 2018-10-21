import React from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import {Link} from 'react-router-dom';

class FriendCard extends React.Component {
  constructor(props) {
    super(props);
  }

  onPriorityChange = (e) => {
    const priority = e.target.value;
    const orderInList = selectFriendsByPriority(this.props.friends, priority).length + 1;
    this.setState(() => ({priority, orderInList}));
  }

  onUpButton = () => {
    this.props.upButton(this.props.friend);
  }

  onDownButton = () => {
    this.props.downButton(this.props.friend);
  }

  render() {
    return (
      <div className="font-weight-bold text-primary d-flex justify-content-between">
        <Link to={`/friends/${this.props.friend.id}`}>
          {this.props.friend.firstName} {this.props.friend.lastName}
        </Link>
        <div className="ml-3">
          <button onClick={this.onUpButton}>▲</button>
          <button onClick={this.onDownButton}>▼</button>
        </div>
      </div>
    )
  }
}

export default connect()(FriendCard);
