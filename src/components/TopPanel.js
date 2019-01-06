import React from 'react';
import ReactDOM from 'react-dom';
import LocationsSelectorModal from './LocationsSelectorModal';
import AddFriendPage from './AddFriendPage';

const TopPanel = (props) => (
  <div className="border border-secondary mb-4 p-3 d-flex">
    <div className="ml-3 mt-5 mb-3 mr-2">
      { /* props.locations.length > 0 ? (<h3></h3>) : (<div> </div>) */ }
      <LocationsSelectorModal />
    </div>
    <div className="text-center">
      <h3 className="ml-3 mt-2 mr-2 m-2">Add a new friend</h3>
      <AddFriendPage function="add"/>
    </div>
  </div>
)

export default TopPanel;
