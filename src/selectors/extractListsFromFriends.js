const extractListsFromFriends = (friends) => {
  var listsDuplicates = friends.map( (friend) => {
    return friend.priority;
  })
  var listsUnique = listsDuplicates.filter( (list, index) => {
    return listsDuplicates.indexOf(list) >= index;
  });
  return listsUnique;
}

export default extractListsFromFriends;
