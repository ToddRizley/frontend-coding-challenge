import React, { Component } from 'react';
export default class SearchForm extends Component {

  render(){
    return(
      <div className="searchbar">
        <input
          onChange={this.props.searchByTitle.bind(this)}
          ref='searchBar'
          type='text'
          placeholder='Search by event title'
        />
        <div className='fa fa-search' />
      </div>
  )};
};
