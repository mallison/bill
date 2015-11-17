import React, { PropTypes } from 'react';

export default class BillSection extends React.Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
    total: PropTypes.number.isRequired
  }

  render() {
    return (
      <section>
        <h2>{this.props.title}</h2>
        {this.props.children}
        <p>Total:
          <span className="total">{this.props.total}</span>
        </p>
      </section>
    );
  }
}
