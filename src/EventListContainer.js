import React, { Component } from 'react';
import Event from './Event';

class EventListContainer extends Component {

  displayEventList(events){
    if (Object.keys(events).length !== 0){
      return (events.map( (event)=> {
        return(<Event key={event.id} eventInfo={event} />)
      });
    )};
  };

  render() {
    return (
      <div className='container col-xs-12'>
        <h4>Sort Events</h4>
        <select ref='sortType' className='col-xs-4'onChange={this.props.handleChange.bind(this)}>
          <option value='startTime'>Sort By Start Time</option>
          <option value='title'>Sort By Name</option>
        </select>
        <div className='event-list col-xs-12'>
          <h3 className='col-xs-6'>Event List</h3>
          {this.displayEventList(this.props.currentListView)}
        </div>
      </div>
    );
  };
};

export default EventListContainer;
