import moment from 'moment';

export function validateDates(startTime, endTime) {
  return Date.parse(startTime) > Date.now() && Date.parse(startTime) < Date.parse(endTime);
}
export function sortByStartTime(events) {
  const sortedList = events.sort((a, b) => Date.parse(a.start_time) - Date.parse(b.start_time));
  return sortedList;
}

export function sortByTitle(events) {
  const sortedList = events.sort((a, b) => {
    const nameA = a.title.toUpperCase();
    const nameB = b.title.toUpperCase();
    if (nameA < nameB) {
      return -1;
    }
    if (nameA > nameB) {
      return 1;
    }
    return 0;
  });
  return sortedList;
}

export function sortList(sortType, currentListView, eventList) {
  let sortedList;
  if (sortType === 'startTime') {
    sortedList = sortByStartTime(currentListView);
  } else if (sortType === 'title') {
    sortedList = sortByTitle(currentListView);
  } else {
    sortedList = eventList;
  }

  return sortedList;
}

export function formatDate(date) {
  return moment(date).format('h:mm A MM-DD-YY');
}
