const numberOfListsWithPriority = (lists, priority) => {
  var result = 0;
  const priorities = lists.map( (list) => {return list.priority} )
  priorities.forEach( (list) => {
    if (list == priority) {
      result = result + 1;
    }
  });
  return result;
}

export default numberOfListsWithPriority;
