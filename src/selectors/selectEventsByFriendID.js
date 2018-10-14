// Get visible expenses

const selectEventsByFriendID = (events, friendID) => {
  return events.filter( (event) => {
    return (event.friendID == friendID) ? true: false;
  });
};

export default selectEventsByFriendID;
