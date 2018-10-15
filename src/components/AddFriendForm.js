import React from 'react';
import ReactDOM from 'react-dom';

class AddFriendForm extends React.Component {

  // constructor
  constructor(props) {
    super(props);
    this.state = {
      id: props.friend ? props.friend.id : '',
      firstName: props.friend ? props.friend.firstName : '',
      lastName: props.friend ? props.friend.lastName : '',
      priority: props.friend ? props.friend.priority: '',
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
      id: this.state.id,
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
            placeholder={!!this.props.friend ? this.state.priority: "priority"}
            value={this.state.priority}
            onChange={this.onPriorityChange}
          />
          <button>Save Friend</button>
        </form>
      </div>
    )
  }

}

export default AddFriendForm;
