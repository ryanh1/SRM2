const extractLocationsFromFriends = (friends) => {
  var locationsDuplicates = friends.map( (friend) => {
    return friend.location;
  })
  var locationsUnique = locationsDuplicates.filter( (location, index) => {
    return locationsDuplicates.indexOf(location) >= index;
  });
  return locationsUnique;
}

export default extractLocationsFromFriends;
