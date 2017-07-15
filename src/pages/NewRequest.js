import React from 'react';
import Nav from '../components/Nav';
import NumericSelectorOptions from '../components/NumericSelectorOptions';

class NewRequest extends React.Component {

  render() {
    return (
      <div>
        <Nav />
        <div className="below-nav-div">
          <form className="form-horizontal">
            <div className="form-group">
              <label className="col-sm-2 col-sm-offset-2 control-label">I am looking for</label>
              <div className="col-sm-5">
                <label className="radio-inline">
                  <input type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1" />Stroke side rower
                </label>
                <label className="radio-inline">
                  <input type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1" />Bow side rower
                </label>
                <label className="radio-inline">
                  <input type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1" />Any side rower
                </label>
                <br />
                <label className="radio-inline">
                  <input type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1" />X-status Cox
                </label>
                <label className="radio-inline">
                  <input type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1" />S-status Cox
                </label>
                <label className="radio-inline">
                  <input type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1" />Any-status Cox
                </label>
              </div>
            </div>
            <div className="form-group">
              <label className="col-sm-2 col-sm-offset-2 control-label">How many?</label>
              <div className="col-sm-5">
                <NumericSelectorOptions start="1" count="8" />
              </div>
            </div>
            <div className="form-group">
              <label className="col-sm-2 col-sm-offset-2 control-label">Password</label>
              <div className="col-sm-5">
                <input type="password" className="form-control" id="inputPassword3" placeholder="Password" />
              </div>
            </div>
            <div className="form-group">
              <div className="col-sm-offset-2 col-sm-10">
                <button type="submit" className="btn btn-default">Sign in</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    )
  }
}

export default NewRequest
