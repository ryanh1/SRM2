import React from 'react';
import ReactDOM from 'react-dom';
import {Link} from 'react-router-dom';


import ListList from './ListList.js';
import AddListPage from './AddListPage.js';

const ManageLists = () => (
  <div>
    <ListList />
    <AddListPage />
    <Link to='/'>Back</Link>
  </div>
);

export default ManageLists;
