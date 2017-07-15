import React from 'react';
import Nav from '../components/Nav';
import UpcomingOutings from '../components/UpcomingOutings';

var outingSummaries = [
  {"id":"1", "crew":"Christ Church M1", "subRequired":"cox", "date":"30 April 2017", "time":"2pm"},
  {"id":"2", "crew":"Christ Church M3", "subRequired":"rower - strokeside", "date":"29 April 2017", "time":"2pm"},
  {"id":"3", "crew":"Christ Church M3", "subRequired":"rower - bowside", "date":"29 April 2017", "time":"2pm"},
  {"id":"4", "crew":"Christ Church W1", "subRequired":"cox", "date":"1 May 2017", "time":"7am"},
  {"id":"5", "crew":"Christ Church W2", "subRequired":"cox", "date":"29 April 2017", "time":"5pm"}
];

class Home extends React.Component {
  render() {
    return (
      <div>
        <Nav />
        <UpcomingOutings outingSummaries={outingSummaries} />
      </div>
    );
  }
}

export default Home
