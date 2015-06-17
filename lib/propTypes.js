import React from 'react/addons';

const propTypes = () => {
  return {
    appear: React.PropTypes.oneOfType([
      React.PropTypes.string,
      React.PropTypes.object,
      React.PropTypes.array
    ]),
    enter: React.PropTypes.oneOfType([
      React.PropTypes.string,
      React.PropTypes.object,
      React.PropTypes.array
    ]),
    leave: React.PropTypes.oneOfType([
      React.PropTypes.string,
      React.PropTypes.object,
      React.PropTypes.array
    ]),
    easing: React.PropTypes.oneOfType([
      React.PropTypes.string,
      React.PropTypes.array
    ]),
    delay: React.PropTypes.number,
    duration: React.PropTypes.number,
    options: React.PropTypes.object
  };
};

export default propTypes;
