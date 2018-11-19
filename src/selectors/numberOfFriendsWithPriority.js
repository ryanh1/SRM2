const numberOfFriendsWithPriority = (friends, priority) => {
  var result = 0;
  friends.forEach( (friend) => {
    if (friend.priority == priority) {
      result = result + 1;
    }
  });
  return result;
}

export default numberOfFriendsWithPriority;
