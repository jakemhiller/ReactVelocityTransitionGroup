import React from 'react/addons';

const propTypes = () => {
  return {
    appear: React.PropTypes.oneOfType([
      React.PropTypes.string,
      React.PropTypes.object,
      React.PropTypes.bool
    ]),
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
  };
};

export default propTypes;
