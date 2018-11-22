import React from 'react';
import ReactDOM from 'react-dom';
import LocationsSelector from './LocationsSelector';
import AddFriendPage from './AddFriendPage';

const TopPanel = (props) => (
  <div className="border border-secondary mb-4 p-3 d-flex">
    <div className="ml-3 mt-2 mb-3 mr-2">
      { props.locations.length > 0 ? (<h3>Locations</h3>) : (<div></div>) }
      <LocationsSelector />
    </div>
    <div className="text-center">
      <h3 className="ml-3 mt-2 mr-2 m-2">Add a new friend</h3>
      <AddFriendPage function="add"/>
    </div>
  </div>
)

export default TopPanel;
