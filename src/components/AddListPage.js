import React from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';

import AddListForm from './AddListForm.js';
import { startAddList } from '../actions/lists'

const AddListPage = (props) => (
  <div>
    <AddListForm onSubmit={(priority) => {
      console.log(`Add list dispatched with priority ${priority}.`)
      props.dispatch(startAddList(priority));
      // props.history.push('/');
    }}/>
  </div>

);

export default connect()(AddListPage);
