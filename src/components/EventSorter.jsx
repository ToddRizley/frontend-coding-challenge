import React from 'react';

const EventSorter = props => (
  <div className="event-sorter col-xs-6">
    <label className="sorter-label">Search Events By Title</label>
    <select className="col-xs-6"onChange={props.handleChange.bind(this)}>
      <option value="startTime">Sort By Start Time</option>
      <option value="title">Sort By Name</option>
    </select>
  </div>
);


EventSorter.propTypes = {
  handleChange: React.PropTypes.func,
};

export default EventSorter;
