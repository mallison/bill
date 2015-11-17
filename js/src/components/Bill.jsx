import React, { PropTypes } from 'react';
import BillSection from './BillSection';

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
      total: PropTypes.number.isRequired,
      ['package']: PropTypes.shape({
        total: PropTypes.number.isRequired
      }).isRequired
    }).isRequired
  }

  render() {
    let generated = this.props.bill.statement.generated;
    let due = this.props.bill.statement.due;
    let from = this.props.bill.statement.period.from;
    let to = this.props.bill.statement.period.to;
    let total = this.props.bill.total;
    let packageTotal = this.props.bill['package'].total;
    let callsTotal = this.props.bill.callCharges.total;
    let storeTotal = this.props.bill.skyStore.total;
    
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
        <hr/>
        <p>Below is a breakdown of how we've calculated your bill.</p>
        <BillSection
                title="Your package"
                total={packageTotal}
        />
        <BillSection
                title="Your call charges"
                total={callsTotal}
        />
        <BillSection
                title="Your Sky Store purchases"
                total={storeTotal}
        />
      </div>
    );
  }
}
