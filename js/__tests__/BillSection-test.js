jest.dontMock('../src/components/BillSection');

import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';

const BillSection = require('../src/components/BillSection');

describe('BillSection', () => {

  it('has a title', () => {
    let section = TestUtils.renderIntoDocument(
        <BillSection title="Some section" />
    );

    let title = TestUtils.findRenderedDOMComponentWithTag(
      section,
      'h2'
    );
    expect(title.textContent).toEqual('Some section');
  });

  it('has a total', () => {
    let section = TestUtils.renderIntoDocument(
        <BillSection total={100} />
    );

    let total = TestUtils.findRenderedDOMComponentWithClass(
      section,
      'total'
    );
    expect(total.textContent).toEqual('100');
  });

  it('wraps child elements', () => {
    let section = TestUtils.renderIntoDocument(
        <BillSection>
        <p className="child">child</p>
        </BillSection>
    );

    let child = TestUtils.findRenderedDOMComponentWithClass(
      section,
      'child'
    );
    expect(child.tagName).toEqual('P');
    expect(child.textContent).toEqual('child');
  });
  
});
