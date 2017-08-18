'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Pages = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var React = _interopRequireWildcard(_react);

var _reactRedux = require('react-redux');

var _redux = require('redux');

var _reactRouter = require('react-router');

var _Guac = require('guac-hoc/lib/Guac');

var _reactRouterDom = require('react-router-dom');

var _About = require('./About');

var _Politburo = require('./Politburo');

var _Officers = require('./Officers');

var _Constitution = require('./Constitution');

var _Events = require('./Events');

var _Workshops = require('./Workshops');

var _Recruiting = require('./Recruiting');

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Pages = function (_React$Component) {
  _inherits(Pages, _React$Component);

  function Pages() {
    _classCallCheck(this, Pages);

    var _this = _possibleConstructorReturn(this, (Pages.__proto__ || Object.getPrototypeOf(Pages)).call(this));

    _this.bindAllMethods();
    return _this;
  }

  _createClass(Pages, [{
    key: 'componentDidMount',
    value: function componentDidMount() {}
  }, {
    key: 'render',
    value: function render() {
      return React.createElement(
        'div',
        { className: 'page' },
        React.createElement(_reactRouterDom.Route, { path: '*', render: function render() {
            window.scrollTo(0, 0);return null;
          } }),
        React.createElement(
          _reactRouterDom.Switch,
          null,
          React.createElement(_reactRouterDom.Route, { path: '/about/politburo', component: _Politburo.Politburo }),
          React.createElement(_reactRouterDom.Route, { path: '/about/officers', component: _Officers.Officers }),
          React.createElement(_reactRouterDom.Route, { path: '/about/constitution', component: _Constitution.Constitution }),
          React.createElement(_reactRouterDom.Route, { path: '/events/workshops', component: _Workshops.Workshops }),
          React.createElement(_reactRouterDom.Route, { path: '/events/recruiting', component: _Recruiting.Recruiting }),
          React.createElement(_reactRouterDom.Route, { path: '/events', component: _Events.Events }),
          React.createElement(_reactRouterDom.Route, { path: '/', component: _About.About })
        )
      );
    }
  }]);

  return Pages;
}(React.Component);

function mapStateToProps(state, ownProps) {
  return {};
}

function mapDispatchToProps(dispatch, ownProps) {
  return {};
}

exports.Pages = Pages = (0, _reactRouter.withRouter)((0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)((0, _Guac.Guac)(Pages)));

exports.default = Pages;
exports.Pages = Pages;