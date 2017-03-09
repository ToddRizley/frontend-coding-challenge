import {validateDates, sortList, sortByStartTime, sortByTitle, formatDate} from '../utils.js'
import moment  from 'moment'

var currentListView = [
{title: 'event3', start_time: '2017-09-09 11:43 PM'},
{title: 'event1', start_time: '2018-09-09 11:43 PM'},
{title: 'event2', start_time: '2019-09-09 11:43 PM'}
]
var eventList = [
  {title: 'event3', start_time: '2017-09-09 11:43 PM'},
  {title: 'event1', start_time: '2018-09-09 11:43 PM'},
  {title: 'event2', start_time: '2019-09-09 11:43 PM'}
]

describe('validateDates', () => {
  var validDates = validateDates("2017-09-09", "2018-09-09")
  var invalidDates = validateDates("1987-09-09", "1601-09-09")
  it('returns true for valid dates', () => {
    expect(validDates).toBe(true);
  });
  it('returns false for invalid dates', () => {
    expect(invalidDates).toBe(false);
  });
});

describe('sortByStartTime', ()=>{
  it('chronologically sorts an array of events', ()=> {
    var sortedList = sortByStartTime(eventList)
    expect(sortedList[0].title).toBe('event3')
    expect(sortedList[1].title).toBe('event1')
    expect(sortedList[2].title).toBe('event2')
  })
});

describe('sortByTitle', ()=>{
  it('alphabetically sorts an array of events', ()=> {
    var sortedList = sortByTitle(eventList)
    expect(sortedList[0].title).toBe('event1')
    expect(sortedList[1].title).toBe('event2')
    expect(sortedList[2].title).toBe('event3')
  })
});

describe ('sortList', ()=> {
  var sortType
  var sortedList
  it('returns a sorted by title list', ()=> {
     sortType = 'title'
     sortedList = sortList(sortType, currentListView, eventList)
     expect(sortedList.length).toBe(3)
     expect(sortedList[0].title).toBe('event1')
  });
  it('returns a sorted by startTime list', ()=> {
    sortType = 'startTime'
    sortedList = sortList(sortType, currentListView, eventList)
    expect(sortedList.length).toBe(3)
    expect(sortedList[0].title).toBe('event3')
  });
  it('returns a eventList when no arg is passed', ()=> {
    sortType = ''
    sortedList = sortList(sortType, currentListView, eventList)
    expect(sortedList.length).toBe(3)
    expect(sortedList === eventList ).toBe(true)
  });

});

describe('formateDate', ()=>{
  var dateToFormat = new Date('Thu Mar 09 2017 15:20:00 GMT-0500 (EST)')
  var formatExpected = '3:20 PM 03-09-17'
  it('formats an inputted date correctly', ()=>{
    expect(formatDate(dateToFormat)).toEqual(formatExpected)
  });
});
