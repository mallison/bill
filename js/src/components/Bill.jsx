import React, { PropTypes } from 'react';
import BillSection from './BillSection';
import Subscription from './Subscription';
import Call from './Call';

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
        total: PropTypes.number.isRequired,
        subscriptions: PropTypes.arrayOf(
          PropTypes.shape({
            type: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
            cost: PropTypes.number.isRequired
          }).isRequired
        ).isRequired
      }).isRequired,
      callCharges: PropTypes.shape({
        total: PropTypes.number.isRequired,
        calls: PropTypes.arrayOf(
          PropTypes.shape({
            called: PropTypes.string.isRequired,
            duration: PropTypes.string.isRequired,
            cost: PropTypes.number.isRequired
          }).isRequired
        ).isRequired
      }).isRequired
    }).isRequired
  }

  render() {
    let bill = this.props.bill;
    let generated = bill.statement.generated;
    let due = bill.statement.due;
    let from = bill.statement.period.from;
    let to = bill.statement.period.to;
    let total = bill.total;
    let packageTotal = bill['package'].total;
    let callsTotal = bill.callCharges.total;
    let storeTotal = bill.skyStore.total;
    let subs = bill['package'].subscriptions;
    let calls = bill.callCharges.calls;

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
                >
          <table>
            <tbody>
              {subs.map(sub => <Subscription key={sub.type} {...sub} />)}
            </tbody>
          </table>
        </BillSection>
        <BillSection
                title="Your call charges"
                total={callsTotal}
        >
          <table>
            <tbody>
              {calls.map(call => <Call {...call} />)}
            </tbody>
          </table>
        </BillSection>
        <BillSection
                title="Your Sky Store purchases"
                total={storeTotal}
        />
      </div>
    );
  }
}
