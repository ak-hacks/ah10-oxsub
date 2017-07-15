import React from 'react';
import Nav from '../components/Nav';
import UpcomingOutings from '../components/UpcomingOutings';
import Introduction from '../components/introduction/introduction.js'

class Home extends React.Component {
  render() {
    return (
      <div>
        <Nav />
        <Introduction/>
        <UpcomingOutings/>
      </div>
    );
  }
}

export default Home