import React, { Component } from 'react';

class AddEventForm extends Component {

  render() {
    return (
      <div className='event-form'>
        Add Your Event:
        <form ref='eventForm' onSubmit={this.props.handleSubmit.bind(this)}>
          Event Name: <input name='event-title' placeholder='Add Event Title' type='text' required/>
          Start: <input name='event-start' placeholder='Start Date/Time' type='datetime-local' required/>
          End: <input name='event-end' placeholder='End Date/Time' type='datetime-local' required/>
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

export default AddEventForm;
