import React from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';

import AddListForm from './AddListForm.js';
import { startAddFullList } from '../actions/lists'
import numberOfListsWithPriority from '../selectors/numberOfListsWithPriority'
import {history} from '../routers/AppRouter';


const AddListPage = (props) => (
  <div>
    <AddListForm onSubmit={(list) => {
      if (numberOfListsWithPriority(props.lists, list.priority) === 0) {
        props.dispatch(startAddFullList(list));
        history.push('/');
      }
    }}/>
  </div>

);

const mapStateToProps = (state) => {
  return {
    lists: state.lists,
  }
}

export default connect(mapStateToProps)(AddListPage);
