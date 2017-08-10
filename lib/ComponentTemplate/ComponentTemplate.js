'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ComponentTemplate = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var React = _interopRequireWildcard(_react);

var _reactRedux = require('react-redux');

require('./style.scss');

var _redux = require('redux');

var _reactRouter = require('react-router');

var _Guac = require('guac-hoc/lib/Guac');

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ComponentTemplate = function (_React$Component) {
  _inherits(ComponentTemplate, _React$Component);

  function ComponentTemplate() {
    _classCallCheck(this, ComponentTemplate);

    var _this = _possibleConstructorReturn(this, (ComponentTemplate.__proto__ || Object.getPrototypeOf(ComponentTemplate)).call(this));

    _this.bindAllMethods();
    return _this;
  }

  _createClass(ComponentTemplate, [{
    key: 'render',
    value: function render() {
      return React.createElement('div', null);
    }
  }]);

  return ComponentTemplate;
}(React.Component);

function mapStateToProps(state, ownProps) {
  return {};
}

function mapDispatchToProps(dispatch, ownProps) {
  return {};
}

exports.ComponentTemplate = ComponentTemplate = (0, _reactRouter.withRouter)((0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)((0, _Guac.Guac)(ComponentTemplate)));

exports.ComponentTemplate = ComponentTemplate;