import React from 'react';
import ReactDOM from 'react-dom';
import moment from 'moment';

export default class AddEventForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      note: props.event ? props.event.note : '',
      date: moment().format('MMMM Do YYYY, h:mm:ss a'),
      friendID: props.friendID,
      error: ''
    }
  }

  onNoteChange = (e) => {
    const note = e.target.value;
    this.setState(() => ({note}))
  }

  onDateChange = (e) => {
    const date = e.target.value;
    this.setState(() => ({date}))
  }

  onSubmit = (e) => {
    e.preventDefault();
    if (!this.state.date || !this.state.note) {
      this.setState(() => ({error: 'Please provide description and amount.'}));
    } else {
      this.setState(() => ({error: ''}));
      this.props.onSubmit({
        note: this.state.note,
        date: this.state.date,
        friendID: this.state.friendID
      });
    }
  }


  render() {
    return (
      <div>
        <form onSubmit={this.onSubmit}>
          {this.state.error && <p className="form__error">{this.state.error}</p>}
          <p>{this.props.date}</p>
          <textarea
            placeholder="Add a note."
            className="textarea"
            value={this.state.note}
            onChange={this.onNoteChange}
          />
          <button>Submit</button>
        </form>
      </div>
    )
  }
}
