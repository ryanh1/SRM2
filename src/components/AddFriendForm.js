import React from 'react';
import ReactDOM from 'react-dom';
import {connect} from 'react-redux';

import selectFriendsByPriority from '../selectors/selectFriendsByPriority';

class AddFriendForm extends React.Component {

  // constructor
  constructor(props) {
    super(props);
    this.state = {
      id: props.friend ? props.friend.id : '',
      firstName: props.friend ? props.friend.firstName : '',
      lastName: props.friend ? props.friend.lastName : '',
      priority: props.friend ? props.friend.priority: '',
      orderInList: props.friend ? props.friend.orderInList: '',
      events: props.friend ? props.friend.events: [],
      todo: props.friend ? props.friend.todo: '',
      location: props.friend ? props.friend.location: '',
    }
  }

  // defined functions
  onFirstNameChange = (e) => {
    const firstName = e.target.value;
    const orderInList = selectFriendsByPriority(this.props.friends, this.state.priority).length + 1;
    this.setState(() => ({firstName, orderInList}));
  }

  onLastNameChange = (e) => {
    const lastName = e.target.value;
    const orderInList = selectFriendsByPriority(this.props.friends, this.state.priority).length + 1;
    this.setState(() => ({lastName, orderInList}));
  }

  onPriorityChange = (e) => {
    const priority = e.target.value;
    const orderInList = selectFriendsByPriority(this.props.friends, priority).length + 1;
    this.setState(() => ({priority, orderInList}));
  }

  onTodoChange = (e) => {
    const todo = e.target.value;
    const orderInList = selectFriendsByPriority(this.props.friends, this.state.priority).length + 1;
    this.setState(() => ({todo, orderInList}));
  }

  onLocationChange = (e) => {
    const location = e.target.value;
    const orderInList = selectFriendsByPriority(this.props.friends, this.state.priority).length + 1;
    this.setState(() => ({location, orderInList}));
  }

  onSubmit = (e) => {
    e.preventDefault();
    console.log('Called onSubmit function within AddFriendForm');
    this.props.onSubmit({
      id: this.state.id,
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      priority: this.state.priority,
      orderInList: this.state.orderInList,
      todo: this.state.todo,
      location: this.state.location
    })
  }

  // Render component
  render() {
    return (
      <div className="pt-3">
        <form onSubmit={this.onSubmit}>
          <input
            type="text"
            placeholder={!!this.props.friend ? this.state.firstName : "First Name"}
            value={this.state.firstName}
            onChange={this.onFirstNameChange}
          />
          <input
            type="text"
            placeholder={!!this.props.friend ? this.state.lastName : "Last Name"}
            value={this.state.lastName}
            onChange={this.onLastNameChange}
          />
          {this.state.id === '' ? <span></span> : <span>List: </span>}
          <input
            type="number"
            placeholder={!!this.props.friend ? this.state.priority: "List number"}
            value={this.state.priority}
            onChange={this.onPriorityChange}
          />
          {this.state.id === '' ? <span></span> : <span>Location: </span>}
          <input
            type="text"
            placeholder={!!this.props.friend ? this.state.location : "Location"}
            value={this.state.location}
            onChange={this.onLocationChange}
          />
          <input
            type="text"
            placeholder={!!this.props.friend ? this.state.todo : "To do"}
            value={this.state.todo}
            onChange={this.onTodoChange}
          />
          <button>Save Friend</button>
        </form>
      </div>
    )
  }
}

const mapStateToProps = (state, props) => {
    return {
      friends: state.friends
    };
};

export default connect(mapStateToProps)(AddFriendForm);
