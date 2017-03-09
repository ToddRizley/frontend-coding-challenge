import moment  from 'moment'

export function validateDates(startTime, endTime){
  return Date.parse(startTime) > Date.now() && Date.parse(startTime) < Date.parse(endTime)
};

export function sortList(sortType, currentListView, eventList) {
  var sortedList
  if (sortType === 'startTime'){
    sortedList = sortByStartTime(currentListView)
  } else if (sortType === 'title'){
    sortedList = sortByTitle(currentListView)
  } else {
    sortedList = eventList
  }

  return sortedList
};

export function sortByStartTime(events) {
  var sortedList =  events.sort((a, b)=> {
    return Date.parse(a.start_time) - Date.parse(b.start_time);
  });
  return sortedList
};

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
  return sortedList
};

export function formatDate(date){
  return moment(date).format("h:mm A MM-DD-YY")
};
