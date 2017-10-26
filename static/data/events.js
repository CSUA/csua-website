class Event {
  constructor(name, location='TBD', date='TBD', time='TBD', description='', href) {
    this.name = name;
    this.location = location;
    this.date = date;
    this.time = time;
    this.description = description;
    this.href = href;
  }
}

let qualcommEvent = new Event(
  'Qualcomm Tech Talk - Graphics Technology',
  'Cory Hall 540A',
  'Friday - 9/8',
  '12PM - 1PM',
  'Qualcomm’s mobile technology is connecting the world in ways we neverthought possible. Come learn about these emerging technologies and how Qualcomm Graphics innovation is bringing these to our daily lives.',
  'https://www.facebook.com/events/115035072501800/'
);

let riotEvent = new Event(
  'Riot Tech Talk',
  'Sibley Auditorium',
  'Tuesday, 9/12',
  '7PM - 9PM',
  'Riot Games is looking for the next generation of Software Engineers! As the most played PC game in the world, League of Legends boasts over 100 million players every month. We’re looking for humble but ambitious, razor-sharp professionals who can teach us a thing or two. We promise to return the favor. Like us, you take play seriously; you’re passionate about games. We embrace those who see things differently, aren’t afraid to experiment, and who have a healthy disregard for constraints. ',
  'https://www.facebook.com/events/1739631732760887/'
);

let riotLanEvent = new Event(
  'Riot LAN Party - Hosted by Berkeley Legends',
  'East Pauley Ballroom (3rd Floor MLK)',
  'Wednesday - 9/13',
  '7PM',
  'Come out to meet and play games with Rioters on a casual level -- expect pizza, board games, and a 1v1 tournament where the top 5 victors will receive figurines!',
  'https://www.facebook.com/events/1441722959209903'
);

let merakiEvent = new Event(
  'Meraki Tech Talk',
  'TBD',
  'TBD',
  'TBD',
  'TBD'
);

let profDev =
new Event(
  'Professional Development',
  'Wozniak Lounge',
  'Saturday - 9/9',
  '2PM - 4PM',
  'Learn how to break into industry and land your first job or internship.',
  'https://www.facebook.com/events/1293138030812322/'
);

//New updates start here

let gm2 = new Event(
  'General Meeting #2',
  'Wozniak Lounge (4th Floor Soda Hall)',
  'Friday - 10/13',
  '8PM - 11PM',
  'Come check out the Computer Science Undergraduate Association at our 2nd General Meeting! Join us to learn more about what the CSUA does and how you can be involved. Free dinner will be provided. All students are welcome!',
  'https://www.facebook.com/events/646454655558061/'
 );

//Is this an event? it was on the email so im just gonna put it here
let csuaTutoring = new Event(
  'CSUA Tutoring',
  'Soda 311 (CSUA Office)',
  'Mon - Fri',
  'Check the link!',
  'Need help for a class but don\'t know where to find it? Office hours too full? The CSUA is now offering tutoring services for any Berkeley student! Just find an officer who tutors for the class you want and show up to their office hours! Tutoring available every week.',
  'https://www.csua.berkeley.edu/about/officers'
 );
let ucbStartupFair = new Event(
	'UCB Startup Fair',
	'Pauley Ballroom',
	'Tuesday, 10/24',
	'11 AM - 3:30 PM',
	'Interested in a position at a startup? Want to work at a smaller company but don\'t know where to look? The UCB Startup Fair is back again! \n Student-run by IEEE, HKN, and CSUA, students are introduced to small tech companies that typically rely on personal connections for hiring. It\'s a great way for students to find full-time and internship positions! Attendance is free for all UCB students, so please bring your student ID. You must register for entry here: htt[://www.ucbstartupfair.com/student/register',
	'https://www.facebook.com/events/223576304840572/'
);

let facebookOpenHouse = new Event(
	'Facebook Infrastructure Open House',
	'Menlo Park',
	'Wednesday, 11/8',
	'6 PM - 9 PM',
	'Facebook invites the CSUA to their 5th Annual Infrastructure Open House! Join them for a night of exploring Connectivity Labs, Infrastructure Foundation, Production Engineering, Security Engineering, and more! Learn more about their available opportunities at this event',
	'http://fbinfraopenhouse17.splashthat.com/2'
);

//Removing old events from the list, maybe they can be archived?
//Facebook even seems sort of private or CSUA exclusive, leaving it off the website list
let events = [
  csuaTutoring
];

//i dont know about any upcoming workshops besides Amazon(?) and I don't know details
//Also inconsitency between events list and workshops? I know workshops are only used once but still
let workshops = [
//   new Event(
//     'Git',
//     'HP Auditorium',
//     'Friday - 9/8',
//     '5:30 PM - 7:00 PM',
//     'Learn the basics of using Git as a version control system for better programming workflows.'
//   ),
//   new Event(
//     'Professional Development',
//     'Wozniak Lounge',
//     'Saturday - 9/9',
//     '2PM - 4PM',
//     'Learn how to break into industry and land your first job or internship.'
//   ),
//   new Event(
//     'UNIX/BASH',
//     'HP Auditorium',
//     'Friday - 9/15',
//     '6PM - 8PM',
//     'Throwback to the basics of computing; how to use a terminal effectively, and how to write scripts that make working with computing easier.'
//   ),
//   new Event(
//     'LaTeX',
//     'HP Auditorium',
//     'Tuesday - 9/19',
//     '5PM - 7PM',
//     'Make your proofs, papers, and homework look stunning using the power of LaTeX.'
//   ),
//   new Event(
//     'Blockchain',
//     'HP Auditorium',
//     'Wednesday - 11/8',
//     '6PM - 8PM',
//     'Bitcoin. Ethereum. Cohosted with Blockchain@Berkeley'
//   ),
//   new Event(
//     'Web Development',
//     'Wozniak Lounge',
//     'Tuesday - 11/14',
//     '6PM - 8PM',
//     'React.js, Node.js, Express.js, MongoDB. You\'ve heard all these buzzwords - now learn how to use them to create stunning and reactive Web Applications.'
//   ),
//   new Event(
//     'Machine Learning',
//     'Wozniak Lounge',
//     'Monday - 11/20',
//     '6PM - 8PM',
//     'Skip the hype; come learn what machine learning is really about and learn how to implement a few key machine learning algorithms.'
//   )
];

//All the recruiting events are over (Amazon?)
let recruiting = [
//   qualcommEvent,
//   riotEvent,
//   riotLanEvent,
//   merakiEvent
];

let generalMeetings = [
]

export default events;
export {events, workshops, recruiting, generalMeetings};
