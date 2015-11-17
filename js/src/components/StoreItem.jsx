import React, { PropTypes } from 'react';
import money from '../utils/money';

export default class StoreItem extends React.Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
    cost: PropTypes.number.isRequired
  }

  render() {
    let { title, cost } = this.props;
    return (
      <tr>
        <td>{title}</td>
        <td className="money">{money(cost)}</td>
      </tr>
    );
  }
}
