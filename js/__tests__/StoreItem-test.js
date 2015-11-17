jest.dontMock('../src/components/StoreItem');
jest.dontMock('../src/utils/money');

import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';

const StoreItem = require('../src/components/StoreItem');

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

describe('StoreItem', () => {

  it('shows the item title', () => {
    let sub = TestUtils.renderIntoDocument(
        <Wrapper>
        <StoreItem title="50 shades" cost={0} />
        </Wrapper>
    );

    let data = TestUtils.scryRenderedDOMComponentsWithTag(
      TestUtils.findRenderedComponentWithType(sub, StoreItem),
      'td'
    );
    let title = data[0];
    expect(title.textContent).toEqual('50 shades');
  });

  it('shows the cost of the call', () => {
    let sub = TestUtils.renderIntoDocument(
        <Wrapper>
        <StoreItem cost={5.99} />
        </Wrapper>
    );

    let data = TestUtils.scryRenderedDOMComponentsWithTag(
      TestUtils.findRenderedComponentWithType(sub, StoreItem),
      'td'
    );
    let cost = data[1];
    expect(cost.textContent).toEqual('5.99');
  });
});
