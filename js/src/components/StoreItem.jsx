import React, { PropTypes } from 'react';
import money from '../utils/money';

export default class Call extends React.Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
    cost: PropTypes.number.isRequired
  }

  render() {
    let { title, cost } = this.props;
    return (
      <tr>
        <td>{title}</td>
        <td>{money(cost)}</td>
      </tr>
    );
  }
}
