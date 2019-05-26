import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';
import SeasonDisplay from './SeasonDisplay';

class App extends React.Component {

  constructor(props) {
    super(props);
    //oly time we use direct assignment of state
    this.state = {};
  }

  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      //setState is the only way to update state
      //setState is only adding properties, existing properies are untouched
      (position) => this.setState({ lat: position.coords.latitude}),
      (err) => this.setState({ errorMessage: err.message })
    );
  }


  render() {

    if(this.state.errorMessage && !this.state.lat) {
      return <div>Error: {this.state.errorMessage}</div>; //single line jsx terminates with semi
    }

    if(!this.state.errorMessage && this.state.lat) {
      return <SeasonDisplay lat={this.state.lat} />;
    }

    return <div>         Loading!      </div>;
  }
}

ReactDOM.render(
  <App />,
  document.querySelector('#root')
);
