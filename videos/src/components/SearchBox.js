import './SearchBox.css';

import React from 'react';


class SearchBox extends React.Component {
  state = { value: '' };

  onChange = (event) => {
    this.setState( {value: event.target.value });
  };

  onSubmit = (event) => {
    event.preventDefault();
    this.props.onSearch(this.state.value);
  };

  render() {
    return (
      <div className="search-box ui section">
        <form className="ui form" onSubmit={this.onSubmit}>
        <div className="field">
          <label>Search:</label>
          <input onChange={this.onChange} value={this.state.value} ></input>
          <button type="submit">Search</button>
        </div>
        </form>
      </div>
    );
  }
}

export default SearchBox;
