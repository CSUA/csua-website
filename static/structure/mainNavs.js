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
  new Nav('Join', paths.join),
  new Nav('Constitution', paths.constitution),
  new Nav('Tutoring', paths.tutoring),
  new Nav('Computing Resources', paths.computingresources)
];

let eventNavs = [
  new Nav('Hackathon', paths.hackathon),
]

let industryNavs = [
  new Nav('Sponsors', paths.sponsors),
]

let mainNavs = [
  new Nav('About', paths.home, aboutNavs),
  new Nav('Events', paths.events, eventNavs),
  new Nav('Industry', paths.industry, industryNavs),
  // new Nav('Showcase', paths.showcase),
];

export default mainNavs;
export {mainNavs};
