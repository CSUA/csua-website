'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.EventCalendar = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var React = _interopRequireWildcard(_react);

var _reactRedux = require('react-redux');

var _redux = require('redux');

var _reactRouter = require('react-router');

var _Guac = require('guac-hoc/lib/Guac');

var _Card = require('yui-md/lib/Card');

var _Icon = require('yui-md/lib/Icon');

var _Divider = require('yui-md/lib/Divider');

var _events = require('static/data/events');

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/*
  Props:
  - verbose <boolean>: if verbose, shows description as well.
  - small <boolean>: if the events should be small.
  - name <string>: Calendar name.
  - events <list<Event>>: list of events
*/
var EventCalendar = function (_React$Component) {
  _inherits(EventCalendar, _React$Component);

  function EventCalendar() {
    _classCallCheck(this, EventCalendar);

    var _this = _possibleConstructorReturn(this, (EventCalendar.__proto__ || Object.getPrototypeOf(EventCalendar)).call(this));

    _this.bindAllMethods();
    return _this;
  }

  _createClass(EventCalendar, [{
    key: 'calcEventComponent',
    value: function calcEventComponent(event, verbose, small, key) {
      return React.createElement(
        'div',
        { key: key },
        React.createElement(
          'p',
          { className: small ? 'title-small' : 'title' },
          event.date,
          ' : ',
          event.name
        ),
        React.createElement(
          'p',
          { className: small ? 'subheader-small' : 'subheader' },
          event.time,
          '\u2003|\u2003',
          event.location
        ),
        verbose ? small ? React.createElement(
          'small',
          null,
          event.description
        ) : React.createElement(
          'p',
          null,
          event.description
        ) : null
      );
    }

    /*
      Find event object structure in /static/data/events
    */

  }, {
    key: 'calcEventComponents',
    value: function calcEventComponents(props) {
      var events = props.events;
      var eventComponents = [];
      for (var i in events) {
        var event = events[i];
        eventComponents.push(React.createElement(_Divider.Divider, { horizontal: true, margin: true, key: i * 2 }));
        eventComponents.push(this.calcEventComponent(event, props.verbose, props.small, i * 2 + 1));
      }
      return eventComponents;
    }
  }, {
    key: 'render',
    value: function render() {
      return React.createElement(
        _Card.Card,
        null,
        React.createElement(
          _Card.CardTextArea,
          null,
          React.createElement(
            'p',
            { className: 'centered ' + (this.props.small ? 'title' : 'header') },
            this.props.name
          ),
          React.createElement(
            _Icon.Icon,
            { className: 'centered' },
            'event_note'
          ),
          this.calcEventComponents(this.props)
        )
      );
    }
  }]);

  return EventCalendar;
}(React.Component);

EventCalendar.defaultProps = {
  events: _events.events,
  verbose: false,
  small: false,
  name: 'Calendar'
};

exports.EventCalendar = EventCalendar = (0, _Guac.Guac)(EventCalendar);

exports.default = EventCalendar;
exports.EventCalendar = EventCalendar;