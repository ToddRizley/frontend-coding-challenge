import React, { Component } from 'react';

export default class SearchForm extends Component {

  render(){
    return(
    <form className='search-form col-xs-6'>
      <div className="form-group has-feedback">
        <label className="control-label">Search Events By Title</label>
        <input
          onChange={this.props.searchByTitle.bind(this)}
          type='text'
          className="form-control"
          placeholder='Search by event title'
        />
      <i className="glyphicon glyphicon-search form-control-feedback"></i>
      </div>
    </form>
  )};
};
