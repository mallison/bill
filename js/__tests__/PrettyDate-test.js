jest.dontMock('../src/components/PrettyDate');
jest.dontMock('strftime');

import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';

const PrettyDate = require('../src/components/PrettyDate');

describe('PrettyDate', () => {
  it('renders a <time> element', () => {
    let date = TestUtils.renderIntoDocument(
      <PrettyDate/>
    );
    
    TestUtils.findRenderedDOMComponentWithTag(
      date,
      'time'
    );
  });

  it('sets the datetime attribute to the given date', () => {
    let date = TestUtils.renderIntoDocument(
      <PrettyDate date='2015-11-17'/>
    );

    let time = ReactDOM.findDOMNode(date);
    expect(time.getAttribute('datetime')).toEqual('2015-11-17');
  });

  it('displays the date in pretty format', () => {
    let date = TestUtils.renderIntoDocument(
      <PrettyDate date='2015-11-17'/>
    );

    let time = ReactDOM.findDOMNode(date);
    expect(time.textContent).toEqual('17 Nov 2015');
  });
  
});

