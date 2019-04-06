import React from 'react';
import ReactDOM from 'react-dom';

import {defaultPriority, defaultName1} from '../system/variables';

class AddListForm extends React.Component {

  // constructor
  constructor(props) {
    super(props);
    this.state = {
      priority: props.priority ? props.priority : defaultPriority,
      name: props.name ? props.name: "List"
    }
    console.log(defaultPriority, defaultName1)
  }

  onPriorityChange = (e) => {
    const priority = e.target.value;
    this.setState(() => ({priority}));
  }

  onNameChange = (e) => {
    const name = e.target.value;
    this.setState(() => ({name}));
  }

  onSubmit = (e) => {
    e.preventDefault();
    console.log(`New list button clicked with priority: ${this.state.priority}.`)
    this.props.onSubmit({
      priority: this.state.priority,
      name: this.state.name
    });
  }

  // Render component
  render() {
    return (
      <div>
        <h2>Add a new list.</h2>
        <form onSubmit={this.onSubmit}>
          <input type="number" placeholder={defaultPriority} value={this.state.priority} onChange={this.onPriorityChange}/>
          <input type="text" placeholder={defaultName1} value={this.state.name} onChange={this.onNameChange}/>
          <button>Save List</button>
        </form>
      </div>
    )
  }

}

export default AddListForm;
