import React from 'react';

export default class Bill extends React.Component {
  render() {
    return (
      let generated = this.props.bill.statement.generated;
      <div>
        <h1>Welcome to your Sky bill</h1>
        <p>This statement was generated on:
          <span className="date-generated">{generated}</span>
        </p>
      <div>
    );
  }
}
