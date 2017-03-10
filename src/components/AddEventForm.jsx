import React from 'react';

const AddEventForm = props => (
  <div className="event-form container footer navbar-fixed-bottom">
    <h4>Add New Event</h4>
    <form
      className="form-group col-xs-12"
      onSubmit={props.handleSubmit.bind(this)}
    >
      <div className="col-xs-3">
            Title
            <input
              name="event-title"
              className="form-control"
              placeholder="Add Event Title"
              type="text"
              required
            />&nbsp;
      </div>
      <div className="col-xs-3">
            Start
            <input
              name="event-start"
              className="form-control"
              placeholder="Start Date/Time"
              type="datetime-local"
              required
            />&nbsp;
      </div>
      <div className="col-xs-3">
            End
            <input
              name="event-end"
              className="form-control"
              placeholder="End Date/Time"
              type="datetime-local"
              required
            />&nbsp;&nbsp;
      </div>
      <div className="col-xs-3">
        <input id="add-event-button" type="submit" value="Submit" />
      </div>
    </form>
  </div>
);


AddEventForm.propTypes = {
  handleSubmit: React.PropTypes.func,
};

export default AddEventForm;
