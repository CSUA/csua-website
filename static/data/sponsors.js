import ankerImg from 'static/images/industry/sponsors/Anker.jpg';
import merakiImg from 'static/images/industry/sponsors/Cisco_Meraki.jpg';
import facebookImg from 'static/images/industry/sponsors/Facebook.png';
import microsoftImg from 'static/images/industry/sponsors/Microsoft.png';
import openTableImg from 'static/images/industry/sponsors/OpenTable.png';
import pinterestImg from 'static/images/industry/sponsors/Pinterest.png';
import riotImg from 'static/images/industry/sponsors/Riot_Games.jpg';
import salesforceImg from 'static/images/industry/sponsors/Salesforce.jpg';
import yelpImg from 'static/images/industry/sponsors/Yelp.png';

class Sponsor {
  constructor(name, href, type, img) {
    this.name = name;
    this.href = href;
    this.type = type;
    this.img = img;
  }
}

let sponsors = [
  new Sponsor(
    'Anker',
    'https://www.anker.com/',
    'Equipment Sponsor',
    ankerImg
  ),
  new Sponsor(
    'Facebook',
    'https://www.facebook.com/',
    'Info Session, Puzzle Hunt',
    facebookImg
  ),
  new Sponsor(
    'Meraki',
    'https://meraki.cisco.com/',
    'Hackathons, Tech Talks, Coding for Grubs',
    merakiImg
  ),
  new Sponsor(
    'Microsoft',
    'https://www.microsoft.com/',
    'Tech Talk',
    microsoftImg
  ),
  new Sponsor(
    'OpenTable',
    'https://www.opentable.com/start/home',
    'Tech Talk',
    openTableImg
  ),
  new Sponsor(
    'Pinterest',
    'https://www.pinterest.com/',
    'Tech Talk',
    pinterestImg
  ),
  new Sponsor(
    'Riot Games',
    'https://www.riotgames.com/',
    'Tech Talk',
    riotImg
  ),
  new Sponsor(
    'Salesforce',
    'https://www.salesforce.com/',
    'Tech Talk',
    salesforceImg
  ),
  new Sponsor(
    'Yelp',
    'https://www.yelp.com/berkeley',
    'Tech Talk',
    yelpImg
  )
];

let pastSponsors = [

];

export default sponsors;
export {sponsors, pastSponsors};
