import React from 'react';
import EventListContainer from '../EventListContainer'
import renderer from 'react-test-renderer';

describe('<EventListContainer/>', () => {
  var handleChange = jest.fn()
  var currentListView= [{ id: 1, title: 'Event One', start_time: '7:00 PM 11-24-16', end_time: '9:00 PM 11-24-16' }]
   it('renders correctly', () => {
    const rendered = renderer.create(
      <EventListContainer currentListView={currentListView} handleChange={handleChange}/>
    );
    expect(rendered.toJSON()).toMatchSnapshot();
  });
});
