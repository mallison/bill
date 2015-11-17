import React, { PropTypes } from 'react';

export default class Bill extends React.Component {
  static propTypes = {
    bill: PropTypes.shape({
      statement: PropTypes.shape({
        generated: PropTypes.string.isRequired,
        due: PropTypes.string.isRequired,
        period: PropTypes.shape({
          from: PropTypes.string.isRequired,
          to: PropTypes.string.isRequired
        }).isRequired
      }),
      total: PropTypes.number.isRequired
    }).isRequired
  }

  render() {
    let generated = this.props.bill.statement.generated;
    let due = this.props.bill.statement.due;
    let from = this.props.bill.statement.period.from;
    let to = this.props.bill.statement.period.to;
    let total = this.props.bill.total;

    return (
      <div>
        <h1>Welcome to your Sky bill</h1>
        <p>This statement was generated on:
          <span className="date-generated">{generated}</span>
        </p>
        <p>Payment is due on:
          <span className="date-due">{due}</span>
        </p>
        <p>This statement is for the period:
          <span className="date-from">{from}</span>
          {' \u2013 '}
          <span className="date-to">{to}</span>
        </p>
        <p>Total:
          {' '}
          <span className="overall-total">{total}</span>
        </p>
      </div>
    );
  }
}
