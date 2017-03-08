export function sortByStartTime(events){
  var sortedList =  events.sort((a, b)=> {
    return Date.parse(a.start_time) - Date.parse(b.start_time);
  });
  return sortedList
};
