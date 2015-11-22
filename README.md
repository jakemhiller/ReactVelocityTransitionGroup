

# VelocityTransitionGroup

This is a replacement for React's `ReactCSSTransitionGroup` addon that uses [velocity.js](https://github.com/julianshapiro/velocity) for animations instead of CSS.

### Warning

Many other libraries have popped up since this one that accomplish the same thing and more.

I'd recommend looking at [velocity-react](https://github.com/twitter-fabric/velocity-react) before using this. It is likely more up to date with the latest React, and includes other components and features that make working with Velocity in React much easier.

### Installation:

`npm install velocity-transition-group`

### Simple Example:

```js
import VelocityTransitionGroup from `velocity-transition-group`;

let overlayStyles = {
  backgroundColor: '#000',
  position: 'fixed',
  top: 0,
  right: 0,
  bottom: 0,
  left: 0
};

let OverlayComponent = React.createClass({
  render() {
    return (
      <VelocityTransitionGroup
        appear={{opacity: [1, 0]}}
        leave={{opacity: 0}}
        easing='linear'
        duration={250}
      >
        <div style={overlayStyles} />;
      <VelocityTransitionGroup/>
    )
  }
});

```

Based heavily on @tkafka's [react-VelocityTransitionGroup](https://github.com/tkafka/react-VelocityTransitionGroup)
