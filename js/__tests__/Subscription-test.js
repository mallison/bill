jest.dontMock('../src/components/Subscription');
jest.dontMock('../src/utils/money');

import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';

const Subscription = require('../src/components/Subscription');

class Wrapper extends React.Component {
  render() {
    return (
        <table>
        <tbody>
        {this.props.children}
        </tbody>
        </table>
    );
  }
}

describe('Subscription', () => {

  it('shows the type', () => {
    let sub = TestUtils.renderIntoDocument(
        <Wrapper>
        <Subscription type="talk" cost={0} />
        </Wrapper>
    );

    let data = TestUtils.scryRenderedDOMComponentsWithTag(
      TestUtils.findRenderedComponentWithType(sub, Subscription),
      'td'
    );
    let type = data[0];
    expect(type.textContent).toEqual('talk');
  });

  it('shows the name', () => {
    let sub = TestUtils.renderIntoDocument(
        <Wrapper>
        <Subscription name="Sky Talk Anytime" cost={0} />
        </Wrapper>
    );

    let data = TestUtils.scryRenderedDOMComponentsWithTag(
      TestUtils.findRenderedComponentWithType(sub, Subscription),
      'td'
    );
    let type = data[1];
    expect(type.textContent).toEqual('Sky Talk Anytime');
  });

  it('shows the cost', () => {
    let sub = TestUtils.renderIntoDocument(
        <Wrapper>
        <Subscription cost={5.00} />
        </Wrapper>
    );

    let data = TestUtils.scryRenderedDOMComponentsWithTag(
      TestUtils.findRenderedComponentWithType(sub, Subscription),
      'td'
    );
    let type = data[2];
    expect(type.textContent).toEqual('5.00');
  });
  
  
});
