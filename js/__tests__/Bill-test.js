jest.dontMock('../src/components/Bill');
jest.dontMock('../src/components/BillSection');

import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';

const Bill = require('../src/components/Bill');
const BillSection = require('../src/components/BillSection');
const Subscription = require('../src/components/Subscription');
const Call = require('../src/components/Call');
const StoreItem = require('../src/components/StoreItem');

describe('Bill', () => {

  it('has a title', () => {

    let billData = {
      statement: {
        period: {}
      },
      ['package']: {
        subscriptions: []
      },
      callCharges: {
        calls: [],
      },
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
      ['package']: {
        subscriptions: []
      },
      callCharges: {
        calls: []
      },
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
      ['package']: {
        subscriptions: []
      },
      callCharges: {
        calls: []
      },
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
      ['package']: {
        'subscriptions': []
      },
      callCharges: {
        calls: []
      },
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
      ['package']: {
        'subscriptions': []
      },
      callCharges: {
        calls: []
      },
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
        subscriptions: [],
        total: 71.40
      },
      callCharges: {
        calls: []
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
    expect(sections[0].props.title).toEqual('Your package');
    expect(sections[0].props.total).toEqual(71.40);
  });

  it('has a call charges section', () => {

    let billData = {
      statement: {
        period: {}
      },
      ['package']: {
        subscriptions: []
      },
      callCharges: {
        'total': 59.64,
        calls: []
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
      ['package']: {
        subscriptions: []
      },
      callCharges: {
        'total': 59.64,
        calls: []
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

  it('shows each package subscription', () => {

    let billData = {
      statement: {
        period: {}
      },
      ['package']: {
        subscriptions: [
          { 'type': 'tv', 'name': 'Variety with Movies HD', 'cost': 50.00 },
          { 'type': 'talk', 'name': 'Sky Talk Anytime', 'cost': 5.00 }
        ]
      },
      callCharges: {
        'total': 59.64,
        calls: []
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
    let subs = TestUtils.scryRenderedComponentsWithType(
      sections[0],
      Subscription
    );
    expect(subs.length).toEqual(2);
    billData['package'].subscriptions.forEach((sub, i) => {
      for (let prop in sub) {
        expect(sub[prop]).toEqual(subs[i].props[prop]);
      }
    });
  });

  it('shows each call', () => {

    let billData = {
      statement: {
        period: {}
      },
      ['package']: {
        subscriptions: [
        ]
      },
      callCharges: {
        'total': 59.64,
        calls: [
          { 'called': '07716393769', 'duration': '00:23:03', 'cost': 2.13 },
          { 'called': '07716393769', 'duration': '00:23:03', 'cost': 2.13 }
        ]
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
    let calls = TestUtils.scryRenderedComponentsWithType(
      sections[1],
      Call
    );
    expect(calls.length).toEqual(2);
    billData.callCharges.calls.forEach((call, i) => {
      for (let prop in call) {
        expect(call[prop]).toEqual(calls[i].props[prop]);
      }
    });
  });

  it('shows each store rental', () => {

    let billData = {
      statement: {
        period: {}
      },
      ['package']: {
        subscriptions: [
        ]
      },
      callCharges: {
        calls: [
        ]
      },
      skyStore: {
        rentals: [
          { "title": "50 Shades of Grey", "cost": 4.99 },
          { "title": "50 Shades Darker", "cost": 5.99 }
        ]
      }
    };

    let bill = TestUtils.renderIntoDocument(
        <Bill bill={billData} />
    );

    let sections = TestUtils.scryRenderedComponentsWithType(
      bill,
      BillSection);
    let rentals = TestUtils.scryRenderedComponentsWithType(
      sections[2],
      StoreItem
    );
    expect(rentals.length).toEqual(2);
    billData.skyStore.rentals.forEach((rental, i) => {
      for (let prop in rental) {
        expect(rental[prop]).toEqual(rentals[i].props[prop]);
      }
    });
  });

  it('shows each item bought in the store', () => {

    let billData = {
      statement: {
        period: {}
      },
      ['package']: {
        subscriptions: [
        ]
      },
      callCharges: {
        calls: [
        ]
      },
      skyStore: {
        buyAndKeep: [
          { "title": "50 Shades of Grey", "cost": 4.99 },
          { "title": "50 Shades Darker", "cost": 5.99 }
        ]
      }
    };

    let bill = TestUtils.renderIntoDocument(
        <Bill bill={billData} />
    );

    let sections = TestUtils.scryRenderedComponentsWithType(
      bill,
      BillSection);
    let items = TestUtils.scryRenderedComponentsWithType(
      sections[2],
      StoreItem
    );
    expect(items.length).toEqual(2);
    billData.skyStore.buyAndKeep.forEach((item, i) => {
      for (let prop in item) {
        expect(item[prop]).toEqual(items[i].props[prop]);
      }
    });
  });
  
});
