class Event {
  constructor(name, location='TBD', date='TBD', time='TBD', description) {
    this.name = name;
    this.location = location;
    this.date = date;
    this.time = time;
    this.description = description;
  }
}

let facebookEvent =  new Event(
    'Facebook Recruiting Event',
    'Wozniak Lounge, Soda Hall',
    'Friday - 9/1',
    '5PM - 8PM',
    'Want to work/intern at Facebook? Come learn about their program and submit your resume! Dinner provided.'
  );

let gm1Event =   new Event(
    'CSUA General Meeting #1',
    'Wozniak Lounge, Soda Hall',
    'Friday - 9/1',
    '8PM - 10PM',
    'Learn about the resources the CSUA has to offer, how to utilize them, and how to contribute to the university and undergraduate community. Refreshments provided.'
  )

let events = [
  facebookEvent,
  gm1Event
];

let workshops = [
  new Event(
    'LaTeX',
    'TBD',
    'TBD',
    'TBD',
    'Make your proofs, papers, and homework look stunning using the power of LaTeX.'
  ),
  new Event(
    'Machine Learning',
    'TBD',
    'TBD',
    'TBD',
    'Skip the hype; come learn what machine learning is really about and learn how to implement a few key machine learning algorithms.'
  ),
  new Event(
    'Git',
    'TBD',
    'TBD',
    'TBD',
    'Learn the basics of using Git as a version control system for better programming workflows.'
  ),
  new Event(
    'UNIX/BASH',
    'TBD',
    'TBD',
    'TBD',
    'Throwback to the basics of computing; how to use a terminal effectively, and how to write scripts that make working with computing easier.'
  ),
  new Event(
    'Web Development',
    'TBD',
    'TBD',
    'TBD',
    'React.js, Node.js, Express.js, MongoDB. You\'ve heard all these buzzwords - now learn how to use them to create stunning and reactive Web Applications.'
  ),
  new Event(
    'Finding an Internship',
    'TBD',
    'TBD',
    'TBD',
    'Learn how to break into industry and land your first job or internship.'
  ),
  new Event(
    'Resume Workshop',
    'TBD',
    'TBD',
    'TBD',
    'Crafting a resume is an art. Come listen to a recruiter from Princeton teach you how to boost your resume.'
  ),
  new Event(
    'Blockchain',
    'TBD',
    'TBD',
    'TBD',
    'Bitcoin. Ethereum. '
  )
];

let recruiting = [
  facebookEvent
];

let generalMeetings = [
  gm1Event
]

export default events;
export {events, workshops, recruiting, generalMeetings};
