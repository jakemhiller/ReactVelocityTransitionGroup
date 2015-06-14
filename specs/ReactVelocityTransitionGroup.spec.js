import React from 'react/addons';
const TestUtils = React.addons.TestUtils;

import ReactVelocityTransitionGroup from '../index';


describe('ReactVelocityTransitionGroup', function () {
  it('should render successfully', function () {
    var childNode = <div key="child-item">test</div>;

    var transitionGroup = TestUtils.renderIntoDocument(
      <ReactVelocityTransitionGroup
        enter={{opacity: [1, 0]}}
        leave={{opacity: 0}}>
        {childNode}
      </ReactVelocityTransitionGroup>
    );

    var renderedTransitionGroup = TestUtils.scryRenderedComponentsWithType(
      transitionGroup, ReactVelocityTransitionGroup
    );
    expect(renderedTransitionGroup.length).toBe(1);
  });
});
