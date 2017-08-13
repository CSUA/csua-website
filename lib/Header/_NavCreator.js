'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports._NavCreator = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var React = _interopRequireWildcard(_react);

var _Guac = require('guac-hoc/lib/Guac');

var _Tab = require('yui-md/lib/Tab');

var _TabList = require('yui-md/lib/TabList');

var _Menu = require('yui-md/lib/Menu');

var _MenuItem = require('yui-md/lib/MenuItem');

var _mainNavs = require('static/structure/mainNavs.js');

var _mainNavs2 = _interopRequireDefault(_mainNavs);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/*
  Props:
  - navs: navs specified by mainNavs.js
*/
var _NavCreator = function (_React$Component) {
  _inherits(_NavCreator, _React$Component);

  function _NavCreator(props) {
    _classCallCheck(this, _NavCreator);

    var _this = _possibleConstructorReturn(this, (_NavCreator.__proto__ || Object.getPrototypeOf(_NavCreator)).call(this, props));

    _this.bindAllMethods();
    var isActive = {};
    for (var i in props.navs) {
      isActive[props.navs[i].name] = false;
    }
    _this.state = {
      isActive: isActive
    };
    return _this;
  }

  _createClass(_NavCreator, [{
    key: 'setMenuActive',
    value: function setMenuActive(menuName, active) {
      var currentlyActive = typeof active === 'undefined' ? !this.state.isActive[menuName] : active;
      this.state.isActive[menuName] = currentlyActive;
      this.setState({ isActive: this.state.isActive });
    }

    /*
      Only allows 2-deep navs
    */

  }, {
    key: 'calcNavComponents',
    value: function calcNavComponents(props) {
      var _this2 = this;

      var navs = props.navs;
      var navComponents = [];

      //Generate the tabs for the navs

      var _loop = function _loop() {
        var nav = navs[i];
        var menu = null;
        if (nav.subnavs) {
          var menuItems = [];

          //Generate menu items for the subnavs
          for (i2 in nav.subnavs) {
            var subnav = nav.subnavs[i2];
            menuItems.push(React.createElement(
              _MenuItem.MenuItem,
              { key: i2 },
              subnav.name
            ));
          }
          //Generate menu for the subnavs
          menu = React.createElement(
            _Menu.Menu,
            { dense: true, fastExpand: true,
              active: _this2.state.isActive[nav.name],
              setActive: function setActive(active) {
                return _this2.setMenuActive(nav.name, active);
              },
              expand: 'vertical',
              style: { fontSize: '10px' } },
            menuItems
          );
        }
        navComponents.push(React.createElement(
          _Tab.Tab,
          {
            key: i,
            onMouseEnter: function onMouseEnter() {
              return _this2.setMenuActive(nav.name, true);
            },
            onMouseLeave: function onMouseLeave() {
              return _this2.setMenuActive(nav.name, false);
            } },
          nav.name,
          menu
        ));
      };

      for (var i in navs) {
        var i2;

        _loop();
      }
      return navComponents;
    }
  }, {
    key: 'render',
    value: function render() {
      return React.createElement(
        _TabList.TabList,
        { style: { margin: '10px',
            marginBottom: '-10px',
            boxSizing: 'border-box',
            maxWidth: '70%',
            float: 'right' } },
        this.calcNavComponents(this.props)
      );
    }
  }]);

  return _NavCreator;
}(React.Component);

_NavCreator.defaultProps = {
  navs: _mainNavs2.default
};

exports._NavCreator = _NavCreator = (0, _Guac.Guac)(_NavCreator);

exports.default = _NavCreator;
exports._NavCreator = _NavCreator;