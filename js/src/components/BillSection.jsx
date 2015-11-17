import React, { PropTypes } from 'react';
import money from '../utils/money';

export default class BillSection extends React.Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
    total: PropTypes.number.isRequired
  }

  render() {
    return (
      <section>
        <div className="row">
          <div className="col-md-6">
            <h2>{this.props.title}</h2>
          </div>
          <div className="col-md-6 total">
            <span className="total">{money(this.props.total)}</span>
          </div>
        </div>
        {this.props.children}
      </section>
    );
  }
}
