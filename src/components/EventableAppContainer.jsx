import React, { Component } from 'react';
import 'whatwg-fetch';
import EventListContainer from './EventListContainer';
import AddEventForm from './AddEventForm';
import SearchForm from './SearchForm';
import EventSorter from './EventSorter';
import { validateDates, sortList } from '../utils';

class EventableAppContainer extends Component {

  constructor(props) {
    super(props);
    this.state = {
      eventList: {},
      currentListView: {},
    };
  }

  componentWillMount() {
    const APITOKEN = 'Token 7761e7e3b25a1d6d315901fcd7180d971f77ea2e';
    const URL = 'https://api.eventable.com/v1/events/';
    const obj = {
      method: 'GET',
      headers: {
        Authorization: APITOKEN,
      },
    };

    fetch(URL, obj)
  .then(res => res.json())
  .then((resJson) => {
    this.setState({ eventList: resJson.results, currentListView: resJson.results });
  });
  }

  searchByTitle(event) {
    event.preventDefault();
    const filterBy = String(event.target.value).toLowerCase();
    const length = filterBy.length;

    if (length > 0) {
      const filterEvents =
      this.state.currentListView.filter(
        eventObj => (eventObj.title.slice(0, length).toLowerCase() === filterBy));
      this.setState({ currentListView: filterEvents });
    } else {
      this.setState({ currentListView: this.state.eventList });
    }
  }


  handleSubmit(event) {
    event.preventDefault();
    const title = event.target[0].value;
    const startTime = event.target[1].value;
    const endTime = event.target[2].value;
    if (validateDates(startTime, endTime)) {
      const eventList = this.state.eventList;
      eventList.push({ title, start_time: startTime, end_time: endTime });
      this.setState({ eventList });
    }
  }

  handleChange(event) {
    const sortType = event.target.value;
    const sortedList = sortList(sortType, this.state.currentListView, this.state.eventList);
    this.setState({ currentListView: sortedList });
  }

  render() {
    return (
      <div className="col-xs-12">
        <SearchForm
          searchByTitle={this.searchByTitle.bind(this)}
        />
        <EventSorter
          handleChange={this.handleChange.bind(this)}
        />
        <EventListContainer
          currentListView={this.state.currentListView}
        />
        <AddEventForm
          handleSubmit={this.handleSubmit.bind(this)}
        />
      </div>
    );
  }
}

export default EventableAppContainer;
