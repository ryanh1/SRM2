import React from 'react';
import ReactDOM from 'react-dom';
import LocationsSelector from './LocationsSelector';
import AddFriendPage from './AddFriendPage';

const TopPanel = () => (
  <div className="border border-secondary mt-5 mb-5 p-3 d-flex">
    <div className="m-3">
      <h3>Locations</h3>
      <LocationsSelector />
    </div>
    <div className="text-center">
      <h3 className="m-2">Add a new friend</h3>
      <AddFriendPage function="add"/>
    </div>
  </div>
)

export default TopPanel;
