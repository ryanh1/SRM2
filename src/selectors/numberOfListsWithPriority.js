const numberOfListsWithPriority = (lists, priority) => {
  var result = 0;
  lists.forEach( (list) => {
    if (list == priority) {
      result = result + 1;
    }
  });
  return result;
}

export default numberOfListsWithPriority;
