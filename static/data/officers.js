//These resolve to image strings that webpack outputs
import benjaminImg from 'static/images/officers/Benjamin_Li.jpg';
import calebImg from 'static/images/officers/Caleb_Wyllie.jpg';
import charlieImg from 'static/images/officers/Charlie_Tian.jpg';
import emilyImg from 'static/images/officers/Emily_Gosti.jpg';
import ericImg from 'static/images/officers/Eric_Hou.jpg';
import jasonImg from 'static/images/officers/Jason_Ji.jpg';
import jasonYImg from 'static/images/officers/Jason_Yeung.jpg';
import jessicaImg from 'static/images/officers/Jessica_Kuo.png';
import jimmyImg from 'static/images/officers/Jimmy_Kim.jpg';
import jonathanImg from 'static/images/officers/Jonathan_Tan.JPG';
import juntaiImg from 'static/images/officers/Juntai_Zheng.jpg';
import lorenImg from 'static/images/officers/Loren_McIntyre.jpg';
import meganImg from 'static/images/officers/Megan_Zhu.jpg';
import michelleImg from 'static/images/officers/Michelle_Hsueh.jpg';
import neilImg from 'static/images/officers/Neil_Lingarkar.jpg';
import parthImg from 'static/images/officers/Parth_Singal.jpg';
import rayImg from 'static/images/officers/Ray_Pan.JPG';
import robertImg from 'static/images/officers/Robert_Quitt.jpg';
import yannanImg from 'static/images/officers/Yannan_Tuo.jpg';
import yitzImg from 'static/images/officers/Yitz_Deng.jpg';

class Officer {
  constructor(name, hours, img, quote, tutorSubjects) {
    this.name = name;
    this.hours = hours;
    this.img = img;
    this.quote = quote;
    this.tutorSubjects = tutorSubjects;
  }
}

let officers = [
  new Officer(
    'Benjamin Li',
    'Mon 11AM-12PM',
    benjaminImg,
    '"Ask me about my sick skills in Super Smash Bros Melee!"',
    'CS61A'
  ),
  new Officer(
    'Caleb Wyllie',
    'Thu 1PM-2PM',
    calebImg,
    '"I like to climb things and browse memes"'
  ),
  new Officer (
    'Charlie Tian',
    'Tue 6PM-7PM',
    charlieImg,
    '"hiu machines"'
  ),
  new Officer (
    'Emily Gosti',
    'Wed 4PM-5PM',
    emilyImg,
    '"Livin\' la vida boba"'
  ),
  new Officer (
    'Eric Hou',
    'Thu 4PM-5PM',
    ericImg,
    '"TensorFlow sucks"'
  ),
  new Officer (
    'Jason Ji',
    'Thu 6PM-7PM',
    jasonImg,
    "I say okay, okay, okay, okidokie"
  ),
  new Officer (
    'Jason Yeung',
    'Tue 11PM-12PM',
    jasonYImg,
    "Blurp."
  ),
  new Officer (
    'Jessica Kuo',
    'Thurs 12PM-1PM',
    jessicaImg,
    '"Biology tells you you\'re 70% water, chemistry tells you\
      you\'re 60% oxygen, and physics tells you you\'re 99.99%\
      empty space. But I tell you you\'re 100% a cutie! :)"'
  ),
  new Officer (
    'Jimmy Kim',
    'Fri 6PM-7PM',
    jimmyImg,
    '"I play children\'s card games."'
  ),
  new Officer (
    'Jonathan Tan',
    'Fri 5PM-6PM',
    jonathanImg,
    '"praise the sun"'
  ),
  new Officer (
    'Juntai Zheng',
    'Thu 10AM-11AM',
    juntaiImg,
    '"real coders type with only their index fingers"'
  ),
  new Officer (
    'Loren McIntyre',
    'Tue 1PM-2PM',
    lorenImg,
    '"Can\'t stand unnecessary acronyms"'
  ),
  new Officer (
    'Megan Zhu',
    'Mon 6PM-7PM',
    meganImg,
    '"I like coding and AI stuff and games (overwatch!)"'
  ),
  new Officer (
    'Michelle Hsueh',
    'Mon 3PM-4PM',
    michelleImg,
    '"Two kittens are on a roof. Which one slides off first? The one with the\
    smaller μ (mew)! ＾• ω •＾"'
  ),
  new Officer (
    'Neil Lingarkar',
    'Thu 2PM-3PM',
    neilImg,
    '"hi"'
  ),
  new Officer (
    'Parth Singal',
    'Wed 12PM-1PM',
    parthImg,
    '"Random powers: Levitation, Time"'
  ),
  new Officer (
    'Ray Pan',
    'Mon 4PM-5PM',
    rayImg,
    '"I for one welcome our new robot overlords"'
  ),
  new Officer (
    'Robert Quitt',
    'Fri 2PM-3PM',
    robertImg,
    '"I\'d just like to interject for a moment..."'
  ),
  new Officer (
    'Yannan Tuo',
    'Fri 4PM-5PM',
    yannanImg,
    '"Will sing for food (will sing regardless)"'
  ),
  new Officer (
    'Yitz Deng',
    'Tue 4PM-5PM',
    yitzImg,
    '"GIF is pronounced like gift but without the t."'
  )
];

export default officers;
export {officers};
