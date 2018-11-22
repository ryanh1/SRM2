import React from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import {Redirect} from 'react-router-dom'

import AddFriendPage from './AddFriendPage';
import EventList from './EventList.js';
import DeleteFriendOpenModalButton from './DeleteFriendOpenModalButton';
import GuideModal from './GuideModal';
import {startRemoveFriend} from '../actions/friends';


const EditFriendPage = (props) => (
  <div className="text-center">
    <h2 className="m-2">Edit friend</h2>
    {console.log('friend: ', JSON.stringify(props.friend))}

    {props.friends.length === 1 && props.events.length === 0 && props.guides == 2 ? (<GuideModal modalOpen={true} message='Type in the "Notes" box to write about what you discussed with your friend.  For example, you could write: "We talked about his new girlfriend whose name is Rachel."'/>) : (<div></div>) }
    {props.friends.length === 1 && props.events.length == 2 && props.guides == 4 ? (<GuideModal modalOpen={true} message='What is the next thing you want to do with your friend?  Have coffee?  Send a birthday card?  Write that in the "to do" box in the top right ⬈.  Then click "Save Friend."'/>) : (<div></div>)}
    {props.friends.length === 1 && props.events.length == 1 && props.guides == 3 ? (<GuideModal modalOpen={true} message='Before you see your friend again, review your notes ⬇.  When you talk with your friend, mention personal details from your notes to show that you care.  Now, add one more note ⬇.'/>) : (<div></div>)}

    <div>
      <div className="text-center d-inline-flex border border-secondary mt-5 m-3 p-3">
        <AddFriendPage friend={props.friend} function="edit" />
      </div>
    </div>
    <div className="text-center d-inline-flex border border-secondary mt-5 m-3 p-3">
      <EventList friendID={props.friend.id}/>
    </div>
    <DeleteFriendOpenModalButton
      friend={props.friend}
      history={props.history}
      modalOpen={false}
    />
    {/* <button onClick={() => {
      props.dispatch(startRemoveFriend(props.friend.id));
      props.history.push('/');
    }}>Delete</button> */}
  </div>
);


const mapStateToProps = (state, props) => {
    return {
      friend: state.friends.find((friend) => friend.id === props.match.params.id),
      friends: state.friends,
      events: state.events,
      guides: state.guides
    };
};

export default connect(mapStateToProps)(EditFriendPage);
