# ReactVelocityTransitionGroup

This is a replacement for React's `ReactCSSTransitionGroup` addon that uses [velocity.js](https://github.com/julianshapiro/velocity) for animations instead of CSS.

This is still very much a work in progress.

### Simple Example:

```js
import 'ReactVelocityTransitionGroup' from `ReactVelocityTransitionGroup`;

let overlayStyles = {
  backgroundColor: '#000',
  position: 'fixed',
  top: 0,
  right: 0,
  bottom: 0,
  left: 0
};

// Manually setting transition properties
let OverlayComponent1 = React.createClass({
  render() {
    let Overlay = <div style={overlayStyles} />;
    return (
      <ReactVelocityTransitionGroup
        enter={{opacity: [1, 0]}}
        leave={{opacity: 0}}
        easing='linear'
        duration={250}
      >
      {overlay}
      <ReactVelocityTransitionGroup/>
    )
  }
});

// using velocity UI Pack effects http://julian.com/research/velocity/#uiPack
let OverlayComponent2 = React.createClass({
  render() {
    let Overlay = <div style={overlayStyles} />;
    return (
      <ReactVelocityTransitionGroup
        enter='fadeIn'
        leave='fadeOut'
        easing='linear'
        duration={250}
      >
      {overlay}
      <ReactVelocityTransitionGroup/>
    )
  }
});
```

Based heavily on @tkafka's [react-VelocityTransitionGroup](https://github.com/tkafka/react-VelocityTransitionGroup)
