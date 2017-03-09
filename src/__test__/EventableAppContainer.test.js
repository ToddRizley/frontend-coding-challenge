import React from 'react';
import EventableAppContainer from '../EventableAppContainer'
import renderer from 'react-test-renderer';

describe('<EventableAppContainer/>', () => {
   it('renders correctly', () => {
    const rendered = renderer.create(
      <EventableAppContainer />
    );
    expect(rendered.toJSON()).toMatchSnapshot();
  });
});
