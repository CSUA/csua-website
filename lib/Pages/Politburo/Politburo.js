'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Politburo = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var React = _interopRequireWildcard(_react);

var _reactRedux = require('react-redux');

require('./style.scss');

var _redux = require('redux');

var _reactRouter = require('react-router');

var _lib = require('yui-md/lib');

var _Button = require('yui-md/lib/Button');

var _Icon = require('yui-md/lib/Icon');

var _Card = require('yui-md/lib/Card');

var _PaperBorder2 = require('./_PaperBorder');

var _PaperBorder3 = _interopRequireDefault(_PaperBorder2);

var _pb = require('../../static/images/pb/pb.jpg');

var _pb2 = _interopRequireDefault(_pb);

var _Megan_Zhu = require('../../static/images/pb/Megan_Zhu.jpg');

var _Megan_Zhu2 = _interopRequireDefault(_Megan_Zhu);

var _Eric_Hou = require('../../static/images/pb/Eric_Hou.jpg');

var _Eric_Hou2 = _interopRequireDefault(_Eric_Hou);

var _Jonathan_Tan = require('../../static/images/pb/Jonathan_Tan.jpg');

var _Jonathan_Tan2 = _interopRequireDefault(_Jonathan_Tan);

var _Neil_Lingarkar = require('../../static/images/pb/Neil_Lingarkar.jpg');

var _Neil_Lingarkar2 = _interopRequireDefault(_Neil_Lingarkar);

var _Ray_Pan = require('../../static/images/pb/Ray_Pan.jpg');

var _Ray_Pan2 = _interopRequireDefault(_Ray_Pan);

var _Yitz_Deng = require('../../static/images/pb/Yitz_Deng.jpg');

var _Yitz_Deng2 = _interopRequireDefault(_Yitz_Deng);

var _Emily_Gosti = require('../../static/images/pb/Emily_Gosti.jpg');

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
            'div',
            { className: 'centered title' },
            'Politburo'
          ),
          React.createElement(
            'p',
            { className: 'centered subtitle' },
            React.createElement(
              'b',
              null,
              'po\xB7lit\xB7bu\xB7ro (n):'
            ),
            ' ',
            React.createElement('br', null),
            ' The central leadership of the CSUA, consisting of seven elected officers who are devoted to serving the undergraduate community. '
          )
        ),
        React.createElement(
          'div',
          { className: 'intro-area' },
          React.createElement(
            _lib.Row,
            null,
            React.createElement(
              _lib.Col,
              { sm: 12, className: 'card-column' },
              React.createElement(
                _Card.Card,
                null,
                React.createElement('img', { src: _pb2.default, style: { width: '100%' } }),
                React.createElement(
                  'small',
                  null,
                  'Newly elected Politburo members in the Wozniak Lounge.'
                )
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