import React, { Component } from 'react';
import { formatDate } from './utils.js';

class Event extends Component {

  render() {
    return (
      <div className='row col-xs-12'>
        {this.props.eventInfo.title} | From: {formatDate(this.props.eventInfo.start_time)} To: {formatDate(this.props.eventInfo.end_time)}
      </div>
  )};
};

export default Event;
