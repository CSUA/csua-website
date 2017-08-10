'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.About = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var React = _interopRequireWildcard(_react);

var _reactRedux = require('react-redux');

require('./style.scss');

var _redux = require('redux');

var _reactRouter = require('react-router');

var _lib = require('yui-md/lib');

var _Button = require('yui-md/lib/Button');

var _Icon = require('yui-md/lib/Icon');

var _Card = require('yui-md/lib/Card');

var _PaperBorder2 = require('./_PaperBorder');

var _PaperBorder3 = _interopRequireDefault(_PaperBorder2);

var _Officers_FA = require('../../static/images/Officers_FA16.jpg');

var _Officers_FA2 = _interopRequireDefault(_Officers_FA);

var _Woz = require('../../static/images/Woz.jpg');

var _Woz2 = _interopRequireDefault(_Woz);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var About = function (_React$Component) {
  _inherits(About, _React$Component);

  function About() {
    _classCallCheck(this, About);

    var _this = _possibleConstructorReturn(this, (About.__proto__ || Object.getPrototypeOf(About)).call(this));

    _this.render = _this.render.bind(_this);
    return _this;
  }

  _createClass(About, [{
    key: 'render',
    value: function render() {
      return React.createElement(
        'div',
        { className: 'about-page' },
        React.createElement(_PaperBorder3.default, null)
      );
    }
  }]);

  return About;
}(React.Component);

function mapStateToProps(state, ownProps) {
  return {};
}

function mapDispatchToProps(dispatch, ownProps) {
  return {};
}

exports.About = About = (0, _reactRouter.withRouter)((0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(About));

exports.About = About;