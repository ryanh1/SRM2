const filterOutFriendById = (friends, friendID) => {
  return friends.filter( (friend) => {
    return (friend.id != friendID) ? true: false;
  });
};

export default filterOutFriendById;
