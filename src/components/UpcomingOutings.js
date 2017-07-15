import React, {Component} from 'react';
import Fetch from 'react-fetch'

class RequestSummary extends Component {
  render() {
    return (
      <div>
        <div className="row">
          <div className="col-md-10">
            <div className="left-align oxsub-p">
              {this.props.outingSummary.crew} looking for a {this.props.outingSummary.subRequired} <br />
              For an outing on {this.props.outingSummary.date}.
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
    return (
      <Fetch url="https://oxsub-api.herokuapp.com/outings">
        <OutingsIterator/>
      </Fetch>
    );
  }
}

class OutingsIterator extends React.Component {
  render() {
    let outings = this.props;
    if (JSON.stringify(outings).length > 2) {
      console.log(outings);
      var rows = [];
      Object.keys(outings).map(function (key) {
        let outingSummary = outings[key];
        rows.push(<RequestSummary outingSummary={outingSummary} key={outingSummary.uuid}/>);
      });
    } else {
      console.log("empty")
    }
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="panel panel-default transparent-panel">
              <div className="panel-heading">
                <div className="row">
                  <div className="col-md-6">
                    <div className="panel-title oxsub-p">Upcoming Outings</div>
                  </div>
                  <div className="col-md-6">
                    <div className="panel-title oxsub-p-right">Filter</div>
                  </div>
                </div>
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
