import React, { Component } from 'react';
import Event from './Event';

class EventListContainer extends Component {

  displayEventList(events){
    if (Object.keys(events).length !== 0){
      return (events.map( (event)=> {
        return(<Event key={event.id} eventInfo={event} />)
      })
    )};
  };

  render() {
    return (
      <div className='event-list col-xs-12'>
        <div className='event-list col-xs-12'>
          <h3 className='col-xs-6'>Event List</h3>
          {this.displayEventList(this.props.currentListView)}
        </div>
      </div>
    );
  };
};

export default EventListContainer;
