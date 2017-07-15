import React, { Component } from 'react';

class RequestSummary extends Component {
  render() {
    return (
      <div>
        <div className="row">
          <div className="col-md-9">
            <div className="left-align">
              {this.props.outingSummary.crew} looking for a {this.props.outingSummary.subRequired} <br />
              For an outing at {this.props.outingSummary.time} on {this.props.outingSummary.date}.
            </div>
          </div>
          <div className="col-md-3">
            <button type="button" className="btn btn-sm btn-info">Respond</button>
          </div>
        </div>
        <hr />
      </div>
    );
  }
}

class UpcomingOutings extends Component {
  render() {
    var rows = [];
    this.props.outingSummaries.forEach(function(outingSummary) {
      rows.push(<RequestSummary outingSummary={outingSummary} key={outingSummary.id} />);
    });
    return (
      <div className="below-nav-div">
        <div className="container">
          <div className="row">
            <div className="col-md-8">
              <div className="panel panel-default">
                <div className="panel-heading">
                  <h3 className="panel-title">Upcoming Outings</h3>
                </div>
                <div className="panel-body">
                  {rows}
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <a href="/create-new-request" className="btn btn-lg btn-primary" role="button">
                CREATE A NEW REQUEST
              </a>
            </div>
          </div>
        </div>
    </div>
    );
  }
}

export default UpcomingOutings
