jest.dontMock('../src/components/BillContainer');

import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';

describe('BillContainer', () => {
  it('calls the bill json endpoint', () => {
    let $ = require('jquery');
    const BillContainer = require('../src/components/BillContainer');

    TestUtils.renderIntoDocument(
      <BillContainer />
    );

    expect($.ajax.mock.calls.length).toBe(1);
    expect($.ajax).toBeCalledWith({
      type: 'GET',
      url: 'https://still-scrubland-9880.herokuapp.com/bill.json',
      success: jasmine.any(Function)
    });
  });

  it('renders the bill when the json request is finished', () => {
    let $ = require('jquery');
    const BillContainer = require('../src/components/BillContainer');
    const Bill = require('../src/components/Bill');

    let container = TestUtils.renderIntoDocument(
      <BillContainer />
    );

    // Simulate successfull ajax request
    $.ajax.mock.calls[0 /*first call*/][0 /*first argument*/].success({
      statement: {}
    });

    let bill = TestUtils.findRenderedComponentWithType(
      container,
      Bill);
    expect(bill.props.bill).toEqual({statement: {}});
  });
});
