import React from 'react';
import ReactDOM from 'react-dom';
import {connect} from 'react-redux';
import {findDOMNode} from 'react-dom'
import ReactTooltip from 'react-tooltip';

import {history} from '../routers/AppRouter';
import {defaultPriority, defaultName0} from '../system/variables';
import selectFriendsByPriority from '../selectors/selectFriendsByPriority';

class AddFriendForm extends React.Component {

  // constructor
  constructor(props) {
    super(props);
    this.state = {
      id: props.friend ? props.friend.id : '',
      firstName: props.friend ? props.friend.firstName : '',
      lastName: props.friend ? props.friend.lastName : '',
      priority: props.friend ? props.friend.priority : (props.lists.length != 0 ? props.lists[0].priority : defaultPriority),
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
    if (priority == 'New') {
      history.push('/managelists');
    }
    const orderInList = selectFriendsByPriority(this.props.friends, priority).length + 1;
    this.setState(() => ({priority, orderInList}));
    console.log('new priority: ', priority);
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
    console.log('Called onSubmit function within AddFriendForm: ','priority: ', this.state.priority);
    this.props.onSubmit({
      id: this.state.id,
      firstName: this.state.firstName == '' ? 'First' : this.state.firstName,
      lastName: this.state.lastName == '' ? 'Last' : this.state.lastName,
      priority: this.state.priority,
      orderInList: this.state.orderInList,
      todo: this.state.todo,
      location: this.state.location == '' ? 'Unknown' : this.state.location
    })
  }

  // Render component
  render() {
    return (
      <div className="pt-3">
        <form onSubmit={this.onSubmit}>

          {/* First Name */}
          <input
            type="text"
            placeholder={!!this.props.friend ? this.state.firstName : "First Name"}
            value={this.state.firstName}
            onChange={this.onFirstNameChange}
          />

          {/* Last Name */}
          <input
            type="text"
            placeholder={!!this.props.friend ? this.state.lastName : "Last Name"}
            value={this.state.lastName}
            onChange={this.onLastNameChange}
          />

          {/* List Priority */}
          {this.state.id === '' ? <span></span> : <span className="ml-1">List: </span>}
          <a data-tip data-for='priority'>
            <select
              name="priority"
              id="priorityBox"
              value={this.state.priority}
              onChange={this.onPriorityChange}
            >
              {
                this.props.lists.map(
                  (list) => {
                    return <option value={list.priority}>
                      {list.priority}: {list.name}
                      </option>
                  }
                )
              }
              <option value='New'>New list</option>
            </select>
          </a>
          <ReactTooltip id='priority' place="bottom" type="dark" effect="solid">
            <span>Lists let you group friends by the next action you want to take.</span>
          </ReactTooltip>

          {/* Location */}
          {this.state.id === '' ? <span></span> : <span className="ml-1">Location: </span>}
          <input
            type="text"
            placeholder={!!this.props.friend ? this.state.location : "Location"}
            value={this.state.location}
            onChange={this.onLocationChange}
          />

          {/* To do */}
          {this.state.id === '' ? <span></span> : <span className="ml-1">To do: </span>}
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
      friends: state.friends,
      lists: state.lists
    };
};

export default connect(mapStateToProps)(AddFriendForm);
