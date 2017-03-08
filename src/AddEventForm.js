import React, { Component } from 'react';

class AddEventForm extends Component {

  render() {
    return (
      <div className='event-form'>
      <h3>Add New Event:</h3>
      <form className='form-group col-xs-12' ref='eventForm' onSubmit={this.props.handleSubmit.bind(this)}>
            <div className='col-xs-3'>
              Event Name: <input name='event-title' className="form-control" placeholder='Add Event Title' type='text' required/>&nbsp;
            </div>
            <div className='col-xs-3'>
              Start: <input name='event-start' className="form-control" placeholder='Start Date/Time' type='datetime-local' required/>&nbsp;
            </div>
            <div className='col-xs-3'>
              End: <input name='event-end' className="form-control" placeholder='End Date/Time' type='datetime-local' required/>&nbsp;&nbsp;
            </div>
            <div className='col-xs-3'>
              <button className='btn btn-primary' type="button" value="Submit">Submit</button>
          </div>
        </form>
      </div>
    );
  }
}

export default AddEventForm;
