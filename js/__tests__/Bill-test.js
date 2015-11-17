jest.dontMock('../src/components/Bill');

import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';

const Bill = require('../src/components/Bill');
const BillSection = require('../src/components/BillSection');

describe('Bill', () => {

  it('has a title', () => {

    let billData = {
      statement: {
        period: {}
      },
      ['package']: {},
      callCharges: {},
      skyStore: {
        'total': 24.97
      }
    };
    
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
      },
      ['package']: {},
      callCharges: {},
      skyStore: {
        'total': 24.97
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
      },
      ['package']: {},
      callCharges: {},
      skyStore: {
        'total': 24.97
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
      },
      ['package']: {},
      callCharges: {},
      skyStore: {
        'total': 24.97
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
      ['package']: {},
      callCharges: {},
      skyStore: {
        'total': 24.97
      }
    };
    
    let bill = TestUtils.renderIntoDocument(
        <Bill bill={billData} />
    );

    let date = TestUtils.findRenderedDOMComponentWithClass(
      bill,
      'overall-total');
    expect(date.textContent).toEqual('136.03');
  });

  it('has a package section', () => {

    let billData = {
      statement: {
        period: {}
      },
      ['package']: {
        total: 71.40
      },
      callCharges: {},
      skyStore: {
        'total': 24.97
      }
    };
    
    let bill = TestUtils.renderIntoDocument(
        <Bill bill={billData} />
    );

    let sections = TestUtils.scryRenderedComponentsWithType(
      bill,
      BillSection);
    expect(sections[0].props.title).toEqual('Your package');
    expect(sections[0].props.total).toEqual(71.40);
  });

  it('has a call charges section', () => {

    let billData = {
      statement: {
        period: {}
      },
      ['package']: {},
      callCharges: {
        'total': 59.64
      },
      skyStore: {
        'total': 24.97
      }
    };

    let bill = TestUtils.renderIntoDocument(
        <Bill bill={billData} />
    );

    let sections = TestUtils.scryRenderedComponentsWithType(
      bill,
      BillSection);
    expect(sections[1].props.title).toEqual('Your call charges');
    expect(sections[1].props.total).toEqual(59.64);
  });

  it('has a store charges section', () => {

    let billData = {
      statement: {
        period: {}
      },
      ['package']: {},
      callCharges: {
        'total': 59.64
      },
      skyStore: {
        'total': 24.97
      }
    };

    let bill = TestUtils.renderIntoDocument(
        <Bill bill={billData} />
    );

    let sections = TestUtils.scryRenderedComponentsWithType(
      bill,
      BillSection);
    expect(sections[2].props.title).toEqual('Your Sky Store purchases');
    expect(sections[2].props.total).toEqual(24.97);
  });
  
});
