import React, { Component } from "react";

export default class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = { term: "" }; //defaults to blank
    this.onInputChange = this.onInputChange.bind(this); //bind the expected class instance "this"
  }

  onInputChange(event) {
    console.log(event.target.value);
    this.setState({ term: event.target.value })
  }

  onFormSubmit(event) {
    event.preventDefault();
  }

  render() {
    return (
        <form onSubmit={this.onFormSubmit} className="input-group">
          <input
            placeholder="Enter Text"
            className="form-control"
            value={this.state.term}
            onChange={this.onInputChange}
          />
          <span className="input-group-btn">
            <button type="submit" className="btn btn-secondary">Submit</button>
          </span>
        </form>

    );
  }
}
