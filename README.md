# ReactVelocityTransitionGroup

This is a replacement for React's `ReactCSSTransitionGroup` addon that uses [velocity.js](https://github.com/julianshapiro/velocity) for animations instead of CSS.

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
      <ReactVelocityTransitionGroup
        appear={{opacity: [1, 0]}}
        leave={{opacity: 0}}
        easing='linear'
        duration={250}
      >
        <div style={overlayStyles} />;
      <ReactVelocityTransitionGroup/>
    )
  }
});

```

Based heavily on @tkafka's [react-VelocityTransitionGroup](https://github.com/tkafka/react-VelocityTransitionGroup)
