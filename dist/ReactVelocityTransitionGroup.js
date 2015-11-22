(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("lodash"), require("react/addons"), require("velocity-animate"));
	else if(typeof define === 'function' && define.amd)
		define(["lodash", "react/addons", "velocity-animate"], factory);
	else if(typeof exports === 'object')
		exports["ReactVelocityTransitionGroup"] = factory(require("lodash"), require("react/addons"), require("velocity-animate"));
	else
		root["ReactVelocityTransitionGroup"] = factory(root["_"], root["React"], root["Velocity"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_19__, __WEBPACK_EXTERNAL_MODULE_20__, __WEBPACK_EXTERNAL_MODULE_23__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "dist/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _interopRequireDefault = __webpack_require__(1)['default'];
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	var _libReactVelocityTransitionGroup = __webpack_require__(2);
	
	var _libReactVelocityTransitionGroup2 = _interopRequireDefault(_libReactVelocityTransitionGroup);

	exports['default'] = _libReactVelocityTransitionGroup2['default'];
	module.exports = exports['default'];

/***/ },
/* 1 */
/***/ function(module, exports) {

	"use strict";
	
	exports["default"] = function (obj) {
	  return obj && obj.__esModule ? obj : {
	    "default": obj
	  };
	};
	
	exports.__esModule = true;

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _extends = __webpack_require__(3)['default'];
	
	var _interopRequireDefault = __webpack_require__(1)['default'];
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	var _lodash = __webpack_require__(19);
	
	var _lodash2 = _interopRequireDefault(_lodash);
	
	var _reactAddons = __webpack_require__(20);
	
	var _reactAddons2 = _interopRequireDefault(_reactAddons);
	
	var _propTypes = __webpack_require__(21);
	
	var _propTypes2 = _interopRequireDefault(_propTypes);
	
	var _ReactVelocityTransitionGroupChild = __webpack_require__(22);
	
	var _ReactVelocityTransitionGroupChild2 = _interopRequireDefault(_ReactVelocityTransitionGroupChild);
	
	var ReactTransitionGroup = _reactAddons2['default'].addons.TransitionGroup;
	
	var allowedChildProps = ['appear', 'enter', 'leave', 'easing', 'delay', 'duration', 'options'];
	
	var ReactVelocityTransitionGroup = _reactAddons2['default'].createClass({
	  displayName: 'ReactVelocityTransitionGroup',
	
	  type: 'ReactTransitionGroup',
	  propTypes: (0, _propTypes2['default'])(),
	
	  _wrapChild: function _wrapChild(child) {
	    var childProps = _lodash2['default'].extend({}, _lodash2['default'].pick(this.props, allowedChildProps));
	    return _reactAddons2['default'].createElement(
	      _ReactVelocityTransitionGroupChild2['default'],
	      childProps,
	      child
	    );
	  },
	
	  render: function render() {
	    return _reactAddons2['default'].createElement(ReactTransitionGroup, _extends({}, this.props, { childFactory: this._wrapChild }));
	  }
	});
	
	exports['default'] = ReactVelocityTransitionGroup;
	module.exports = exports['default'];

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var _Object$assign = __webpack_require__(4)["default"];
	
	exports["default"] = _Object$assign || function (target) {
	  for (var i = 1; i < arguments.length; i++) {
	    var source = arguments[i];
	
	    for (var key in source) {
	      if (Object.prototype.hasOwnProperty.call(source, key)) {
	        target[key] = source[key];
	      }
	    }
	  }
	
	  return target;
	};
	
	exports.__esModule = true;

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(5), __esModule: true };

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(6);
	module.exports = __webpack_require__(9).Object.assign;

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.3.1 Object.assign(target, source)
	var $export = __webpack_require__(7);
	
	$export($export.S + $export.F, 'Object', {assign: __webpack_require__(12)});

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	var global    = __webpack_require__(8)
	  , core      = __webpack_require__(9)
	  , ctx       = __webpack_require__(10)
	  , PROTOTYPE = 'prototype';
	
	var $export = function(type, name, source){
	  var IS_FORCED = type & $export.F
	    , IS_GLOBAL = type & $export.G
	    , IS_STATIC = type & $export.S
	    , IS_PROTO  = type & $export.P
	    , IS_BIND   = type & $export.B
	    , IS_WRAP   = type & $export.W
	    , exports   = IS_GLOBAL ? core : core[name] || (core[name] = {})
	    , target    = IS_GLOBAL ? global : IS_STATIC ? global[name] : (global[name] || {})[PROTOTYPE]
	    , key, own, out;
	  if(IS_GLOBAL)source = name;
	  for(key in source){
	    // contains in native
	    own = !IS_FORCED && target && key in target;
	    if(own && key in exports)continue;
	    // export native or passed
	    out = own ? target[key] : source[key];
	    // prevent global pollution for namespaces
	    exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key]
	    // bind timers to global for call from export context
	    : IS_BIND && own ? ctx(out, global)
	    // wrap global constructors for prevent change them in library
	    : IS_WRAP && target[key] == out ? (function(C){
	      var F = function(param){
	        return this instanceof C ? new C(param) : C(param);
	      };
	      F[PROTOTYPE] = C[PROTOTYPE];
	      return F;
	    // make static versions for prototype methods
	    })(out) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
	    if(IS_PROTO)(exports[PROTOTYPE] || (exports[PROTOTYPE] = {}))[key] = out;
	  }
	};
	// type bitmap
	$export.F = 1;  // forced
	$export.G = 2;  // global
	$export.S = 4;  // static
	$export.P = 8;  // proto
	$export.B = 16; // bind
	$export.W = 32; // wrap
	module.exports = $export;

/***/ },
/* 8 */
/***/ function(module, exports) {

	// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
	var global = module.exports = typeof window != 'undefined' && window.Math == Math
	  ? window : typeof self != 'undefined' && self.Math == Math ? self : Function('return this')();
	if(typeof __g == 'number')__g = global; // eslint-disable-line no-undef

/***/ },
/* 9 */
/***/ function(module, exports) {

	var core = module.exports = {version: '1.2.6'};
	if(typeof __e == 'number')__e = core; // eslint-disable-line no-undef

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	// optional / simple context binding
	var aFunction = __webpack_require__(11);
	module.exports = function(fn, that, length){
	  aFunction(fn);
	  if(that === undefined)return fn;
	  switch(length){
	    case 1: return function(a){
	      return fn.call(that, a);
	    };
	    case 2: return function(a, b){
	      return fn.call(that, a, b);
	    };
	    case 3: return function(a, b, c){
	      return fn.call(that, a, b, c);
	    };
	  }
	  return function(/* ...args */){
	    return fn.apply(that, arguments);
	  };
	};

/***/ },
/* 11 */
/***/ function(module, exports) {

	module.exports = function(it){
	  if(typeof it != 'function')throw TypeError(it + ' is not a function!');
	  return it;
	};

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.1 Object.assign(target, source, ...)
	var $        = __webpack_require__(13)
	  , toObject = __webpack_require__(14)
	  , IObject  = __webpack_require__(16);
	
	// should work with symbols and should have deterministic property order (V8 bug)
	module.exports = __webpack_require__(18)(function(){
	  var a = Object.assign
	    , A = {}
	    , B = {}
	    , S = Symbol()
	    , K = 'abcdefghijklmnopqrst';
	  A[S] = 7;
	  K.split('').forEach(function(k){ B[k] = k; });
	  return a({}, A)[S] != 7 || Object.keys(a({}, B)).join('') != K;
	}) ? function assign(target, source){ // eslint-disable-line no-unused-vars
	  var T     = toObject(target)
	    , $$    = arguments
	    , $$len = $$.length
	    , index = 1
	    , getKeys    = $.getKeys
	    , getSymbols = $.getSymbols
	    , isEnum     = $.isEnum;
	  while($$len > index){
	    var S      = IObject($$[index++])
	      , keys   = getSymbols ? getKeys(S).concat(getSymbols(S)) : getKeys(S)
	      , length = keys.length
	      , j      = 0
	      , key;
	    while(length > j)if(isEnum.call(S, key = keys[j++]))T[key] = S[key];
	  }
	  return T;
	} : Object.assign;

/***/ },
/* 13 */
/***/ function(module, exports) {

	var $Object = Object;
	module.exports = {
	  create:     $Object.create,
	  getProto:   $Object.getPrototypeOf,
	  isEnum:     {}.propertyIsEnumerable,
	  getDesc:    $Object.getOwnPropertyDescriptor,
	  setDesc:    $Object.defineProperty,
	  setDescs:   $Object.defineProperties,
	  getKeys:    $Object.keys,
	  getNames:   $Object.getOwnPropertyNames,
	  getSymbols: $Object.getOwnPropertySymbols,
	  each:       [].forEach
	};

/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	// 7.1.13 ToObject(argument)
	var defined = __webpack_require__(15);
	module.exports = function(it){
	  return Object(defined(it));
	};

/***/ },
/* 15 */
/***/ function(module, exports) {

	// 7.2.1 RequireObjectCoercible(argument)
	module.exports = function(it){
	  if(it == undefined)throw TypeError("Can't call method on  " + it);
	  return it;
	};

/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	// fallback for non-array-like ES3 and non-enumerable old V8 strings
	var cof = __webpack_require__(17);
	module.exports = Object('z').propertyIsEnumerable(0) ? Object : function(it){
	  return cof(it) == 'String' ? it.split('') : Object(it);
	};

/***/ },
/* 17 */
/***/ function(module, exports) {

	var toString = {}.toString;
	
	module.exports = function(it){
	  return toString.call(it).slice(8, -1);
	};

/***/ },
/* 18 */
/***/ function(module, exports) {

	module.exports = function(exec){
	  try {
	    return !!exec();
	  } catch(e){
	    return true;
	  }
	};

/***/ },
/* 19 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_19__;

/***/ },
/* 20 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_20__;

/***/ },
/* 21 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _interopRequireDefault = __webpack_require__(1)['default'];
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	var _reactAddons = __webpack_require__(20);
	
	var _reactAddons2 = _interopRequireDefault(_reactAddons);
	
	var propTypes = function propTypes() {
	  return {
	    appear: _reactAddons2['default'].PropTypes.oneOfType([_reactAddons2['default'].PropTypes.string, _reactAddons2['default'].PropTypes.object, _reactAddons2['default'].PropTypes.array]),
	    enter: _reactAddons2['default'].PropTypes.oneOfType([_reactAddons2['default'].PropTypes.string, _reactAddons2['default'].PropTypes.object, _reactAddons2['default'].PropTypes.array]),
	    leave: _reactAddons2['default'].PropTypes.oneOfType([_reactAddons2['default'].PropTypes.string, _reactAddons2['default'].PropTypes.object, _reactAddons2['default'].PropTypes.array]),
	    easing: _reactAddons2['default'].PropTypes.oneOfType([_reactAddons2['default'].PropTypes.string, _reactAddons2['default'].PropTypes.array]),
	    delay: _reactAddons2['default'].PropTypes.number,
	    duration: _reactAddons2['default'].PropTypes.number,
	    options: _reactAddons2['default'].PropTypes.object
	  };
	};
	
	exports['default'] = propTypes;
	module.exports = exports['default'];

/***/ },
/* 22 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _Object$assign = __webpack_require__(4)['default'];
	
	var _interopRequireDefault = __webpack_require__(1)['default'];
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	var _lodash = __webpack_require__(19);
	
	var _lodash2 = _interopRequireDefault(_lodash);
	
	var _reactAddons = __webpack_require__(20);
	
	var _reactAddons2 = _interopRequireDefault(_reactAddons);
	
	var _velocityAnimate = __webpack_require__(23);
	
	var _velocityAnimate2 = _interopRequireDefault(_velocityAnimate);
	
	var _propTypes = __webpack_require__(21);
	
	var _propTypes2 = _interopRequireDefault(_propTypes);
	
	var ReactVelocityTransitionGroupChild = _reactAddons2['default'].createClass({
	  displayName: 'ReactVelocityTransitionGroupChild',
	
	  propTypes: (0, _propTypes2['default'])(),
	
	  getDefaultProps: function getDefaultProps() {
	    return {
	      options: {}
	    };
	  },
	
	  _transition: function _transition(transition, done) {
	    var _this = this;
	
	    var node = _reactAddons2['default'].findDOMNode(this);
	
	    var options = _Object$assign({}, {
	      duration: this.props.duration,
	      complete: function complete() {
	        _this._transitionCallback(done);
	      },
	      easing: this.props.easing
	    }, this.props.options);
	
	    (0, _velocityAnimate2['default'])(node, transition, options);
	  },
	
	  _transitionCallback: function _transitionCallback(done) {
	    if (!this.isMounted()) return;
	    done();
	  },
	
	  componentWillAppear: function componentWillAppear(done) {
	    if (this.props.appear) {
	      this._transition(this.props.appear, done);
	    } else {
	      done();
	    }
	  },
	
	  componentWillEnter: function componentWillEnter(done) {
	    var transition = this.props.enter;
	
	    if (_lodash2['default'].isUndefined(transition)) {
	      transition = this.props.appear;
	    }
	
	    if (transition) {
	      this._transition(transition, done);
	    } else {
	      done();
	    }
	  },
	
	  componentWillLeave: function componentWillLeave(done) {
	    if (this.props.leave) {
	      this._transition(this.props.leave, done);
	    } else {
	      done();
	    }
	  },
	
	  render: function render() {
	    return _reactAddons2['default'].Children.only(this.props.children);
	  }
	});
	
	exports['default'] = ReactVelocityTransitionGroupChild;
	module.exports = exports['default'];

/***/ },
/* 23 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_23__;

/***/ }
/******/ ])
});
;
//# sourceMappingURL=ReactVelocityTransitionGroup.map