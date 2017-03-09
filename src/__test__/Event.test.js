import React from 'react';
import Event from '../Event'
import renderer from 'react-test-renderer';

describe('<Event/>', () => {
   it('renders correctly', () => {
    const eventInfo = { id: 1, title: 'Event One', start_time: '7:00 PM 11-24-16', end_time: '9:00 PM 11-24-16' };
    const rendered = renderer.create(
      <Event key={eventInfo.id} eventInfo={eventInfo} />
    );
    expect(rendered.toJSON()).toMatchSnapshot();
  });
});
