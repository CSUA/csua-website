//These resolve to image strings that webpack outputs
import annaImg from 'static/images/officers/Anna_Brewer.jpg';
import ashleyImg from 'static/images/officers/Ashley_Chien.jpg';
import benjaminImg from 'static/images/officers/Benjamin_Li.jpg';
import charlieImg from 'static/images/officers/Charlie_Tian.jpg';
import ericImg from 'static/images/officers/Eric_Hou.jpg';
import jasonImg from 'static/images/officers/Jason_Ji.jpg';
import jasonYImg from 'static/images/officers/Jason_Yeung.jpg';
import jessicaImg from 'static/images/officers/Jessica_Kuo.jpg';
import jimmyImg from 'static/images/officers/Jimmy_Kim.jpg';
import jonathanImg from 'static/images/officers/Jonathan_Tan.jpg';
import juntaiImg from 'static/images/officers/Juntai_Zheng.jpg';
import lorenImg from 'static/images/officers/Loren_McIntyre.jpg'
import meganImg from 'static/images/officers/Megan_Zhu.jpg';
import michelleImg from 'static/images/officers/Michelle_Hsueh.jpg';
import neilImg from 'static/images/officers/Neil_Lingarkar.jpg';
import parthImg from 'static/images/officers/Parth_Singhal.jpg';
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
    'Anna Brewer',
    'Thu 2PM-3PM',
    annaImg,
    '...'
  ),
  new Officer(
    'Ashley Chien',
    'Wed 1PM-2PM',
    ashleyImg,
    'Meow meow meow meow meow'
  ),
  new Officer(
    'Benjamin Li',
    'Thu 12PM-1PM',
    benjaminImg,
    'Ask me about my sick skills in Super Smash Bros Melee!',
    'CS 61C, CS 70, CS 188'
  ),
  new Officer(
    'Charlie Tian',
    'Mon 4PM-5PM',
    charlieImg,
    'hiu machines',
    'CS 61A, CS 70, CS 188, EE 16B, MATH 53, MATH 54, MATH 110, MATH 113'
  ),
  new Officer(
    'Eric Hou',
    'Tue 6PM-7PM',
    ericImg,
    'TensorFlow sucks'
  ),
  new Officer(
    'Jason Ji',
    'Thu 6PM-7PM',
    jasonImg,
    'I say okay, okay, okay, okidokie'
  ),
  new Officer(
    'Jason Yeung',
    'Tue 1PM-2PM',
    jasonYImg,
    'Blurp.',
    'CS 61A, CS 61B, CS 61C'
  ),
  new Officer(
    'Jessica Kuo',
    'Tue 11AM-12PM',
    jessicaImg,
    'Biology tells you you\'re 70% water, chemistry tells you\
      you\'re 60% oxygen, and physics tells you you\'re 99.99%\
      empty space. But I tell you you\'re 100% a cutie! :)'
  ),
  new Officer(
    'Jimmy Kim',
    'Fri 4PM-5PM',
    jimmyImg,
    'I play children\'s card games.',
    'CS 61A, CS 61B, CS 70'
  ),
  new Officer(
    'Jonathan Tan',
    'Fri 6PM-7PM',
    jonathanImg,
    'praise the sun'
  ),
  new Officer(
    'Juntai Zheng',
    'Wed 2PM-3PM',
    juntaiImg,
    'real coders type with only their index fingers',
    'CS 61B, CS 61C, CS 70'  
  ),
  new Officer(
    'Loren McIntyre',
    'Fri 3PM-4PM',
    lorenImg,
    'Supporting a welcoming environment for CS (& other) undergrads, \
    and exposure to CS outside the classroom (for myself & for others)'
  ),
  new Officer(
    'Megan Zhu',
    'Wed 5PM-6PM',
    meganImg,
    'Miyazaki fanatic, league enthusiast, sad senior :\'(',
    'CS 61A, CS 61B, CS 61C, CS 70, CS 168, CS 184, CS 186, CS 188, EE 16A, MATH 54'
  ),
  new Officer(
    'Michelle Hsueh',
    'Mon 5PM-6PM',
    michelleImg,
    'Two kittens are on a roof. Which one slides off first? \
    The one with the smaller μ (mew)! ＾• ω •＾',
    'CS C8, CS 61A, CS 61B'
  ),
  new Officer(
    'Neil Lingarkar',
    'Wed 6PM-7PM',
    neilImg,
    ':thinking:'
  ),
  new Officer(
    'Parth Singhal',
    'Mon 1PM-2PM',
    parthImg,
    'Random powers: Levitation, Time',
    'CS C8, CS 61A, STAT 140'
  ),
  new Officer(
    'Ray Pan',
    'Mon 11AM-12PM',
    rayImg,
    'Where did I go wrong',
    'CS 61A, CS 61B, CS 70, EE 16A, Math 54'
  ),
  new Officer(
    'Robert Quitt',
    'Tue 2PM-3PM',
    robertImg,
    'I\'d just like to interject for a moment...'
  ),
  new Officer(
    'Yannan Tuo',
    'Thu 5PM-6PM',
    yannanImg,
    'Will sing for food (will sing regardless)',
    'CS 61A, CS 61B, EE 16A, EE 16B, Math 54'
  ),
  new Officer(
    'Yitz Deng',
    'Fri 11AM-12PM',
    yitzImg,
    'GIF is pronounced like gift but without the t.',
    'CS 61A, CS 61B, CS 61C, CS 70, CS 170, CS 174, CS 188, \
    EE 16A, MATH 54, MATH 110, MATH 113, MATH 128A, MATH 104, \
    STAT 133, STAT 134, STAT 154, STAT 155'
  )
];

export default officers;
export {officers};
