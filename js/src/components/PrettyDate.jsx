import React, { PropTypes } from 'react';
import strftime from 'strftime';

export default class PrettyDate extends React.Component {
  static propTypes = {
    date: PropTypes.string.isRequired
  }

  render() {
    return (
      <time dateTime={this.props.date}>
        {strftime('%d %b %Y', new Date(this.props.date))}
      </time>
    );
  }
}
