import React, { Component } from 'react';
import './App.css';
import 'whatwg-fetch';
import EventListContainer from './EventListContainer'
import AddEventForm from './AddEventForm'
import SearchForm from './SearchForm'

class EventableContainer extends Component {

  constructor(props){
    super(props)
    this.state = {
      eventList: {},
      currentListView: {}
    }
  }

  searchByTitle(event){
      var filterBy = String(event.target.value).toLowerCase()
      var length = filterBy.length

      if ( length > 0 ) {
        var filterEvents = this.state.currentListView.filter( (event)=> {
          return (event.title.slice(0, length).toLowerCase() === filterBy)
          })
        this.setState({currentListView: filterEvents})
      } else {
        this.setState({currentListView: this.state.eventList})
      }
  }

  handleSubmit(event){
    event.preventDefault()
    let title = event.target[0].value
    let startTime = event.target[1].value
    let endTime = event.target[2].value

    if(this.validateDates(startTime, endTime)) {
      var eventList = this.state.eventList
      eventList.push({title: title, start_time: startTime, end_time: endTime})
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

  handleChange(event){
    var sortType = event.target.value
    var sortedList
    if (sortType === 'startTime'){
      sortedList = this.sortByStartTime(this.state.currentListView)
    } else if (sortType === 'title'){
      sortedList = this.sortByTitle(this.state.currentListView)
    } else {
      sortedList = this.state.eventList
    }
    this.setState({currentListView: sortedList})
  }

  componentWillMount(){
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

 validateDates(startTime, endTime){
   return Date.parse(startTime) > Date.now() && Date.parse(startTime) < Date.parse(endTime)
 }

  render() {
    return (
      <div className='container'>
        <AddEventForm
          handleSubmit={this.handleSubmit.bind(this)}
          eventList={this.state.eventList}
        />
        <EventListContainer
          handleChange={this.handleChange.bind(this)}
          currentListView={this.state.currentListView}
          eventList={this.state.eventList}
        />
        <SearchForm
          currentListView={this.state.currentListView}
          eventList={this.state.eventList}
          searchByTitle={this.searchByTitle.bind(this)}
        />
      </div>
    );
  }
}

export default EventableContainer;
