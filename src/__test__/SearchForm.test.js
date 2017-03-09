import React from 'react';
import SearchForm from '../SearchForm'
import renderer from 'react-test-renderer';

describe('<SearchForm/>', () => {
  var searchByTitle = jest.fn()
   it('renders correctly', () => {
    const rendered = renderer.create(
      <SearchForm searchByTitle={searchByTitle}/>
    );
    expect(rendered.toJSON()).toMatchSnapshot();
  });
});
