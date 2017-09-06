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

let pinterestEvent = new Event(
  'Machine Learning Workshop + Q&A with Pinterest',
  'HP Auditorium',
  'Wednesday - 9/6',
  '6:30PM - 8PM',
  'Interested in machine learning & computer vision and how they\'re being used by Pinterest? Learn from Berkeley Alumnus, Eric Kim, on how Pinterest uses the latest advances in computer vision and machine learning to power visual discovery experiences for millions of people every day.',
  'https://www.facebook.com/events/488503018195686/'
);

let yelpEvent = new Event(
  'Yelp Tech Talk',
  'Wozniak Lounge',
  'Thursday - 9/7',
  '6PM - 7PM',
  'Hear about exciting projects at Yelp from both engineers and product managers. Learn about how Yelp\'s infrastructure can handle millions of users, and how to analyze user needs and respond to them.',
  'https://www.facebook.com/events/114136882618468/'
);

let qualcommEvent = new Event(
  'Qualcomm Tech Talk - Graphics Technology',
  'Cory Hall 540A',
  'Friday - 9/8',
  '12PM - 1PM',
  'Qualcomm’s mobile technology is connecting the world in ways we neverthought possible. Come learn about these emerging technologies and how Qualcomm Graphics innovation is bringing these to our daily lives.',
  'https://www.facebook.com/events/115035072501800/'
)


let events = [
  pinterestEvent,
  yelpEvent,
  qualcommEvent
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
  pinterestEvent,
  yelpEvent,
  qualcommEvent
];

let generalMeetings = [

]

export default events;
export {events, workshops, recruiting, generalMeetings};
