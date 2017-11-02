class Event {
  constructor(name, location='TBD', date='TBD', time='TBD', description='', href, type) {
    this.name = name;
    this.location = location;
    this.date = date;
    this.time = time;
    this.description = description;
    this.href = href;
    this.type = type;
  }
}

let events = [
];

let workshops = [
];

let recruiting = [
];

let generalMeetings = [
]

export default events;
export {events, workshops, recruiting, generalMeetings};
