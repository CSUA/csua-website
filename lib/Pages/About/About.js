'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.About = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var React = _interopRequireWildcard(_react);

var _reactRedux = require('react-redux');

var _redux = require('redux');

var _reactRouter = require('react-router');

var _reactLazyLoad = require('react-lazy-load');

var _reactLazyLoad2 = _interopRequireDefault(_reactLazyLoad);

var _lib = require('yui-md/lib');

var _Button = require('yui-md/lib/Button');

var _Icon = require('yui-md/lib/Icon');

var _Card = require('yui-md/lib/Card');

var _PaperBorder2 = require('./_PaperBorder');

var _PaperBorder3 = _interopRequireDefault(_PaperBorder2);

var _Officers_FA = require('static/images/Officers_FA16.jpg');

var _Officers_FA2 = _interopRequireDefault(_Officers_FA);

var _Woz = require('static/images/Woz.jpg');

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
        { className: 'about-page page' },
        React.createElement(_PaperBorder3.default, null),
        React.createElement(
          'div',
          { className: 'title-area' },
          React.createElement(
            'h1',
            { className: 'centered' },
            'CSUA'
          ),
          React.createElement(
            'h4',
            { className: 'centered' },
            'The home for all things CS.'
          ),
          React.createElement(
            'div',
            { className: 'centered subtitle' },
            React.createElement(_Button.IconButton, { large: true, icon: 'keyboard_arrow_down' })
          )
        ),
        React.createElement(
          'div',
          { className: 'info-area' },
          React.createElement(
            'h4',
            { className: 'centered' },
            'The Computer Science Undergraduate Association'
          ),
          React.createElement('br', null),
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
                    'Hello World!'
                  ),
                  React.createElement(
                    _Icon.Icon,
                    { className: 'centered' },
                    'lightbulb_outline'
                  ),
                  React.createElement(
                    'p',
                    null,
                    'The CSUA is here to make every step of your undergraduate computer science experience smoother, easier, and more fun! Looking for an internship or a job? Want to learn more CS skills? Need help in a class? We have it all! Come to our events or visit us at 311 Soda Hall to check us out.'
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
                    'Who We Are'
                  ),
                  React.createElement(
                    _Icon.Icon,
                    { className: 'centered' },
                    'face'
                  ),
                  React.createElement(
                    'p',
                    null,
                    'We are a group of smart, enthusiastic, and fun-loving EECS and CS students who are passionate about computer science. We are researchers, TAs, GSIs, hackers, hardware gurus, open-sourcers, professionals, geeks, women, men, and in between. But most importantly, we\'re proud members of the CS community.'
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
                  React.createElement('img', { src: _Woz2.default, style: { maxHeight: '100%', maxWidth: '100%', alignSelf: 'center' } })
                ),
                React.createElement(
                  _Card.CardTextArea,
                  null,
                  React.createElement(
                    'small',
                    null,
                    'CSUA members hacking into the night.'
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
                    'Need Help?'
                  ),
                  React.createElement(
                    _Icon.Icon,
                    { className: 'centered' },
                    'help_outline'
                  ),
                  React.createElement(
                    'p',
                    null,
                    'The CSUA offers tutoring services, major declaration panels, internship workshops, and recruiting events. You can find a list of available tutors and office hours here. For events, click here. You can also drop by the office any time, and an available tutor will help you.'
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
                    'Upcoming Events'
                  ),
                  React.createElement(
                    _Icon.Icon,
                    { className: 'centered' },
                    'event_note'
                  ),
                  React.createElement(
                    'p',
                    null,
                    ' 9/1 - 5PM - Wozniak Lounge'
                  )
                )
              )
            ),
            React.createElement(
              _lib.Col,
              { xs: 12, lg: 8 },
              React.createElement(
                _Card.Card,
                null,
                React.createElement(
                  _Card.CardImageArea,
                  null,
                  React.createElement('img', { src: _Officers_FA2.default, style: { width: '100%' } })
                ),
                React.createElement(
                  _Card.CardTextArea,
                  null,
                  React.createElement(
                    'small',
                    null,
                    'CSUA officers at Hearst Mining Circle.'
                  )
                )
              )
            ),
            React.createElement(
              _lib.Col,
              { xs: 12, lg: 4 },
              React.createElement(
                _Card.Card,
                null,
                React.createElement(
                  _Card.CardTextArea,
                  null,
                  React.createElement(
                    'p',
                    { className: 'centered title' },
                    'Resources'
                  ),
                  React.createElement(
                    _Icon.Icon,
                    { className: 'centered' },
                    'bookmark_border'
                  )
                )
              )
            )
          )
        )
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

exports.default = About;
exports.About = About;