'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Industry = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var React = _interopRequireWildcard(_react);

var _reactRedux = require('react-redux');

var _redux = require('redux');

var _reactRouter = require('react-router');

var _reactLazyLoad = require('react-lazy-load');

var _reactLazyLoad2 = _interopRequireDefault(_reactLazyLoad);

var _Card = require('yui-md/lib/Card');

var _Icon = require('yui-md/lib/Icon');

var _lib = require('yui-md/lib');

var _officers = require('static/images/industry/officers.jpg');

var _officers2 = _interopRequireDefault(_officers);

var _industry_event = require('static/images/industry/industry_event.jpg');

var _industry_event2 = _interopRequireDefault(_industry_event);

var _PaperBorder2 = require('./_PaperBorder');

var _PaperBorder3 = _interopRequireDefault(_PaperBorder2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Industry = function (_React$Component) {
  _inherits(Industry, _React$Component);

  function Industry() {
    _classCallCheck(this, Industry);

    var _this = _possibleConstructorReturn(this, (Industry.__proto__ || Object.getPrototypeOf(Industry)).call(this));

    _this.render = _this.render.bind(_this);
    return _this;
  }

  _createClass(Industry, [{
    key: 'render',
    value: function render() {
      return React.createElement(
        'div',
        { className: 'industry-page' },
        React.createElement(_PaperBorder3.default, null),
        React.createElement(
          'div',
          { className: 'title-area' },
          React.createElement(
            'h3',
            { className: 'centered page-title' },
            'Industry'
          ),
          React.createElement(
            'p',
            { className: 'centered subheader' },
            'The Berkeley CSUA works closely with companies, investors, entrepreneurs, and active members of the tech industry to bring mentorship and job opportunities to students.'
          ),
          React.createElement('br', null)
        ),
        React.createElement(
          'div',
          { className: 'info-area' },
          React.createElement(
            _lib.Row,
            null,
            React.createElement(
              _lib.Col,
              { xs: 12, md: 6 },
              React.createElement(
                _Card.Card,
                null,
                React.createElement(
                  _Card.CardTextArea,
                  null,
                  React.createElement(
                    'p',
                    { className: 'centered title' },
                    'Cause'
                  ),
                  React.createElement(
                    _Icon.Icon,
                    { className: 'centered' },
                    'card_travel'
                  ),
                  React.createElement(
                    'p',
                    null,
                    'The CSUA is dedicated to improving the experience of computer science undergraduates at Berkeley. We host many types of events to bring the best of industry together with the best in computer science talent. Our sponsors fund some of the best resource on Berkeley\'s campus, from a web server, to a high-performance computing cluster, to career and technical development workshops that help teach students important skills for industry.'
                  )
                )
              )
            ),
            React.createElement(
              _lib.Col,
              { xs: 12, md: 6 },
              React.createElement(
                _Card.Card,
                null,
                React.createElement(
                  _Card.CardImageArea,
                  null,
                  React.createElement(
                    _reactLazyLoad2.default,
                    null,
                    React.createElement('img', { src: _industry_event2.default })
                  )
                ),
                React.createElement(
                  _Card.CardTextArea,
                  null,
                  React.createElement(
                    'small',
                    null,
                    'An industry panel presents their experiences.'
                  )
                )
              )
            ),
            React.createElement(
              _lib.Col,
              { xs: 12, md: 6 },
              React.createElement(
                _Card.Card,
                null,
                React.createElement(
                  _Card.CardTextArea,
                  null,
                  React.createElement(
                    'p',
                    { className: 'centered title' },
                    'Students'
                  ),
                  React.createElement(
                    _Icon.Icon,
                    { className: 'centered' },
                    'school'
                  ),
                  React.createElement(
                    'p',
                    null,
                    'If you\'re a student looking for a job or an internship, please look at our upcoming recruiting events here. If you want to get exposed to skills that employers are looking for, please refer to our workshops here. To be featured in our resume book, stop by any one of our professional development workshops and have your resume approved by a qualified CSUA officer. Finally, opt-in to receive job offers from our mailing list by speaking to an officer at one of our events or visiting our office at 311 Soda Hall.'
                  )
                )
              )
            ),
            React.createElement(
              _lib.Col,
              { xs: 12, md: 6 },
              React.createElement(
                _Card.Card,
                null,
                React.createElement(
                  _Card.CardTextArea,
                  null,
                  React.createElement(
                    'p',
                    { className: 'centered title' },
                    'Sponsors'
                  ),
                  React.createElement(
                    _Icon.Icon,
                    { className: 'centered' },
                    'domain'
                  ),
                  React.createElement(
                    'p',
                    null,
                    'If you would like to contribute to the CSUA, please email the Politburo at politburo@csua.berkeley.edu. We have many different sponsorship options, from hosting workshops to monetary sponsorships and recruiting events. If you are an industry sponsor and are interested in what the CSUA can offer your organization, please email our Industry Relations department at indrel@csua.berkeley.edu. Our current and former sponsors are listed here.'
                  )
                )
              )
            ),
            React.createElement(
              _lib.Col,
              { xs: 12 },
              React.createElement(
                _Card.Card,
                null,
                React.createElement(
                  _Card.CardImageArea,
                  null,
                  React.createElement(
                    _reactLazyLoad2.default,
                    null,
                    React.createElement('img', { src: _officers2.default })
                  )
                ),
                React.createElement(
                  _Card.CardTextArea,
                  null,
                  React.createElement(
                    'small',
                    null,
                    'Officers in front of Hearst Mining Circle.'
                  )
                )
              )
            )
          )
        )
      );
    }
  }]);

  return Industry;
}(React.Component);

exports.default = Industry;
exports.Industry = Industry;