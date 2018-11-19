import React from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';

import AddListForm from './AddListForm.js';
import { startAddList } from '../actions/lists'
import numberOfListsWithPriority from '../selectors/numberOfListsWithPriority'


const AddListPage = (props) => (
  <div>
    <AddListForm onSubmit={(priority) => {
      if (numberOfListsWithPriority(props.lists, priority) === 0) {
        props.dispatch(startAddList(priority));
      }
      // props.history.push('/');
    }}/>
  </div>

);

const mapStateToProps = (state) => {
  return {
    lists: state.lists,
  }
}

export default connect(mapStateToProps)(AddListPage);
