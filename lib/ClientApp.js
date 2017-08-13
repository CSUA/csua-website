'use strict';

var _reactDom = require('react-dom');

var ReactDOM = _interopRequireWildcard(_reactDom);

var _react = require('react');

var React = _interopRequireWildcard(_react);

var _reactRouterDom = require('react-router-dom');

var _App = require('./App.jsx');

var _App2 = _interopRequireDefault(_App);

require('./style.scss');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

setTimeout(function () {
  return ReactDOM.render(React.createElement(
    _reactRouterDom.BrowserRouter,
    null,
    React.createElement(_App2.default, null)
  ), document.getElementById('app'));
}, 0);