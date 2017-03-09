import React, { Component } from 'react';
import 'whatwg-fetch';
import EventListContainer from './EventListContainer';
import AddEventForm from './AddEventForm';
import SearchForm from './SearchForm';
import EventSorter from './EventSorter'
import {validateDates, sortList} from './utils.js';

class EventableAppContainer extends Component {

  constructor(props){
    super(props)
    this.state = {
      eventList: {},
      currentListView: {}
    }
  };

  searchByTitle(event){
    event.preventDefault()
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
  };


  handleSubmit(event){
    event.preventDefault()
    let title = event.target[0].value
    let startTime = event.target[1].value
    let endTime = event.target[2].value
    if(validateDates(startTime, endTime)) {
      var eventList = this.state.eventList
      eventList.push({title: title, start_time: startTime, end_time: endTime})
      this.setState({eventList: eventList})
    }
  };

  handleChange(event){
    var sortType = event.target.value
    var sortedList = sortList(sortType, this.state.currentListView, this.state.eventList)
    this.setState({currentListView: sortedList})
  };

  componentWillMount(){
    const APITOKEN = "Token 7761e7e3b25a1d6d315901fcd7180d971f77ea2e"
    const URL = 'https://api.eventable.com/v1/events/'
    var obj = {
      method: 'GET',
      headers: {
        'Authorization': APITOKEN
      }
    };

  fetch(URL, obj)
  .then( (res)=> {
    return res.json();
   })
  .then( (resJson)=> {
    this.setState({eventList: resJson['results'], currentListView: resJson['results']});
  });
 };

  render() {
    return (
      <div className='col-xs-12'>
        <AddEventForm
          handleSubmit={this.handleSubmit.bind(this)}
        />
        <SearchForm
          searchByTitle={this.searchByTitle.bind(this)}
        />
        <EventSorter
          handleChange={this.handleChange.bind(this)}
        />
        <EventListContainer
          currentListView={this.state.currentListView}
        />
      </div>
    );
  };
};

export default EventableAppContainer;
