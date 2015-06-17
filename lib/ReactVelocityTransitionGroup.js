import _ from 'lodash';
import React from 'react/addons';
const ReactTransitionGroup = React.addons.TransitionGroup;

import propTypes from './propTypes';
import ReactVelocityTransitionGroupChild from './ReactVelocityTransitionGroupChild';

const allowedChildProps = [
  'appear',
  'enter',
  'leave',
  'easing',
  'delay',
  'duration',
  'options'
];

let ReactVelocityTransitionGroup = React.createClass({
  type: 'ReactTransitionGroup',
  propTypes: propTypes(),

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
