'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Flyer = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var React = _interopRequireWildcard(_react);

var _logo = require('static/images/logos/logo.svg');

var _logo2 = _interopRequireDefault(_logo);

var _Divider = require('yui-md/lib/Divider');

var _Card = require('yui-md/lib/Card');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Flyer = function (_React$Component) {
  _inherits(Flyer, _React$Component);

  function Flyer() {
    _classCallCheck(this, Flyer);

    var _this = _possibleConstructorReturn(this, (Flyer.__proto__ || Object.getPrototypeOf(Flyer)).call(this));

    _this.render = _this.render.bind(_this);
    return _this;
  }

  _createClass(Flyer, [{
    key: 'render',
    value: function render() {
      return React.createElement(
        'div',
        { className: 'flyer' },
        React.createElement(
          'div',
          { className: 'paper-canvas' },
          React.createElement('div', { className: 'top-overhang-1 z-depth-1' }),
          React.createElement('div', { className: 'top-overhang-2 z-depth-1' }),
          React.createElement('div', { className: 'top-overhang-3 z-depth-2' }),
          React.createElement('div', { className: 'bottom-overhang-1 z-depth-5' }),
          React.createElement('div', { className: 'bottom-overhang-2 z-depth-5' })
        ),
        React.createElement(
          'div',
          { className: 'info-area' },
          React.createElement('img', { className: 'flyer-logo', src: _logo2.default }),
          React.createElement(
            'h4',
            { className: 'centered' },
            'CSUA'
          ),
          React.createElement(
            'p',
            { className: 'centered header' },
            'EE/CS Undergraduate Mixer'
          ),
          React.createElement(
            'p',
            { className: 'centered subheader' },
            'Thursday, 8/24, 11AM - 1PM'
          ),
          React.createElement(
            'p',
            { className: 'centered subheader' },
            'Wozniak Lounge, Soda Hall'
          ),
          React.createElement(_Divider.Divider, { horizontal: true, margin: true }),
          React.createElement(
            'p',
            { className: 'justified title' },
            'Come stop by the Wozniak Lounge during lunch next Thursday to meet professors, advisors, researchers, and peers! Lunch and refreshments will be served.'
          )
        )
      );
    }
  }]);

  return Flyer;
}(React.Component);

exports.default = Flyer;
exports.Flyer = Flyer;