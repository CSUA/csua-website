'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Header = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var React = _interopRequireWildcard(_react);

var _reactRedux = require('react-redux');

var _redux = require('redux');

var _reactRouter = require('react-router');

var _Guac = require('guac-hoc/lib/Guac');

var _AppBar = require('yui-md/lib/AppBar');

var _Tab = require('yui-md/lib/Tab');

var _TabList = require('yui-md/lib/TabList');

var _Menu = require('yui-md/lib/Menu');

var _MenuItem = require('yui-md/lib/MenuItem');

var _NavCreator2 = require('./_NavCreator');

var _logo = require('static/images/logos/logo.svg');

var _logo2 = _interopRequireDefault(_logo);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Header = function (_React$Component) {
  _inherits(Header, _React$Component);

  function Header() {
    _classCallCheck(this, Header);

    var _this = _possibleConstructorReturn(this, (Header.__proto__ || Object.getPrototypeOf(Header)).call(this));

    _this.bindAllMethods();
    _this.state = {
      isActive: {
        aboutMenu: false,
        eventsMenu: false
      }
    };
    return _this;
  }

  _createClass(Header, [{
    key: 'setMenuActive',
    value: function setMenuActive(menuName, active) {
      var currentlyActive = typeof active === 'undefined' ? !this.state.isActive[menuName] : active;
      this.state.isActive[menuName] = currentlyActive;
      this.setState({ isActive: this.state.isActive });
    }
  }, {
    key: 'render',
    value: function render() {
      return React.createElement(
        _AppBar.AppBar,
        { height: 82,
          style: { paddingTop: '12px', boxSizing: 'border-box' },
          className: 'z-depth-1',
          backgroundColor: 'white' },
        React.createElement('img', { style: { display: 'inline-block',
            height: '40px',
            marginBottom: '-8px' },
          src: _logo2.default }),
        React.createElement(
          'h4',
          { style: { display: 'inline-block' } },
          '\xA0\xA0CSUA'
        ),
        React.createElement(_NavCreator2._NavCreator, null)
      );
    }
  }]);

  return Header;
}(React.Component);

function mapStateToProps(state, ownProps) {
  return {};
}

function mapDispatchToProps(dispatch, ownProps) {
  return {};
}

exports.Header = Header = (0, _reactRouter.withRouter)((0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)((0, _Guac.Guac)(Header)));

exports.default = Header;
exports.Header = Header;