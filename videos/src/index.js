import React from 'react';
import ReactDOM from 'react-dom';
import SearchBox from './components/SearchBox';

class App extends React.Component {

  onSearch = (term) => {
    console.log(`Searching for: ${term}`);
  };

  render() {
    return (
        <div className="ui container">
          <SearchBox onSearch={this.onSearch} />
        </div>
    );
  }
};

ReactDOM.render(<App />, document.querySelector('#root'));
