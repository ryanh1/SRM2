import React from 'react';
import ReactDOM from 'react-dom';
import {connect} from 'react-redux';

import { startEditAccount } from '../actions/account'

class EditAccountForm extends React.Component {

  // constructor
  constructor(props) {
    super(props);
    this.state = {
      firstName: props.account ? props.account.firstName : '',
      lastName: props.account ? props.account.lastName : '',
      email: props.account ? props.account.email : ''
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

  onEmailChange = (e) => {
    const email = e.target.value;
    this.setState(() => ({email}));
  }

  onSubmit = (e) => {
    e.preventDefault();
    this.props.dispatch(startEditAccount({
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      email: this.state.email
    }));
  }

  // Render component
  render() {
    return (
      <div className="center-horrizontally mt-3">
        <form onSubmit={this.onSubmit} className="border p-3 border-dark">
          <div className="container">
            <div className="row">
              <label className="col">First Name</label>
              <input
                type="text"
                placeholder={!!this.props.account ? this.state.firstName : "First Name"}
                value={this.state.firstName}
                onChange={this.onFirstNameChange}
                className="col-md-7"
              />
            </div>
            <div className="row">
              <label className="col">Last Name</label>
              <input
                type="text"
                placeholder={!!this.props.account ? this.state.lastName : "Last Name"}
                value={this.state.lastName}
                onChange={this.onLastNameChange}
                className="col-md-7"
              />
            </div>
            <div className="row">
              <label className="col">Email</label>
              <input
                type="text"
                placeholder={!!this.props.account ? this.state.email : "Email"}
                value={this.state.email}
                onChange={this.onEmailChange}
                className="col-md-7"
              />
            </div>
          </div>
          <div className="text-center">
            <button className="mt-3">Save Account Details</button>
          </div>
        </form>
      </div>
    )
  }
}

const mapStateToProps = (state, props) => {
    return {
      account: state.account
    };
};

export default connect(mapStateToProps)(EditAccountForm);
