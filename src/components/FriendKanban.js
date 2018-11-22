import React from 'react';
import ReactDOM from 'react-dom';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';

import FriendList from './FriendList';
import TopPanel from './TopPanel';
import GuideModal from './GuideModal';

const FriendKanban = (props) => (
  <div className="p-4">
    <TopPanel locations={props.locations}/>
    {props.friends.length === 0 && props.guides === 0 ? (<GuideModal modalOpen={true} message="Think of a friend you met recently.  Add him/her to a list here: ⬆"/>) : (<div></div>)}
    {props.friends.length === 1 && props.guides === 1 ? (<GuideModal modalOpen={true} message="⬅ Click on your friend's name to edit information."/>) : (<div></div>)}
    {props.friends.length === 1 && props.guides === 5 ? (<GuideModal modalOpen={true} message="Think of a work colleague you want to keep in touch with.  Add that person as a new friend ⬆.  Choose a different list number to separate work from personal."/>) : (<div></div>)}
    {props.friends.length === 2 && props.guides === 6 ? (<GuideModal modalOpen={true} message='When you have completed a "to do" for a friend, click the ✓ button.  That friend will be moved to list 0.'/>) : (<div></div>)}
    {props.friends.length === 2 && props.guides === 7 && props.lists.includes(0) ? (<GuideModal modalOpen={true} message='Now you can use Buddy to create more meaningful relationships.  Click the Contact link to share your feedback ⬈.  Enjoy!'/>) : (<div></div>)}
    {props.locations.length > 0 ? (<h1 className="text-center m-3">Your friends</h1>) : <div></div>}
    <div className="d-flex justify-content-between">
      {
        (!props.lists || props.lists.length === 0) ? (
          <span></span>
        ) : (
          props.lists.map( (list) => {
            return (
              <div
                className="border border-secondary"
                key={list}>
                  <FriendList priority={list} />
              </div>
            )
          })
        )
      }
    </div>
  </div>
);


const mapStateToProps = (state) => {
  return {
    lists: state.lists,
    locations: state.locations,
    friends: state.friends,
    guides: state.guides
  }
}

export default connect(mapStateToProps)(FriendKanban);
