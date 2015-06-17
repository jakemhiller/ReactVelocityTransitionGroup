import _ from 'lodash';
import React from 'react/addons';
import velocity from 'velocity-animate';
import 'velocity-animate/velocity.ui';

import propTypes from './propTypes';

const UITransitions = velocity.RegisterEffect.packagedEffects;

let ReactVelocityTransitionGroupChild = React.createClass({

  propTypes: propTypes(),

  _getUITransitionName(transition) {
    let UITransitionName = `transition.${transition}`;

    if (UITransitions[UITransitionName]) {
      return UITransitionName;
    } else if (UITransitions[`${UITransitionName}In`]) {
      return `${UITransitionName}In`;
    } else if (UITransitions[`${UITransitionName}Out`]) {
      return `${UITransitionName}Out`;
    }

    return null;
  },

  _transition(transition, doneCallback) {
    let node = React.findDOMNode(this);

    if (_.isString(transition)) {
      transition = this._getUITransitionName(transition);
    }

    velocity(
      node,
      transition,
      {
        duration: this.props.duration,
        complete: doneCallback,
        easing: this.props.easing
      }
    );

  },

  componentWillAppear: function(done) {
    let transition = this.props.appear;
    if (_.isUndefined(transition)) {
      transition = this.props.enter;
    }
    if (transition) {
      this._transition(this.props.enter, done);
    } else {
      done();
    }
  },

  componentWillEnter: function(done) {
    if (this.props.enter) {
      this._transition(this.props.enter, done);
    } else {
      done();
    }
  },

  componentWillLeave: function(done) {
    if (this.props.leave) {
      this._transition(this.props.leave, done);
    } else {
      done();
    }
  },

  render: function() {
    return React.Children.only(this.props.children);
  }
});

export default ReactVelocityTransitionGroupChild;
