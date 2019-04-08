import React from 'react';
import ReactDOM from 'react-dom';
import AddFriendPage from './AddFriendPage';

const TopPanel = (props) => (
  <div className="container card-2 pt-4 mb-4">
    <h3 className="text-center">Add a new friend</h3>
    <AddFriendPage className="pt-3"/>
  </div>
);

export default TopPanel;
