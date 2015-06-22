import _ from 'lodash';
import React from 'react/addons';
import velocity from 'velocity-animate';

import propTypes from './propTypes';

let ReactVelocityTransitionGroupChild = React.createClass({

  propTypes: propTypes(),

  getDefaultProps() {
    return {
      options: {}
    };
  },

  _transition(transition, doneCallback) {
    let node = React.findDOMNode(this);

    let options = Object.assign({}, {
      duration: this.props.duration,
      complete: doneCallback,
      easing: this.props.easing
    }, this.props.options);

    velocity(
      node,
      transition,
      options
    );

  },

  componentWillAppear: function(done) {
    if (this.props.appear) {
      this._transition(this.props.appear, done);
    } else {
      done();
    }
  },

  componentWillEnter: function(done) {
    let transition = this.props.enter;

    if (_.isUndefined(transition)) {
      transition = this.props.appear;
    }

    if (transition) {
      this._transition(transition, done);
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
