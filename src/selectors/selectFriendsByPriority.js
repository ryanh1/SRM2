// Get visible expenses

const selectFriendsByPriority = (friends, listPriority) => {
  return friends.filter( (friend) => {
    const samePriority = (friend.priority == listPriority) ? true: false;
    return samePriority;
  });
};

export default selectFriendsByPriority;
