'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.GeneralMeetings = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var React = _interopRequireWildcard(_react);

var _reactRedux = require('react-redux');

var _redux = require('redux');

var _reactRouter = require('react-router');

var _Card = require('yui-md/lib/Card');

var _Icon = require('yui-md/lib/Icon');

var _EventCalendar = require('widgets/EventCalendar');

var _PaperBorder2 = require('./_PaperBorder');

var _PaperBorder3 = _interopRequireDefault(_PaperBorder2);

var _events = require('static/data/events');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var GeneralMeetings = function (_React$Component) {
  _inherits(GeneralMeetings, _React$Component);

  function GeneralMeetings() {
    _classCallCheck(this, GeneralMeetings);

    var _this = _possibleConstructorReturn(this, (GeneralMeetings.__proto__ || Object.getPrototypeOf(GeneralMeetings)).call(this));

    _this.render = _this.render.bind(_this);
    return _this;
  }

  _createClass(GeneralMeetings, [{
    key: 'render',
    value: function render() {
      return React.createElement(
        'div',
        { className: 'general-meetings-page' },
        React.createElement(_PaperBorder3.default, null),
        React.createElement(
          'div',
          { className: 'title-area' },
          React.createElement(
            'h3',
            { className: 'centered page-title' },
            'General Meetings'
          ),
          React.createElement(
            'p',
            { className: 'centered subheader' },
            'Each semester the CSUA holds three general meetings to introduce our organization, help you network, and help guide our efforts.'
          ),
          React.createElement('br', null)
        ),
        React.createElement(
          'div',
          { className: 'info-area' },
          React.createElement(_EventCalendar.EventCalendar, { verbose: true, events: _events.generalMeetings })
        )
      );
    }
  }]);

  return GeneralMeetings;
}(React.Component);

exports.default = GeneralMeetings;
exports.GeneralMeetings = GeneralMeetings;