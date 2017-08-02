import paths from './paths';

class Tab {
  constructor(name, href, subtabs=null) {
    this.name = name;
    this.href = href;
    this.subtabs = subtabs;
  }
}

let aboutTabs = [
  new Tab('Politburo', paths.politburo),
  new Tab('Officers', paths.officers),
  new Tab('Constitution', paths.constitution)
];

let eventTabs = [
  new Tab('Workshops', paths.workshops),
  new Tab('Recruiting', paths.recruiting),
  new Tab('General Meetings', paths.generalMeetings)
];

let mainTabs = [
  new Tab('About', paths.about, aboutTabs)
];

let mainTabs = [
  events: {
    href: paths.events,
    subtabs: {
      workshops: { href: paths.workshops },
      recruiting: {href: paths.recruiting },
      generalMeetings: {href: paths.generalMeetings}
    }
  },
  industry: {
    href: paths.industry,
    subtabs: {
      findAJob: { href: paths.findAJob }
    }
  }
];
