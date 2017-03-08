import React, { Component } from 'react';
// import moment js
class Event extends Component {

  render() {
    return (
      <div className='row'>
        Title: {this.props.eventInfo.title} | From: {this.props.eventInfo.start_time} To: {this.props.eventInfo.end_time}
      </div>
    );
  }
}

export default Event;
