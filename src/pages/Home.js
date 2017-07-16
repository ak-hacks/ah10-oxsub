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
        <Modal />
      </div>
    );
  }
}

class Modal extends React.Component {

  componentDidMount() {
    const queryString = require('query-string');
    const parsed = queryString.parse(location.search);
    let submissionStatus = parsed['find-a-sub-request-status'];
    if (submissionStatus) {
      this.buttonElement.click();
    }
  }

  render() {
    return(
      <div>
        <button type="button" ref={button => this.buttonElement = button} data-toggle="modal" data-target="#myModal" />
        <div className="modal fade" id="myModal" role="dialog">
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <button type="button" className="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                <h4 className="modal-title">All done!</h4>
              </div>
              <div className="modal-body">
                <p>You should hear from a sub soon, if one is available.</p>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home