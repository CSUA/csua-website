'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports._PolitburoCreator = undefined;

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

var _pb = require('static/data/pb');

var _pb2 = _interopRequireDefault(_pb);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/*
  Props:
    - pb <array>: see static/data/pb for structure.
*/
var _PolitburoCreator = function (_React$Component) {
  _inherits(_PolitburoCreator, _React$Component);

  function _PolitburoCreator() {
    _classCallCheck(this, _PolitburoCreator);

    var _this = _possibleConstructorReturn(this, (_PolitburoCreator.__proto__ || Object.getPrototypeOf(_PolitburoCreator)).call(this));

    _this.bindAllMethods();
    return _this;
  }

  _createClass(_PolitburoCreator, [{
    key: 'calcPolitburoComponents',
    value: function calcPolitburoComponents(props) {
      var pb = props.pb;
      var pbComponents = [];
      for (var i in pb) {
        var pbMember = pb[i];
        pbComponents.push(React.createElement(
          _Card.Card,
          { key: i },
          React.createElement(
            _Card.CardImageArea,
            { xs: 12, md: 6, lg: 5 },
            React.createElement(
              _reactLazyLoad2.default,
              { debounce: false, throttle: 50 },
              React.createElement('img', { src: pbMember.img })
            )
          ),
          React.createElement(
            _Card.CardTextArea,
            { xs: 12, md: 6, lg: 7 },
            React.createElement(
              'p',
              { className: 'header' },
              pbMember.role
            ),
            React.createElement(
              'p',
              { className: 'name subheader' },
              pbMember.name
            ),
            React.createElement(
              'p',
              { className: 'email subheader' },
              pbMember.email
            ),
            React.createElement(_lib.Divider, { horizontal: true, margin: true }),
            React.createElement(
              'p',
              null,
              pbMember.description
            ),
            React.createElement(
              'p',
              null,
              pbMember.pitch
            )
          )
        ));
      }
      return pbComponents;
    }
  }, {
    key: 'render',
    value: function render() {
      return React.createElement(
        'div',
        null,
        this.calcPolitburoComponents(this.props)
      );
    }
  }]);

  return _PolitburoCreator;
}(React.Component);

_PolitburoCreator.defaultProps = {
  pb: _pb2.default
};

exports._PolitburoCreator = _PolitburoCreator = (0, _Guac.Guac)(_PolitburoCreator);

exports.default = _PolitburoCreator;
exports._PolitburoCreator = _PolitburoCreator;