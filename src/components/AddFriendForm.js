import React from 'react';
import ReactDOM from 'react-dom';

class AddFriendForm extends React.Component {

  // constructor
  constructor(props) {
    super(props);
    this.state = {
      firstName: props.friend ? props.friend.firstName : '',
      lastName: props.friend ? props.friend.lastName : '',
      events: props.friend ? props.friend.events: []
    }
  }

  // defined functions
  onFirstNameChange = (e) => {
    const firstName = e.target.value;
    this.setState(() => ({firstName}));
  }

  onLastNameChange = (e) => {
    const lastName = e.target.value;
    this.setState(() => ({lastName}));
  }

  onPriorityChange = (e) => {
    const priority = e.target.value;
    this.setState(() => ({priority}));
  }

  onSubmit = (e) => {
    e.preventDefault();
    console.log('Called onSubmit function within AddFriendForm');
    this.props.onSubmit({
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      priority: this.state.priority
    })
  }

  // Render component
  render() {
    return (
      <div>
        <h2>Add a new friend.</h2>
        <form onSubmit={this.onSubmit}>
          <input type="text" placeholder="First Name" value={this.state.firstName} onChange={this.onFirstNameChange}/>
          <input type="text" placeholder="Last Name" value={this.state.lastName} onChange={this.onLastNameChange}/>
          <input type="number" placeholder="priority" value={this.state.priority} onChange={this.onPriorityChange}/>
          <button>Save Friend</button>
        </form>
      </div>
    )
  }

}

export default AddFriendForm;
