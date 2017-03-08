export function sortByTitle(events){
  var sortedList = events.sort((a, b)=> {
  var nameA = a.title.toUpperCase();
  var nameB = b.title.toUpperCase();
  if (nameA < nameB) {
    return -1;
  }
  if (nameA > nameB) {
    return 1;
  }
  return 0;
  });
};
