import React from 'react';

export default class NumericSelectorOptions extends React.Component {

  render() {
    let rows = []
    for (var i = this.props.start; i < parseInt(this.props.start)+parseInt(this.props.count); i++) {
      rows.push(<option key={i}>{i}</option>)
    }
    return (
      <select className="form-control">
        {rows}
      </select>
    )
  }
}
