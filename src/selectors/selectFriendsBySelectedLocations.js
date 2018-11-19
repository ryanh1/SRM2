const selectFriendsBySelectedLocations = (friends, locations) => {
  var locationValues = locations.map( (location) => {
    return location.value;
  });

  return friends.filter( (friend) => {
    const locationIndex = locationValues.indexOf(friend.location);
    if (locationIndex != -1) {
      return locations[locationIndex].selected;
    }
  })
}

export default selectFriendsBySelectedLocations;
