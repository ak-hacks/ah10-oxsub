import React, {Component} from 'react';
import Fetch from 'react-fetch'

class RequestSummary extends Component {
  render() {
    return (
      <div>
        <div className="row">
          <div className="col-md-10">
            <div className="left-align oxsub-p">
              <b className="oxsub-orange-in-para">{this.props.outingSummary.crew}</b> looking for a {this.props.outingSummary.subRequired} <br />
              For an outing on <strong>{this.props.outingSummary.date}</strong>.
            </div>
          </div>
          <div className="col-md-2">
            <button type="button" className="btn btn-sm oxsub-button" data-toggle="modal" data-target="#responseConfirmationModal">
              Respond
            </button>
          </div>
        </div>
        <hr />
        <ResponseConfirmationModal />
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

class ResponseConfirmationModal extends React.Component {

  render() {
    return(
      <div>
        <div className="modal fade" id="responseConfirmationModal" role="dialog">
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <button type="button" className="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                <h4 className="modal-title">Confirm your availability</h4>
              </div>
              <div className="modal-body">
                <p>
                  Once you confirm, the crew will been notified that you are available to sub. If they decide to take
                  up your offer, they will get in touch via email.
                </p>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-default" data-dismiss="modal">Cancel</button>
                <button type="button" className="btn oxsub-button" data-dismiss="modal">Confirm</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default UpcomingOutings
