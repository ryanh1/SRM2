export const sortOrder = (filteredFriends) => {
  return filteredFriends.sort(function(a, b){return a.orderInList - b.orderInList});
}

export const resetOrderInList = (filteredFriends) => {
  var i;
  for (i = 0; i < filteredFriends.length; i++) {
    filteredFriends[i].orderInList = i + 1;
  }
  return filteredFriends;
}
