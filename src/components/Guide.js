import React from 'react';
import ReactDOM from 'react-dom';
import GuideModal from './GuideModal';

const Guide = (props) => (
  <div>
    {( props.friends.length === 1 && props.guides === 0 && props.page === "FriendKanban" ) ? (<GuideModal modalOpen={true} message="⬅ Click on your friend's name to edit information."/>) : (<div></div>)}
    {( props.friends.length === 1 && props.guides === 1 && props.page === "EditFriend" ) ?   (<GuideModal modalOpen={true} message='After you talk with a friend, write notes about your discussion.  For example, you could write: "He told me that he likes the New York Yankees."  Then click "Save Friend." ⬈'/>) : (<div></div>) }
    {console.log(props.friends.length, props.guides, props.page)}
    {/*
    {props.friends.length === 0 && props.guides === 0 ? (<GuideModal modalOpen={true} message="Think of a friend you met recently.  Add him/her to a list here: ⬆"/>) : (<div></div>)}
    {props.friends.length === 1 && props.guides === 5 ? (<GuideModal modalOpen={true} message="Think of a work colleague you want to keep in touch with.  Add that person as a new friend ⬆.  Choose a different list number to separate work from personal."/>) : (<div></div>)}
    {props.friends.length === 2 && props.guides === 6 ? (<GuideModal modalOpen={true} message='When you have completed a "to do" for a friend, click the ✓ button.  That friend will be moved to list 0.'/>) : (<div></div>)}
    {props.friends.length === 2 && props.guides === 7 && props.lists.includes(0) ? (<GuideModal modalOpen={true} message='Now you can use Buddy to create more meaningful relationships.  Click the Contact link to share your feedback ⬈.  Enjoy!'/>) : (<div></div>)}
    {props.friends.length === 1 && props.events.length == 2 && props.guides == 4 ? (<GuideModal modalOpen={true} message='What is the next thing you want to do with your friend?  Have coffee?  Send a birthday card?  Write that in the "to do" box in the top right ⬈.  Then click "Save Friend."'/>) : (<div></div>)}
    {props.friends.length === 1 && props.events.length == 1 && props.guides == 3 ? (<GuideModal modalOpen={true} message='Before you see your friend again, review your notes ⬇.  When you talk with your friend, mention personal details from your notes to show that you care.  Now, add one more note ⬇.'/>) : (<div></div>)}
    */}
  </div>
)

export default Guide;
