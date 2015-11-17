jest.dontMock('../src/components/Call');
jest.dontMock('../src/utils/money');

import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';

const Call = require('../src/components/Call');

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

describe('Call', () => {

  it('shows the phone number called', () => {
    let sub = TestUtils.renderIntoDocument(
        <Wrapper>
        <Call called="07821876847" cost={0} />
        </Wrapper>
    );

    let data = TestUtils.scryRenderedDOMComponentsWithTag(
      TestUtils.findRenderedComponentWithType(sub, Call),
      'td'
    );
    let number = data[0];
    expect(number.textContent).toEqual('07821876847');
  });

  it('shows the duation of the call', () => {
    let sub = TestUtils.renderIntoDocument(
        <Wrapper>
        <Call duration="00:05:10" cost={0} />
        </Wrapper>
    );

    let data = TestUtils.scryRenderedDOMComponentsWithTag(
      TestUtils.findRenderedComponentWithType(sub, Call),
      'td'
    );
    let duration = data[1];
    expect(duration.textContent).toEqual('00:05:10');
  });

  it('shows the cost of the call', () => {
    let sub = TestUtils.renderIntoDocument(
        <Wrapper>
        <Call cost={2.13} />
        </Wrapper>
    );

    let data = TestUtils.scryRenderedDOMComponentsWithTag(
      TestUtils.findRenderedComponentWithType(sub, Call),
      'td'
    );
    let cost = data[2];
    expect(cost.textContent).toEqual('2.13');
  });
  
  
});
