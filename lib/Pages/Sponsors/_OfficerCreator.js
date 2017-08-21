'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports._OfficerCreator = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var React = _interopRequireWildcard(_react);

var _reactRedux = require('react-redux');

var _redux = require('redux');

var _reactRouter = require('react-router');

var _Guac = require('guac-hoc/lib/Guac');

var _lib = require('yui-md/lib');

var _Card = require('yui-md/lib/Card');

var _reactLazyLoad = require('react-lazy-load');

var _reactLazyLoad2 = _interopRequireDefault(_reactLazyLoad);

var _sponsors = require('static/data/sponsors');

var _sponsors2 = _interopRequireDefault(_sponsors);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/*
  Props:
    - sponsors <array>: see static/data/sponsors for structure.
*/
var _OfficerCreator = function (_React$Component) {
  _inherits(_OfficerCreator, _React$Component);

  function _OfficerCreator() {
    _classCallCheck(this, _OfficerCreator);

    var _this = _possibleConstructorReturn(this, (_OfficerCreator.__proto__ || Object.getPrototypeOf(_OfficerCreator)).call(this));

    _this.bindAllMethods();
    return _this;
  }

  _createClass(_OfficerCreator, [{
    key: 'calcOfficerComponents',
    value: function calcOfficerComponents(props) {
      var sponsors = props.sponsors;
      var officerComponents = [];
      for (var i in sponsors) {
        var officer = sponsors[i];
        officerComponents.push(React.createElement(
          _lib.Col,
          { key: i, xs: 6, lg: 4 },
          React.createElement(
            _Card.Card,
            null,
            React.createElement(
              _Card.CardImageArea,
              { xs: 12 },
              React.createElement(
                _reactLazyLoad2.default,
                { debounce: false, throttle: 50 },
                React.createElement('img', { src: officer.img })
              )
            ),
            React.createElement(
              _Card.CardTextArea,
              { xs: 12 },
              React.createElement(
                'p',
                { className: 'title' },
                officer.name
              ),
              React.createElement(
                'p',
                { className: 'name subheader' },
                officer.hours
              ),
              React.createElement(_lib.Divider, { horizontal: true, margin: true }),
              React.createElement(
                'p',
                null,
                officer.quote
              )
            )
          )
        ));
      }
      return officerComponents;
    }
  }, {
    key: 'render',
    value: function render() {
      return React.createElement(
        _lib.Row,
        null,
        this.calcOfficerComponents(this.props)
      );
    }
  }]);

  return _OfficerCreator;
}(React.Component);

_OfficerCreator.defaultProps = {
  sponsors: _sponsors2.default
};

exports._OfficerCreator = _OfficerCreator = (0, _Guac.Guac)(_OfficerCreator);

exports.default = _OfficerCreator;
exports._OfficerCreator = _OfficerCreator;