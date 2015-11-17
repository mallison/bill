import React, { PropTypes } from 'react';
import money from '../utils/money';

export default class Subscription extends React.Component {
  static propTypes = {
    type: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    cost: PropTypes.number.isRequired
  }

  render() {
    let { type, name, cost } = this.props;
    return (
      <tr>
        <td>{type}</td>
        <td>{name}</td>
        <td className="money">{money(cost)}</td>
      </tr>
    );
  }
}
