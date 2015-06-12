import _ from 'lodash';
import React from 'react';
import ReactTransitionGroup from 'react/addons/TransitionGroup';

import ReactVelocityTransitionGroupChild from './ReactVelocityTransitionGroupChild';

const allowedChildProps = [
  'enter',
  'leave',
  'easing',
  'delay',
  'duration'
];

let ReactVelocityTransitionGroup = React.createClass({
  displayName: 'ReactVelocityTransitionGroup',

  propTypes: {
    enter: React.PropTypes.oneOfType([
      React.PropTypes.string,
      React.PropTypes.object
    ]).isRequired,
    leave: React.PropTypes.oneOfType([
      React.PropTypes.string,
      React.PropTypes.object
    ]),
    easing: React.PropTypes.string,
    delay: React.PropTypes.number,
    duration: React.PropTypes.number
  },

  _wrapChild: function(child) {
    let childProps = _.extend({}, _.pick(this.props, allowedChildProps));
    return (
      <ReactVelocityTransitionGroupChild {...childProps} >
        {child}
      </ReactVelocityTransitionGroupChild>
    );
  },

  render: function() {
    return (
      <ReactTransitionGroup {...this.props} childFactory={this._wrapChild} />
    );
  }
});

export default ReactVelocityTransitionGroup;
