import React from 'react';
import EventSorter from '../components/EventSorter'
import renderer from 'react-test-renderer';

describe('<EventSorter/>', () => {
  var handleChange = jest.fn()
   it('renders correctly', () => {
    const rendered = renderer.create(
      <EventSorter handleChange={handleChange} />
    );
    expect(rendered.toJSON()).toMatchSnapshot();
  });
});
