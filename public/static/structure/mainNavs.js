import paths from './paths';

class Nav {
  constructor(name, href, subnavs=null) {
    this.name = name;
    this.href = href;
    this.subnavs = subnavs;
  }
}

let aboutNavs = [
  new Nav('Politburo', paths.politburo),
  new Nav('Officers', paths.officers),
  new Nav('Constitution', paths.constitution)
];

let eventNavs = [
  new Nav('Workshops', paths.workshops),
  new Nav('Recruiting', paths.recruiting),
  new Nav('General Meetings', paths.gms)
];

let industryNavs = [
  new Nav('Find a Job', paths.findAJob)
]

let mainNavs = [
  new Nav('About', paths.about, aboutNavs),
  new Nav('Events', paths.events, eventNavs),
  new Nav('Industry', paths.industry, industryNavs),
  new Nav('Showcase', paths.showcase),
  new Nav('Join', paths.join)
];

export default mainNavs;
export {mainNavs};
