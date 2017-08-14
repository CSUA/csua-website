'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.officers = undefined;

var _Benjamin_Li = require('static/images/officers/Benjamin_Li.jpg');

var _Benjamin_Li2 = _interopRequireDefault(_Benjamin_Li);

var _Caleb_Wyllie = require('static/images/officers/Caleb_Wyllie.jpg');

var _Caleb_Wyllie2 = _interopRequireDefault(_Caleb_Wyllie);

var _Charlie_Tian = require('static/images/officers/Charlie_Tian.jpg');

var _Charlie_Tian2 = _interopRequireDefault(_Charlie_Tian);

var _Emily_Gosti = require('static/images/officers/Emily_Gosti.jpg');

var _Emily_Gosti2 = _interopRequireDefault(_Emily_Gosti);

var _Eric_Hou = require('static/images/officers/Eric_Hou.jpg');

var _Eric_Hou2 = _interopRequireDefault(_Eric_Hou);

var _Jason_Ji = require('static/images/officers/Jason_Ji.jpg');

var _Jason_Ji2 = _interopRequireDefault(_Jason_Ji);

var _Jason_Yeung = require('static/images/officers/Jason_Yeung.jpg');

var _Jason_Yeung2 = _interopRequireDefault(_Jason_Yeung);

var _Jessica_Kuo = require('static/images/officers/Jessica_Kuo.png');

var _Jessica_Kuo2 = _interopRequireDefault(_Jessica_Kuo);

var _Jimmy_Kim = require('static/images/officers/Jimmy_Kim.jpg');

var _Jimmy_Kim2 = _interopRequireDefault(_Jimmy_Kim);

var _Jonathan_Tan = require('static/images/officers/Jonathan_Tan.JPG');

var _Jonathan_Tan2 = _interopRequireDefault(_Jonathan_Tan);

var _Juntai_Zheng = require('static/images/officers/Juntai_Zheng.jpg');

var _Juntai_Zheng2 = _interopRequireDefault(_Juntai_Zheng);

var _Loren_McIntyre = require('static/images/officers/Loren_McIntyre.jpg');

var _Loren_McIntyre2 = _interopRequireDefault(_Loren_McIntyre);

var _Megan_Zhu = require('static/images/officers/Megan_Zhu.jpg');

var _Megan_Zhu2 = _interopRequireDefault(_Megan_Zhu);

var _Michelle_Hsueh = require('static/images/officers/Michelle_Hsueh.jpg');

var _Michelle_Hsueh2 = _interopRequireDefault(_Michelle_Hsueh);

var _Neil_Lingarkar = require('static/images/officers/Neil_Lingarkar.jpg');

var _Neil_Lingarkar2 = _interopRequireDefault(_Neil_Lingarkar);

var _Parth_Singal = require('static/images/officers/Parth_Singal.jpg');

var _Parth_Singal2 = _interopRequireDefault(_Parth_Singal);

var _Ray_Pan = require('static/images/officers/Ray_Pan.JPG');

var _Ray_Pan2 = _interopRequireDefault(_Ray_Pan);

var _Robert_Quitt = require('static/images/officers/Robert_Quitt.jpg');

var _Robert_Quitt2 = _interopRequireDefault(_Robert_Quitt);

var _Yannan_Tuo = require('static/images/officers/Yannan_Tuo.jpg');

var _Yannan_Tuo2 = _interopRequireDefault(_Yannan_Tuo);

var _Yitz_Deng = require('static/images/officers/Yitz_Deng.jpg');

var _Yitz_Deng2 = _interopRequireDefault(_Yitz_Deng);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } } //These resolve to image strings that webpack outputs


var Officer = function Officer(name, hours, img, quote) {
  _classCallCheck(this, Officer);

  this.name = name;
  this.hours = hours;
  this.img = img;
  this.quote = quote;
};

var officers = [new Officer('Benjamin Li', 'Mon 11AM-12PM', _Benjamin_Li2.default, '"Ask me about my sick skills in Super Smash Bros Melee!"'), new Officer('Caleb Wyllie', 'Thu 1PM-2PM', _Caleb_Wyllie2.default, '"I like to climb things and browse memes"'), new Officer('Charlie Tian', 'Tue 6PM-7PM', _Charlie_Tian2.default, '"hiu machines"'), new Officer('Emily Gosti', 'Wed 4PM-5PM', _Emily_Gosti2.default, '"Livin\' la vida boba"'), new Officer('Eric Hou', 'Thu 4PM-5PM', _Eric_Hou2.default, '"TensorFlow sucks"'), new Officer('Jason Ji', 'Thu 6PM-7PM', _Jason_Ji2.default, "I say okay, okay, okay, okidokie"), new Officer('Jason Yeung', 'Tue 11PM-12PM', _Jason_Yeung2.default, "Blurp."), new Officer('Jessica Kuo', 'Thurs 12PM-1PM', _Jessica_Kuo2.default, '"Biology tells you you\'re 70% water, chemistry tells you\
      you\'re 60% oxygen, and physics tells you you\'re 99.99%\
      empty space. But I tell you you\'re 100% a cutie! :)"'), new Officer('Jimmy Kim', 'Fri 6PM-7PM', _Jimmy_Kim2.default, '"I play children\'s card games."'), new Officer('Jonathan Tan', 'Fri 5PM-6PM', _Jonathan_Tan2.default, '"praise the sun"'), new Officer('Juntai Zheng', 'Thu 10AM-11AM', _Juntai_Zheng2.default, '"real coders type with only their index fingers"'), new Officer('Loren McIntyre', 'Tue 1PM-2PM', _Loren_McIntyre2.default, '"Can\'t stand unnecessary acronyms"'), new Officer('Megan Zhu', 'Mon 6PM-7PM', _Megan_Zhu2.default, '"I like coding and AI stuff and games (overwatch!)"'), new Officer('Michelle Hsueh', 'Mon 3PM-4PM', _Michelle_Hsueh2.default, '"Two kittens are on a roof. Which one slides off first? The one with the\
    smaller μ (mew)! ＾• ω •＾"'), new Officer('Neil Lingarkar', 'Thu 2PM-3PM', _Neil_Lingarkar2.default, '"hi"'), new Officer('Parth Singal', 'Wed 12PM-1PM', _Parth_Singal2.default, '"Random powers: Levitation, Time"'), new Officer('Ray Pan', 'Mon 4PM-5PM', _Ray_Pan2.default, '"I for one welcome our new robot overlords"'), new Officer('Robert Quitt', 'Fri 2PM-3PM', _Robert_Quitt2.default, '"I\'d just like to interject for a moment..."'), new Officer('Yannan Tuo', 'Fri 4PM-5PM', _Yannan_Tuo2.default, '"Will sing for food (will sing regardless)"'), new Officer('Yitz Deng', 'Tue 4PM-5PM', _Yitz_Deng2.default, '"GIF is pronounced like gift but without the t."')];

exports.default = officers;
exports.officers = officers;