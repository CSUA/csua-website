'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Event = function Event(name) {
  var location = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'TBD';
  var date = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'TBD';
  var time = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 'TBD';
  var description = arguments[4];

  _classCallCheck(this, Event);

  this.name = name;
  this.location = location;
  this.date = date;
  this.time = time;
  this.description = description;
};

var facebookEvent = new Event('Facebook Recruiting Event', 'Wozniak Lounge, Soda Hall', 'Friday - 9/1', '5PM - 8PM', 'Want to work/intern at Facebook? Come learn about their program and submit your resume! Dinner provided.');

var events = [new Event('EE/CS Undergraduate Mixer', 'Wozniak Lounge, Soda Hall', 'Thursday - 8/24', '11AM - 1PM', 'Come network with current students, researchers, professors, and advisors. Lunch and refreshments provided.'), new Event('EE/CS Welcome Night', 'Wozniak Lounge, Soda Hall', 'Friday - 8/25', '8PM - 10PM', 'CSUA wants to welcome all new students with a board game night! Come and meet us and socialize with peers.'), facebookEvent, new Event('CSUA General Meeting #1', 'Wozniak Lounge, Soda Hall', 'Friday - 9/1', '8PM - 10PM', 'Learn about the resources the CSUA has to offer, how to utilize them, and how to contribute to the university and undergraduate community. Refreshments provided.')];

var workshops = [new Event('Machine Learning', 'TBD', 'TBD', 'TBD', 'Skip the hype; come learn what machine learning is really about and learn how to implement a few key machine learning algorithms.'), new Event('Git', 'TBD', 'TBD', 'TBD', 'Learn the basics of using Git as a version control system for better programming workflows.'), new Event('UNIX/BASH', 'TBD', 'TBD', 'TBD', 'Throwback to the basics of computing; how to use a terminal effectively, and how to write scripts that make working with computing easier.'), new Event('LaTeX', 'TBD', 'TBD', 'TBD', 'Make your proofs, papers, and homework look stunning using the power of LaTeX.'), new Event('Web Development', 'TBD', 'TBD', 'TBD', 'React.js, Node.js, Express.js, MongoDB. You\'ve heard all these buzzwords - now learn how to use them to create stunning and reactive Web Applications.'), new Event('Finding an Internship', 'TBD', 'TBD', 'TBD', 'Learn how to break into industry and land your first job or internship.'), new Event('Resume Workshop', 'TBD', 'TBD', 'TBD', 'Crafting a resume is an art. Come listen to a recruiter from Princeton teach you how to boost your resume.'), new Event('Blockchain', 'TBD', 'TBD', 'TBD', 'Bitcoin. Ethereum. ')];

var recruiting = [facebookEvent];

exports.default = events;
exports.events = events;
exports.workshops = workshops;
exports.recruiting = recruiting;