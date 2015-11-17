jest.dontMock('../src/components/BillSection');
jest.dontMock('../src/utils/money');
jest.dontMock('classnames');

import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';

const BillSection = require('../src/components/BillSection');

describe('BillSection', () => {

  it('has a title', () => {
    let section = TestUtils.renderIntoDocument(
        <BillSection title="Some section" total={0} />
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
    expect(total.textContent).toEqual('100.00');
  });

  it('hides the detail when first shown', () => {
    let section = TestUtils.renderIntoDocument(
        <BillSection total={0}>
        <p className="child">child</p>
        </BillSection>
    );

    let children = TestUtils.scryRenderedDOMComponentsWithClass(
      section,
      'child'
    );
    expect(children.length).toEqual(0);
  });

  it('shows the detail when closed and clicked', () => {
    let section = TestUtils.renderIntoDocument(
        <BillSection total={0}>
        <p className="child">child</p>
        </BillSection>
    );

    TestUtils.Simulate.click(
      TestUtils.findRenderedDOMComponentWithClass(section, 'row')
    );

    let child = TestUtils.findRenderedDOMComponentWithClass(
      section,
      'child'
    );
    expect(child.tagName).toEqual('P');
    expect(child.textContent).toEqual('child');
  });

  it('hides the detail when open and clicked', () => {
    let section = TestUtils.renderIntoDocument(
        <BillSection total={0}>
        <p className="child">child</p>
        </BillSection>
    );

    TestUtils.Simulate.click(
      TestUtils.findRenderedDOMComponentWithClass(section, 'row')
    );
    TestUtils.Simulate.click(
      TestUtils.findRenderedDOMComponentWithClass(section, 'row')
    );

    let children = TestUtils.scryRenderedDOMComponentsWithClass(
      section,
      'child'
    );
    expect(children.length).toEqual(0);
    
  });

  it('shows a right triangle when closed', () => {
    let section = TestUtils.renderIntoDocument(
        <BillSection title="section" total={0}>
        </BillSection>
    );

    let icon = TestUtils.findRenderedDOMComponentWithClass(
      section,
      'glyphicon-triangle-right'
    );
  });

  it('shows a down triangle when open', () => {
    let section = TestUtils.renderIntoDocument(
        <BillSection title="section" total={0}>
        </BillSection>
    );
    TestUtils.Simulate.click(
      TestUtils.findRenderedDOMComponentWithClass(section, 'row')
    );

    let icon = TestUtils.findRenderedDOMComponentWithClass(
      section,
      'glyphicon-triangle-bottom'
    );
  });
  
});
