import React from 'react/addons';
const TestUtils = React.addons.TestUtils;

import ReactVelocityTransitionGroup from '../index';

describe('ReactVelocityTransitionGroup', () => {
  it('should render successfully', () => {
    let childNode = <div key="child-item">test</div>;

    let transitionGroup = TestUtils.renderIntoDocument(
      <ReactVelocityTransitionGroup
        enter={{opacity: [1, 0]}}
        leave={{opacity: 0}}
        duration={1000}
      >
        {childNode}
      </ReactVelocityTransitionGroup>
    );

    let renderedTransitionGroup = TestUtils.scryRenderedComponentsWithType(
      transitionGroup, ReactVelocityTransitionGroup
    );

    expect(renderedTransitionGroup.length).toBe(1);
  });
});
