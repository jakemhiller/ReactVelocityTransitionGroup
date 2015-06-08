
var itemStyle = {
  display: 'block',
  height: 50,
  fontFamily: 'helvetica, arial, sans-serif',
  marginBottom: 5,
  marginRight: 5,
  flex: 1,
  color: 'white',
  lineHeight: '50px',
  padding: 10,
  fontSize: '2rem'
}


var App = React.createClass({

  getInitialState: function() {
    return {
      showChildren: true,
      items: [1, 2, 3]
    }
  },

  toggle: function() {
    this.setState({showChildren: !this.state.showChildren});
  },

  addOne: function() {
    var items = _.clone(this.state.items);
    console.log(items);
    items.push(items.length + 1);
    this.setState({items: items});
  },

  subtractOne: function() {
    var items = _.clone(this.state.items);
    items.pop();
    this.setState({items: items});
  },

  getItems: function(backgroundColor) {
    if (!this.state.showChildren) return null;
    var styl = _.extend({}, itemStyle, {backgroundColor: backgroundColor});
    return this.state.items.map(function(item, i) {
      return <div key={'item-'+i} style={styl}>{item}</div>
    });
  },

  render: function () {
    return (
      <div>
        <button onClick={this.toggle}>Toggle</button>
        <button onClick={this.addOne}>+1</button>
        <button onClick={this.subtractOne}>-1</button>
          <div>

            <ReactVelocityTransitionGroup
              style={{display: 'flex', width: '100%'}}
              enter='fadeIn'
              leave='fadeOut'
              duration={1000}
            >
            {this.getItems('red')}
            </ReactVelocityTransitionGroup>

            <ReactVelocityTransitionGroup
              style={{display: 'flex', width: '100%'}}
              enter={{opacity: [1, 0], width: ['100%', 0], translateX: [0, '50%']}}
              leave={{opacity: 0, translateX: '50%', width: 0}}
              duration={500}
            >
            {this.getItems('blue')}
            </ReactVelocityTransitionGroup>

          </div>
      </div>
    );
  }
});

React.render(<App/>, document.querySelector('#main'));
