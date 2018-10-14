import React from 'react';
import ReactDOM from 'react-dom';

class AddListForm extends React.Component {

  // constructor
  constructor(props) {
    super(props);
    this.state = {
      priority: props.priority ? props.priority : 0,
    }
  }

  onPriorityChange = (e) => {
    const priority = e.target.value;
    this.setState(() => ({priority}));
  }

  onSubmit = (e) => {
    e.preventDefault();
    console.log(`New list button clicked with priority: ${this.state.priority}.`)
    this.props.onSubmit(this.state.priority);
  }

  // Render component
  render() {
    return (
      <div>
        <h2>Add a new list.</h2>
        <form onSubmit={this.onSubmit}>
          <input type="number" placeholder="Priority" value={this.state.priority} onChange={this.onPriorityChange}/>
          <button>Save List</button>
        </form>
      </div>
    )
  }

}

export default AddListForm;
