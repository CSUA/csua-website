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

let events = [
  profDev,
  riotEvent,
  riotLanEvent,
  merakiEvent
];

let workshops = [
  new Event(
    'Git',
    'HP Auditorium',
    'Friday - 9/8',
    '5:30 PM - 7:00 PM',
    'Learn the basics of using Git as a version control system for better programming workflows.'
  ),
  new Event(
    'Professional Development',
    'Wozniak Lounge',
    'Saturday - 9/9',
    '2PM - 4PM',
    'Learn how to break into industry and land your first job or internship.'
  ),
  new Event(
    'UNIX/BASH',
    'HP Auditorium',
    'Friday - 9/15',
    '6PM - 8PM',
    'Throwback to the basics of computing; how to use a terminal effectively, and how to write scripts that make working with computing easier.'
  ),
  new Event(
    'LaTeX',
    'HP Auditorium',
    'Tuesday - 9/19',
    '5PM - 7PM',
    'Make your proofs, papers, and homework look stunning using the power of LaTeX.'
  ),
  new Event(
    'Blockchain',
    'HP Auditorium',
    'Wednesday - 11/8',
    '6PM - 8PM',
    'Bitcoin. Ethereum. Cohosted with Blockchain@Berkeley'
  ),  
  new Event(
    'Web Development',
    'Wozniak Lounge',
    'Tuesday - 11/14',
    '6PM - 8PM',
    'React.js, Node.js, Express.js, MongoDB. You\'ve heard all these buzzwords - now learn how to use them to create stunning and reactive Web Applications.'
  ),
  new Event(
    'Machine Learning',
    'Wozniak Lounge',
    'Monday - 11/20',
    '6PM - 8PM',
    'Skip the hype; come learn what machine learning is really about and learn how to implement a few key machine learning algorithms.'
  )
];

let recruiting = [
  qualcommEvent,
  riotEvent,
  riotLanEvent,
  merakiEvent
];

let generalMeetings = [

]

export default events;
export {events, workshops, recruiting, generalMeetings};
