import React from 'react';
import Nav from '../components/Nav';
import NumericSelectorOptions from '../components/NumericSelectorOptions';

class NewRequest extends React.Component {

  render() {
    return (
      <div>
        <Nav />
        <div className="below-nav-div container">
          <form className="form-horizontal transparent-panel" method="POST" action="https://oxsub-api.herokuapp.com/find-a-sub">
            <div className="form-group">
              <label className="col-sm-2 col-sm-offset-2 control-label">I am looking for</label>
              <div className="col-sm-5">
                <label className="radio-inline">
                  <input type="radio" name="subType" id="inlineRadio1" value="COX" checked/>Any Cox
                </label>
                <label className="radio-inline">
                  <input type="radio" name="subType" id="inlineRadio1" value="XSTATUSCOX"/>X Status Cox
                </label>
                <label className="radio-inline">
                  <input type="radio" name="subType" id="inlineRadio1" value="SSTATUSCOX"/>S Status Cox
                </label>
                <br />
                <label className="radio-inline active">
                  <input type="radio" name="subType" id="inlineRadio1" value="ROWER"/>Any Side Rower
                </label>
                <label className="radio-inline">
                  <input type="radio" name="subType" id="inlineRadio1" value="STOKESIDEROWER"/>Stroke Side Rower
                </label>
                <label className="radio-inline">
                  <input type="radio" name="subType" id="inlineRadio1" value="BOWSIDEROWER"/>Bow Side Rower
                </label>
              </div>
            </div>
            <div className="form-group">
              <label className="col-sm-2 col-sm-offset-2 control-label">How many?</label>
              <div className="col-sm-5">
                <NumericSelectorOptions start="1" count="8"/>
              </div>
            </div>
            <div className="form-group">
              <label className="col-sm-2 col-sm-offset-2 control-label">For crew</label>
              <div className="col-sm-5">
                <input type="text" name="crew" className="form-control" id="crew" placeholder="Christ Church M1"/>
              </div>
            </div>
            <div className="form-group">
              <div className="col-sm-offset-2 col-sm-10">
                <button type="submit" className="btn btn-default">Submit</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    )
  }
}

export default NewRequest
