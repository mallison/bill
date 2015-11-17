jest.dontMock('../components/Bill');

import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';

const Bill = require('../components/Bill');

describe('Bill', () => {

  it('has a title', () => {

    let bill = TestUtils.renderIntoDocument(
        <Bill />
    );

    let billNode = ReactDOM.findDOMNode(bill);

    expect(billNode.textContent).toEqual('Welcome to your Sky bill');

  });

});
