import React from 'react';
import { shallow } from 'enzyme'
import ReactDOM from 'react-dom';
import Event from '../Event';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Event />, div);
});
