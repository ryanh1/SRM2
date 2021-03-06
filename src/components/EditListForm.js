import React from 'react';
import ReactDOM from 'react-dom';
import {connect} from 'react-redux';
import {history} from '../routers/AppRouter';

import { startEditList } from '../actions/lists'

class EditListForm extends React.Component {

  // constructor
  constructor(props) {
    super(props);
    this.state = {
      priority: props.list.priority ? props.list.priority : '',
      name: props.list.name ? props.list.name : '',
    }
  }

  onNameChange = (e) => {
    const name = e.target.value;
    this.setState(() => ({name}));
  }

  onSubmit = (e) => {
    e.preventDefault();
    this.props.dispatch(startEditList({
      priority: this.props.list.priority,
      name: this.state.name
    }));
    history.push('/');
  }

  render() {
    return (
      <div className="center-horrizontally mt-3">
        <form onSubmit={this.onSubmit} className="border p-3 border-dark">
          <div className="container">
            <div className="row">
              <label className="col">{this.props.list.priority}. </label>
              <div className="group">
                <input
                  type="text"
                  placeholder={this.state.name}
                  value={this.state.name}
                  onChange={this.onNameChange}
                />
                <span className="highlight"></span>
                <span className="bar"></span>
              </div>
            </div>
          </div>
          <div className="text-center">
            <button className="btn btn-primary card-1">Save List Name</button>
          </div>
        </form>
      </div>
    )
  }
}

const mapStateToProps = (state, props) => {
    return {
      list: state.lists.find((list) => list.priority == props.match.params.priority),
    };
};

export default connect(mapStateToProps)(EditListForm);
