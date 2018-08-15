import _ from "lodash";
import React, { Component } from "react";
import ReactDOM from "react-dom";
import API_KEY from './api-key';
import SearchBar from "./components/search_bar";
import './app.css';

class App extends Component {
    constructor(props) {
      super(props);
    }

    render() {
      return (
        <div>
          <SearchBar />
        </div>
      );
    }
  }

  export default App;
