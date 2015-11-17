import React, { PropTypes } from 'react';
import money from '../utils/money';

export default class Call extends React.Component {
  static propTypes = {
    called: PropTypes.string.isRequired,
    duration: PropTypes.string.isRequired,
    cost: PropTypes.number.isRequired
  }

  render() {
    let { called, duration, cost } = this.props;
    return (
      <tr>
        <td>{called}</td>
        <td>{duration}</td>
        <td>{money(cost)}</td>
      </tr>
    );
  }
}
