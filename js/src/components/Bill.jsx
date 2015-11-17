import React, { PropTypes } from 'react';
import BillSection from './BillSection';
import Subscription from './Subscription';
import Call from './Call';
import StoreItem from './StoreItem';

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
    let rentals = bill.skyStore.rentals || [];
    let bought = bill.skyStore.buyAndKeep || [];

    return (
      <div>
        <h1>Welcome to your Sky bill</h1>
        <dl className="dates dl-horizontal">
          <dt>This statement was generated on</dt>
          <dd><span className="date-generated">{generated}</span></dd>
          <dt>Payment is due on</dt>
          <dd><span className="date-due">{due}</span></dd>
          <dt>This statement is for the period</dt>
          <dd>
            <span className="date-from">{from}</span>
            {' \u2013 '}
            <span className="date-to">{to}</span>
          </dd>
        </dl>
        <div className="row">
          <div className="col-md-6">
            <h2>Total</h2>
          </div>
          <div className="col-md-6 section-total">
            <span className="overall-total">{total}</span>
          </div>
        </div>
        <p>
          Below is a breakdown of how we've calculated your bill. Click
          on any section to show a detailed breakdown of the charges.
        </p>
        <BillSection
                title="Your package"
                total={packageTotal}
                >
          <table className="table table-collapse table-striped">
            <thead>
              <th>Service</th>
              <th>Subscription</th>
              <th className="money">Cost</th>
            </thead>
            <tbody>
              {subs.map(sub => <Subscription key={sub.type} {...sub} />)}
            </tbody>
          </table>
        </BillSection>
        <BillSection
                title="Your call charges"
                total={callsTotal}
        >
          <table className="table table-collapse table-striped">
            <thead>
              <th>Number</th>
              <th>Duration</th>
              <th className="money">Cost</th>
            </thead>
            <tbody>
              {calls.map(call => <Call {...call} />)}
            </tbody>
          </table>
        </BillSection>
        <BillSection
                title="Your Sky Store purchases"
                total={storeTotal}
                >
          {rentals.length ?
           <table className="table table-collapse table-striped">
           <caption>Rentals</caption>
           <thead>
           <th>Title</th>
           <th className="money">Cost</th>
           </thead>
            <tbody>
              {rentals.map(rental => <StoreItem {...rental} />)}
            </tbody>
          </table>
           : null}
            {bought.length ?
           <table className="table table-collapse table-striped">
           <caption>Buy and keep</caption>
           <thead>
           <th>Title</th>
           <th className="money">Cost</th>
           </thead>
            <tbody>
              {bought.map(item => <StoreItem {...item} />)}
             </tbody>
          </table>
             : null}
        </BillSection>
      </div>
    );
  }
}
