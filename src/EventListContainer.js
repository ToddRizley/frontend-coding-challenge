import React, { Component } from 'react';
import Event from './Event'

class EventListContainer extends Component {
  displayEventList(events){
    if (Object.keys(events).length !== 0){
      return (events.map( (event)=> {
        return(<Event key={event.id} eventInfo={event} />)
      })
    )}
  }
  
  render() {
    return (
      <div className='container'>
        <select ref='sortType' onChange={this.props.handleChange.bind(this)}>
          <option value='all'>All</option>
          <option value='startTime'>Sort By Start Time</option>
          <option value='title'>Sort By Name</option>
        </select>
        <div>
          {this.displayEventList(this.props.currentListView)}
        </div>
      </div>
    );
  }
}

export default EventListContainer;
