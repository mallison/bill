import React from 'react';
import $ from 'jquery';
import Bill from './Bill';

export default class BillContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {bill: null};
  }

  componentDidMount() {
    $.ajax({
      type: 'GET',
      url: 'https://still-scrubland-9880.herokuapp.com/bill.json',
      success: (bill) => this.setState({bill})
    });
  }

  render() {
    if (this.state.bill !== null) {
      return <Bill bill={this.state.bill} />;
    }
    return null;
  }
}
