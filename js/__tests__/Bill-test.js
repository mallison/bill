jest.dontMock('../src/components/Bill');

import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';

const Bill = require('../src/components/Bill');

describe('Bill', () => {

  it('has a title', () => {

    let billData = {statement: {period: {}}};
    
    let bill = TestUtils.renderIntoDocument(
        <Bill bill={billData} />
    );

    let title = TestUtils.findRenderedDOMComponentWithTag(
      bill,
      'h1'
    );
    expect(title.textContent).toEqual('Welcome to your Sky bill');

  });

  it('shows the date it was generated', () => {

    let billData = {
      statement: {
        generated: '2015-01-11',
        period: {}
      }
    };
    
    let bill = TestUtils.renderIntoDocument(
        <Bill bill={billData} />
    );

    let date = TestUtils.findRenderedDOMComponentWithClass(
      bill,
      'date-generated');
    expect(date.textContent).toEqual('2015-01-11');
  });

  it('shows the date it is due', () => {

    let billData = {
      statement: {
        due: '2015-01-25',
        period: {}
      }
    };
    
    let bill = TestUtils.renderIntoDocument(
        <Bill bill={billData} />
    );

    let date = TestUtils.findRenderedDOMComponentWithClass(
      bill,
      'date-due');
    expect(date.textContent).toEqual('2015-01-25');
  });

  it('shows the period the bill is for', () => {

    let billData = {
      statement: {
        period: {
          from: '2015-01-26',
          to: '2015-02-25'
        }
      }
    };
    
    let bill = TestUtils.renderIntoDocument(
        <Bill bill={billData} />
    );

    let dateFrom = TestUtils.findRenderedDOMComponentWithClass(
      bill,
      'date-from');
    expect(dateFrom.textContent).toEqual('2015-01-26');
    let dateTo = TestUtils.findRenderedDOMComponentWithClass(
      bill,
      'date-to');
    expect(dateTo.textContent).toEqual('2015-02-25');
  });

  it('shows the total payable', () => {

    let billData = {
      statement: {
        period: {},
      },
      total: 136.03,
    };
    
    let bill = TestUtils.renderIntoDocument(
        <Bill bill={billData} />
    );

    let date = TestUtils.findRenderedDOMComponentWithClass(
      bill,
      'overall-total');
    expect(date.textContent).toEqual('136.03');
  });
  
});
