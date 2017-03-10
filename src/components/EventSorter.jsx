import React, { Component } from 'react';

export default class EventSorter extends Component {

  render(){
    return(
      <div className='event-sorter col-xs-6'>
        <label className="sorter-label">Search Events By Title</label>
        <select ref='sortType' className='col-xs-6'onChange={this.props.handleChange.bind(this)}>
          <option value='startTime'>Sort By Start Time</option>
          <option value='title'>Sort By Name</option>
        </select>
      </div>
  )};
};

EventSorter.propTypes = {
  handleChange: React.PropTypes.func
};
