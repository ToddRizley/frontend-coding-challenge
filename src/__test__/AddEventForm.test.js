import React from 'react';
import AddEventForm from '../components/AddEventForm';
import renderer from 'react-test-renderer';

describe('<AddEventForm/>', () => {
  var handleSubmit = jest.fn()
   it('renders correctly', () => {
    const rendered = renderer.create(
      <AddEventForm handleSubmit={handleSubmit}/>
    );
    expect(rendered.toJSON()).toMatchSnapshot();
  });
});
