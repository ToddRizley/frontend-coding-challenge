import React from 'react';

const SearchForm = props => (
  <form className="search-form col-xs-6">
    <div className="form-group has-feedback">
      <label className="control-label">Search Events By Title</label>
      <input
        onChange={props.searchByTitle.bind(this)}
        type="text"
        className="form-control"
        placeholder="Search by event title"
      />
      <i className="glyphicon glyphicon-search form-control-feedback" />
    </div>
  </form>
);

SearchForm.propTypes = {
  searchByTitle: React.PropTypes.func,
};

export default SearchForm;
