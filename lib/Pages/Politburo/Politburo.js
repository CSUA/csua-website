'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Politburo = undefined;

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

var _Divider = require('yui-md/lib/Divider');

var _PaperBorder2 = require('./_PaperBorder');

var _PaperBorder3 = _interopRequireDefault(_PaperBorder2);

var _pb = require('static/images/pb/pb.jpg');

var _pb2 = _interopRequireDefault(_pb);

var _Megan_Zhu = require('static/images/pb/Megan_Zhu.jpg');

var _Megan_Zhu2 = _interopRequireDefault(_Megan_Zhu);

var _Eric_Hou = require('static/images/pb/Eric_Hou.jpg');

var _Eric_Hou2 = _interopRequireDefault(_Eric_Hou);

var _Jonathan_Tan = require('static/images/pb/Jonathan_Tan.jpg');

var _Jonathan_Tan2 = _interopRequireDefault(_Jonathan_Tan);

var _Jason_Ji = require('static/images/pb/Jason_Ji.jpg');

var _Jason_Ji2 = _interopRequireDefault(_Jason_Ji);

var _Ray_Pan = require('static/images/pb/Ray_Pan.jpg');

var _Ray_Pan2 = _interopRequireDefault(_Ray_Pan);

var _Yitz_Deng = require('static/images/pb/Yitz_Deng.jpg');

var _Yitz_Deng2 = _interopRequireDefault(_Yitz_Deng);

var _Emily_Gosti = require('static/images/pb/Emily_Gosti.jpg');

var _Emily_Gosti2 = _interopRequireDefault(_Emily_Gosti);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

//These resolve to image strings that webpack outputs


var Politburo = function (_React$Component) {
  _inherits(Politburo, _React$Component);

  function Politburo() {
    _classCallCheck(this, Politburo);

    var _this = _possibleConstructorReturn(this, (Politburo.__proto__ || Object.getPrototypeOf(Politburo)).call(this));

    _this.render = _this.render.bind(_this);
    return _this;
  }

  _createClass(Politburo, [{
    key: 'render',
    value: function render() {
      return React.createElement(
        'div',
        { className: 'pb-page' },
        React.createElement(_PaperBorder3.default, null),
        React.createElement(
          'div',
          { className: 'title-area' },
          React.createElement(
            'h3',
            { className: 'centered page-title' },
            'Politburo'
          ),
          React.createElement(
            'p',
            { className: 'centered header' },
            'Po\xB7lit\xB7bu\xB7ro (n):'
          ),
          React.createElement(
            'p',
            { className: 'centered subheader' },
            'The central leadership of the CSUA, consisting of seven elected officers who are devoted to serving the undergraduate community. '
          ),
          React.createElement('br', null)
        ),
        React.createElement(
          'div',
          { className: 'info-area' },
          React.createElement(
            _Card.Card,
            { className: 'card-content' },
            React.createElement(
              _Card.CardImageArea,
              null,
              React.createElement(
                _reactLazyLoad2.default,
                { debounce: false, throttle: 50 },
                React.createElement('img', { src: _pb2.default, style: { width: '100%' } })
              )
            ),
            React.createElement(
              _Card.CardTextArea,
              null,
              React.createElement(
                'p',
                null,
                'Newly elected Politburo members in the Wozniak Lounge.'
              )
            )
          ),
          React.createElement(
            _Card.Card,
            null,
            React.createElement(
              _Card.CardImageArea,
              { xs: 12, md: 6, lg: 5 },
              React.createElement(
                _reactLazyLoad2.default,
                { debounce: false, throttle: 50 },
                React.createElement('img', { src: _Megan_Zhu2.default })
              )
            ),
            React.createElement(
              _Card.CardTextArea,
              { xs: 12, md: 6, lg: 7 },
              React.createElement(
                'p',
                { className: 'header' },
                'President'
              ),
              React.createElement(
                'p',
                { className: 'name subheader' },
                'Megan Zhu'
              ),
              React.createElement(
                'p',
                { className: 'email subheader' },
                'president@csua.berkeley.edu'
              ),
              React.createElement(_Divider.Divider, { horizontal: true, margin: true }),
              React.createElement(
                'p',
                null,
                'The President leads meetings and represents the CSUA in its duties as the undergraduate computer science students\' representative body. The President liaisons with the University, faculty, staff, and other student organizations.'
              ),
              React.createElement(
                'p',
                null,
                'Please contact Megan for general questions or concerns about the CSUA.'
              )
            )
          ),
          React.createElement(
            _Card.Card,
            null,
            React.createElement(
              _Card.CardImageArea,
              { xs: 12, md: 6, lg: 5 },
              React.createElement(
                _reactLazyLoad2.default,
                { debounce: false, throttle: 50 },
                React.createElement('img', { src: _Eric_Hou2.default })
              )
            ),
            React.createElement(
              _Card.CardTextArea,
              { xs: 12, md: 6, lg: 7 },
              React.createElement(
                'p',
                { className: 'header' },
                'VP - Industry Relations'
              ),
              React.createElement(
                'p',
                { className: 'name subheader' },
                'Eric Hou'
              ),
              React.createElement(
                'p',
                { className: 'email subheader' },
                'indrel@csua.berkeley.edu'
              ),
              React.createElement(_Divider.Divider, { horizontal: true, margin: true }),
              React.createElement(
                'p',
                null,
                'The VP of Industry Relations is the CSUA liaison with companies and alumni. The VP attains sponsors for external events and generates industry interest in the CSUA. The VP also coordinates speakers for events, manages info sessions and the job list-serve, and assists the President.'
              ),
              React.createElement(
                'p',
                null,
                'Please contact Eric for any questions regarding events, info sessions, speaking events, or sponsorships. Thank you for your support and interest in the CSUA.'
              )
            )
          ),
          React.createElement(
            _Card.Card,
            null,
            React.createElement(
              _Card.CardImageArea,
              { xs: 12, md: 6, lg: 5 },
              React.createElement(
                _reactLazyLoad2.default,
                { debounce: false, throttle: 50 },
                React.createElement('img', { src: _Jonathan_Tan2.default })
              )
            ),
            React.createElement(
              _Card.CardTextArea,
              { xs: 12, md: 6, lg: 7 },
              React.createElement(
                'p',
                { className: 'header' },
                'VP - Technology'
              ),
              React.createElement(
                'p',
                { className: 'name subheader' },
                'Jonathan Tan'
              ),
              React.createElement(
                'p',
                { className: 'email subheader' },
                'vp@csua.berkeley.edu'
              ),
              React.createElement(_Divider.Divider, { horizontal: true, margin: true }),
              React.createElement(
                'p',
                null,
                'The VP of Technology administers and maintains the technical resources of the CSUA, such as the computer equipment, servers, and list-serves. The VP is also the head of our root staff and a liaison with all campus IT and technical services. The VP solves or delegates the solving of any technical issues.'
              ),
              React.createElement(
                'p',
                null,
                'If you have any questions about your account or the CSUA servers or software, please contact Jonathan.'
              )
            )
          ),
          React.createElement(
            _Card.Card,
            null,
            React.createElement(
              _Card.CardImageArea,
              { xs: 12, md: 6, lg: 5 },
              React.createElement(
                _reactLazyLoad2.default,
                { debounce: false, throttle: 50 },
                React.createElement('img', { src: _Yitz_Deng2.default })
              )
            ),
            React.createElement(
              _Card.CardTextArea,
              { xs: 12, md: 6, lg: 7 },
              React.createElement(
                'p',
                { className: 'header' },
                'Secretary/Treasurer'
              ),
              React.createElement(
                'p',
                { className: 'name subheader' },
                'Yitz Deng'
              ),
              React.createElement(
                'p',
                { className: 'email subheader' },
                'treasurer@csua.berkeley.edu'
              ),
              React.createElement(_Divider.Divider, { horizontal: true, margin: true }),
              React.createElement(
                'p',
                null,
                'The Secretary/Treasurer takes minutes at meetings, maintains the CSUA\'s monetary and physical resources (office, study lounge, library, etc.), and keeps all financial and non- financial records. The Secretary/Treasurer is also the liaison with any University funding programs or facility maintenance and the primary signatory power with the ASUC.'
              ),
              React.createElement(
                'p',
                null,
                'Please contact Yitz for questions about the CSUA\'s budget, resources, or records.'
              )
            )
          ),
          React.createElement(
            _Card.Card,
            null,
            React.createElement(
              _Card.CardImageArea,
              { xs: 12, md: 6, lg: 5 },
              React.createElement(
                _reactLazyLoad2.default,
                { debounce: false, throttle: 50 },
                React.createElement('img', { src: _Ray_Pan2.default })
              )
            ),
            React.createElement(
              _Card.CardTextArea,
              { xs: 12, md: 6, lg: 7 },
              React.createElement(
                'p',
                { className: 'header' },
                'External Events Coordinator'
              ),
              React.createElement(
                'p',
                { className: 'name subheader' },
                'Ray Pan'
              ),
              React.createElement(
                'p',
                { className: 'email subheader' },
                'externalevents@csua.berkeley.edu'
              ),
              React.createElement(_Divider.Divider, { horizontal: true, margin: true }),
              React.createElement(
                'p',
                null,
                'The External Events Coordinator plans all external CSUA events. An external event is defined as an event sponsored by a company. The External Events Coordinator works closely with the VP of Industrial Relations and the Internal Events Coordinator.'
              ),
              React.createElement(
                'p',
                null,
                'Please contact Ray for any questions regarding upcoming external events or with offers for potential future events.'
              )
            )
          ),
          React.createElement(
            _Card.Card,
            null,
            React.createElement(
              _Card.CardImageArea,
              { xs: 12, md: 6, lg: 5 },
              React.createElement(
                _reactLazyLoad2.default,
                { debounce: false, throttle: 50 },
                React.createElement('img', { src: _Jason_Ji2.default })
              )
            ),
            React.createElement(
              _Card.CardTextArea,
              { xs: 12, md: 6, lg: 7 },
              React.createElement(
                'p',
                { className: 'header' },
                'Internal Events Coordinator'
              ),
              React.createElement(
                'p',
                { className: 'name subheader' },
                'Jason Ji'
              ),
              React.createElement(
                'p',
                { className: 'email subheader' },
                'internalevents@csua.berkeley.edu'
              ),
              React.createElement(_Divider.Divider, { horizontal: true, margin: true }),
              React.createElement(
                'p',
                null,
                'The Internal Events Coordinator plans all internal CSUA events. An internal event is defined as an event that does not have a company sponsor. This includes general meetings, intersocial events, and alumni events. The Internal Events Coordinator works closely with the External Events Coordinator.'
              ),
              React.createElement(
                'p',
                null,
                'Please direct internal events questions to Jason.'
              )
            )
          ),
          React.createElement(
            _Card.Card,
            null,
            React.createElement(
              _Card.CardImageArea,
              { xs: 12, md: 6, lg: 5 },
              React.createElement(
                _reactLazyLoad2.default,
                { debounce: false, throttle: 50 },
                React.createElement('img', { src: _Emily_Gosti2.default })
              )
            ),
            React.createElement(
              _Card.CardTextArea,
              { xs: 12, md: 6, lg: 7 },
              React.createElement(
                'p',
                { className: 'header' },
                'Outreach'
              ),
              React.createElement(
                'p',
                { className: 'name subheader' },
                'Emily Gosti'
              ),
              React.createElement(
                'p',
                { className: 'email subheader' },
                'outreach@csua.berkeley.edu'
              ),
              React.createElement(_Divider.Divider, { horizontal: true, margin: true }),
              React.createElement(
                'p',
                null,
                'The Outreach chair maintains or delegates the maintenance of the website and various social media accounts. The Outreach chair also publicizes all CSUA events to the student body, promotes interaction between current students and alumni, and welcomes new members.'
              ),
              React.createElement(
                'p',
                null,
                'If you are a student interested in joining the CSUA, feel free to reach out to Emily.'
              )
            )
          )
        )
      );
    }
  }]);

  return Politburo;
}(React.Component);

function mapStateToProps(state, ownProps) {
  return {};
}

function mapDispatchToProps(dispatch, ownProps) {
  return {};
}

exports.Politburo = Politburo = (0, _reactRouter.withRouter)((0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(Politburo));

exports.Politburo = Politburo;