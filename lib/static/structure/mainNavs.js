'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.mainNavs = undefined;

var _paths = require('./paths');

var _paths2 = _interopRequireDefault(_paths);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Nav = function Nav(name, href) {
  var subnavs = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;

  _classCallCheck(this, Nav);

  this.name = name;
  this.href = href;
  this.subnavs = subnavs;
};

var aboutNavs = [new Nav('Politburo', _paths2.default.politburo), new Nav('Officers', _paths2.default.officers), new Nav('Constitution', _paths2.default.constitution)];

var eventNavs = [new Nav('Workshops', _paths2.default.workshops), new Nav('Recruiting', _paths2.default.recruiting), new Nav('General Meetings', _paths2.default.gms), new Nav('Socials', _paths2.default.socials)];

var industryNavs = [new Nav('Find a Job', _paths2.default.findAJob)];

var mainNavs = [new Nav('About', _paths2.default.about, aboutNavs), new Nav('Events', _paths2.default.events, eventNavs), new Nav('Industry', _paths2.default.industry, industryNavs), new Nav('Showcase', _paths2.default.showcase), new Nav('Join', _paths2.default.join)];

exports.default = mainNavs;
exports.mainNavs = mainNavs;