import React from 'react';
import ReactDOM from 'react-dom';
import {Link} from 'react-router-dom';


import ListList from './ListList.js';
import AddListPage from './AddListPage.js';

const ManageLists = () => (
  <div className="text-center">
    <div className="mt-4">
      <ListList />
    </div>
    <div className="text-center d-inline-flex border border-secondary m-5">
      <AddListPage />
    </div>
    <div>
      <Link to='/'>Back</Link>
    </div>
  </div>
);

export default ManageLists;
