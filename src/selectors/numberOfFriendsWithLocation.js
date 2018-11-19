const numberOfFriendsWithLocation = (friends, location) => {
  var result = 0;
  friends.forEach( (friend) => {
    if (friend.location == location) {
      result = result + 1;
    }
  });
  return result;
}

export default numberOfFriendsWithLocation;
