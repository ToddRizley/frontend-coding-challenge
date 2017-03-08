import React, { Component } from 'react';
import './App.css';
import 'whatwg-fetch';
import EventListContainer from './EventListContainer'
import AddEventForm from './AddEventForm'

class EventableContainer extends Component {
  constructor(){
    super()
    this.state = {
      eventList: {},
      currentListView: {}
    }
  }

  handleSubmit(){
    event.preventDefault()
    let startTime = this.refs.eventForm['event-start'].value
    let endTime = this.refs.eventForm['event-end'].value
    let title = this.refs.eventForm['event-title'].value
    if(this.validateDates(startTime, endTime)) {
      var eventList = this.props.eventList
      eventList = eventList.push({title: title, start_time: startTime, end_time: endTime})
      debugger
      this.setState({eventList: eventList})
    }
  }

  sortByTitle(events){
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

  sortByStartTime(events){
    var sortedList =  events.sort((a, b)=> {
      return Date.parse(a.start_time) - Date.parse(b.start_time);
    });
    return sortedList
  };

  handleChange(){
    var sortType = this.refs.sortType.value
    var sortedList
    if (sortType === 'startTime'){
      sortedList = this.props.sortByStartTime(this.props.currentListView)
    } else if (sortType === 'title'){
      sortedList = this.props.sortByTitle(this.props.currentListView)
    } else {
      sortedList = this.props.eventList
    }
    this.setState({currentListView: sortedList})
  }

  componentDidMount(){
    const APITOKEN = "Token 7761e7e3b25a1d6d315901fcd7180d971f77ea2e"
    const URL = 'https://api.eventable.com/v1/events/'
    var obj = {
    method: 'GET',
    headers: {
      'Authorization': APITOKEN
    } }

  fetch(URL, obj)
  .then( (res)=> {
    return res.json();
   })
  .then( (resJson)=> {
    this.setState({eventList: resJson['results'], currentListView: resJson['results']});
   })
 }

  render() {
    return (
      <div className='container'>
        <AddEventForm
          handleSubmit={this.handleSubmit}
          eventList={this.state.eventList}
        />
        <EventListContainer
          handleChange={this.handleChange}
          currentListView={this.state.currentListView}
          eventList={this.state.eventList}
          sortByTitle={this.sortByTitle}
          sortByStartTime={this.sortByStartTime}
        />
        {/* <SearchFormComponent /> */}
      </div>
    );
  }
}

export default EventableContainer;
