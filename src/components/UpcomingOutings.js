import React, { Component } from 'react';

class RequestSummary extends Component {
  render() {
    return (
      <div>
        <div className="row">
          <div className="col-md-10">
            <div className="left-align oxsub-p">
              {this.props.outingSummary.crew} looking for a {this.props.outingSummary.subRequired} <br />
              For an outing at {this.props.outingSummary.time} on {this.props.outingSummary.date}.
            </div>
          </div>
          <div className="col-md-2">
            <button type="button" className="btn btn-sm oxsub-button">Respond</button>
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
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="panel panel-default transparent-panel">
              <div className="panel-heading">
                <h3 className="panel-title oxsub-p">Upcoming Outings</h3>
              </div>
              <div className="panel-body">
                {rows}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default UpcomingOutings
