const sortFriendsInList = (friend1, friend2) => {
  if (friend1.orderInList < friend2.orderInList) {
    return -1;
  } else if (friend1.orderInList > friend2.orderInList) {
    return 1;
  }
  return 0;
}

export default sortFriendsInList;
