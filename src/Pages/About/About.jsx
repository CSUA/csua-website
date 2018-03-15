import * as React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {withRouter} from 'react-router';
import {Link} from 'react-router-dom';
import {Guac} from 'guac-hoc/lib/Guac';

import LazyLoad from 'react-lazy-load';

import animateScrollTo from 'animated-scroll-to';

import {Row, Col} from 'yui-md/lib';
import {IconButton} from 'yui-md/lib/Button';
import {Icon} from 'yui-md/lib/Icon';
import {Card, CardImageArea, CardTextArea} from 'yui-md/lib/Card';

import EventCalendar from 'widgets/EventCalendar';
import _PaperBorder from './_PaperBorder';
import officersImg from 'static/images/Officers_FA16.jpg';
import wozImg from 'static/images/Woz.jpg';
import paths from 'static/structure/paths';
import resourceGroups from 'static/data/resources';
import noticeablyWhite from 'static/images/when-i-try-to-dance-noticeably-white.png';

class About extends React.Component {
  constructor() {
    super();
    this.render = this.render.bind(this);
  }

  createResources(resourceGroups) {
    let resourceComponents = [];
    let key = 0;
    for (var resourceGroup of resourceGroups) {
      resourceComponents.push(
        <p className={'title-small'} key={key}>{resourceGroup.name}</p>
      );
      key += 1;
      for (var resource of resourceGroup.resources) {
        resourceComponents.push(
          <p className={'subheader-small'} key={key}>
            <a href={resource.href}>{resource.name}&nbsp;</a>
             - {resource.location}</p>
        );
        key += 1;
      }
    }
    return resourceComponents;
  }

  render() {
    return (
      <div className={'about-page'}>
        <_PaperBorder/>
          <div className={'title-area'}>
            <h1 className={'centered'}>Identity</h1>
            <h4 className={'centered'}>Literacies in<br/>Language, Culture, and Society</h4>
            <div className={'centered subtitle'}>
                <IconButton large onClick={() => animateScrollTo(window.innerHeight, {speed: 800  })} icon='keyboard_arrow_down'/>
            </div>
          </div>
          <div className={'info-area'}>
            <Row>
              <Col xs={12} md={6}>
                <Card>
                  <CardTextArea>
                    <p className={'centered title'}>Hello World!</p>
                    <Icon className={'centered'}>lightbulb_outline</Icon>
                    <p>Join me in my exploration of my identity through literacy in my languages, cultures, and society.
                    </p>
                  </CardTextArea>
                </Card>
              </Col>
              <Col xs={12} md={6}>
                <Card>
                  <CardTextArea>
                    <p>
                      As someone who spends so much time designing and improving websites, in both form and ffunction, I find that a multimodal webpage is the most natural way for me to express my creative processes. I find expressing my experiences as bubbles on a webpage characterises how I have so many literacies, experiences, and aspects of my life that are critical to my identity, but sometimes seem disjoint, and only by fitting these pieces together as a whole can I understand my own identity.
                    </p>
                  </CardTextArea>
                </Card>
              </Col>
            </Row>
            <h4 className={'centered'}>Literacies of Caleb Past</h4>
            <Row>
              <Col xs={12} md={6}>
                <Card>
                  <CardTextArea>
                    <p>
                      I grew up in Silverdale, WA, a small town a ferry ride away from Seattle. Although Seattleites are noticeably whiter than the residents of the Bay Area, the city has a large influx of immigrants and is quite cosmopolitan. Silverdale, on the other hand, is on the Kitsap Peninsula and draws far fewer immigrants. My elementary school, middle school, and high school were predominantly white.
                    </p>
                  </CardTextArea>
                </Card>
              </Col>
              <Col xs={12} md={6}>
                <Card>
                  <CardTextArea>
                    <p>
                      I was raised by my Caucasian father and my Malaysian-Chinese mother. My first literacy I have acquired is though my family. My parents spoke English at home, so this was the first language I learned. My mom also knows multiple dialects of Chinese and Malay, and even a little bit of other languages like Arabic. Since my mother grew up speaking English in Malaysia, she was fluent in many respects, but she lacked understanding of American idioms and sometimes her grammar did not match mainstream American English, which I related to when watching the “Do you speak American?” documentary on Ebonics. The way Chinese people talk in Malaysia tends to be very fast and they have a distinctive Southeast Asian accent, and often their speech is mixed with Hokkien, Cantonese, or Malay phrases.
                    </p>
                  </CardTextArea>
                </Card>
              </Col>
              <Col xs={12} md={6}>
                <Card>
                  <CardTextArea>
                    <p>
                      Although my mother had no intention of teaching my brothers or me any language besides English, she used many words and phrases at home that were not English. Some of these phrases were from Hokkien or Cantonese or Malay that she grew up speaking. She also picked up some Aussie slang while attending university in Australia. She occasionally even used Hawaiian and Pidgin phrases that she picked up while working in Hawaiian or Japanese words that she had learned on her mission trip there. I picked up on all these words and phrases and knew what they all meant. However, it never really occurred to me where these words came from, and I had been using them as long as I remember so by the time I started realizing these words were not standard English, it did not even seem like a question I could ask. Because I didn’t hear anyone outside of my family using them and they did not sound like English, I was slightly apprehensive about using them. To this day, I am still learning the origins of some of these words that I grew up with. I was so surprised when my dad told me that some words my family used were not even real words from any language, they were just some words made up by my mom’s friends at University.
                    </p>
                  </CardTextArea>
                </Card>
              </Col>
              <Col xs={12} md={6}>
                <Card>
                  <CardTextArea>
                    <p>
                      Perhaps due to growing up in this melting pot of global languages, my brothers and I were prolific in making up our own words to add to my family’s discourse. While my little brother tended to make up words that were simply abbreviations of multisyllabic words, like calling strawberries simply “strawbs,” my older brother tended to make up nonsensical-sounding words, but each word had a specific meaning. Even if these words did not have Webster’s definition, either he would assign meaning to the word or after being used by the family, it would take on its own meaning. For example, my older brother started saying a word that is probably best romanized as “hengiekaka” and is spoken with a certain sing-songy tone. My little brother was very young at the time and he would use this word nonsensically in any context. However, I was interested in recording home video at the time on my dad’s camcorder. One day when my little brother was taking out the recycling and among it were large empty Milo (Australian malt chocolate beverage popular in Malaysia) tins. I started recording my brother and he sung out “hengiekaka” and then accidentally spilled all the recycling and the large metal tins bounced around making clattering “bong” and “dong” noises. Captured on video, this clip became a meme in my family. Now that I had associated this word to dropping the recycling, I assigned this word its meaning as it is still used in my family. If you ask my brothers or my parents, the closest English word would probably be “clumsy.” This evolution of language in my family is representative of the centrifugal and centripetal forces of language that Mikhail Bakhtin describes. The centripetal forces are what keep my family speaking using the same made up terms, but the centrifugal forces are what are driving my family’s “version” of English away from the standardized language.
                    </p>
                  </CardTextArea>
                </Card>
              </Col>
              <Col xs={12} md={6}>
                <Card>
                  <CardTextArea>
                    <p>
                      Starting from before I was even born, my parents made an effort to educate me. My parents implicitly subscribed to school of thought put forward by Lev Vygotsky by recognizing that learning starts long before a child enters school. They would read to me often and would take me on trips to the library. I started on just picture books. When I was very young, my older brother got a picture dictionary that had pictures of objects, foods, and vehicles. My parents tell me that my brother would sit down with me and I would love listening to him read the picture dictionary to me. While I do not remember these encounters, I do remember the picture dictionary and I remember that the vehicles were my favorite part.
                    </p>
                  </CardTextArea>
                </Card>
              </Col>
              <Col xs={12} md={6}>
                <Card>
                  <CardTextArea>
                    <p>
                      My parents intentionally exposed me to different settings which allowed me to develop literacies in non-literary contexts. They took me to zoos and Seaworld which sparked my interest in marine biology that continues to today. My parents gave me jigsaw puzzles to solve and they tell me that I loved solving them when I was a child, and to this day I love solving puzzles, and that built the foundation of my stellar spatial reasoning capabilities. My parents would let me smell different spices and would even quiz me on what a certain smell was. They gave me interesting tactile things to touch such as feeling the difference between a bucket of sand versus a bucket of rice versus a bucket of beans. They taught me to count items out loud, and not just in English, but also Japanese, Chinese, and Malay. One of my favorite stories was of me counting five goldfish crackers in Malay, “Satu, dua, tiga, empat” and my dad asked “empat… what?” My response: “empat… goldfish!” and then I ate the fifth goldfish.
                    </p>
                  </CardTextArea>
                </Card>
              </Col>
              <Col xs={12} md={6}>
                <Card>
                  <CardTextArea>
                    <p>
                      Although I know my parents read papers on effective early childhood education, regardless of whether they knew the term “Zone of Proximal Development,” they taught me at a level that was necessary for me to grow skills. When I was just a baby, they would sing to me or play Mozart music on CD for me while I was falling asleep. They would also take me to listen to the local symphony, so that I would get a chance to see and sometimes even touch the different instruments. After that, my mom started teaching me how to play piano. I think it is colloquial knowledge in Asian cultures that learning a skill at a young age will lead to greater mastery. The way my mom explained it to me was that the brain is more malleable at certain development stages, so ideas and skills learned at these stages make a much greater impact. Although I ended up choosing not to pursue music in favor of other academic interests like math and science, I am still grateful to my mom for teaching me this musical literacy.
                    </p>
                  </CardTextArea>
                </Card>
              </Col>
              <Col xs={12} md={6}>
                <Card>
                  <CardTextArea>
                    <p>
                      I had a very interesting and fun childhood getting to experience so many different settings, but besides just enjoyment, I feel like I gained valuable literacies that helped me succeed in creative aspects as well as technical ones. These literacies ranged from understanding basic facts about the world we live in to the more traditional sense of literacy of understanding and conveying language in verbal and written forms. At such a young age, developing literacies such as understanding discourse and jargon regarding marine mammals has lead me to become the person I am today.
                    </p>
                  </CardTextArea>
                </Card>
              </Col>
              <Col xs={12} md={6}>
                <Card>
                  <CardTextArea>
                    <p>
                      Although my parents have been “homeschooling” me since the day I was born (even before that if you ask my mom), I still spent a significant amount of my childhood at public school. By second grade, I was definitely cognizant that there were both girls and boys in the classroom and even that one of the girls was pretty cute. However, I cannot say that I really noticed the color of my own skin or of other students. Throughout elementary school, I did not give second thought to one of my closest friends being Mexican and the other being White. Most of the students in my class had white skin and my own skin is relatively light, so even though I was very aware that my mom is Malaysian-Chinese and that my dad is White, I just assumed I was the same as my peers, which in this case was mostly white. I spoke English natively like an American, and growing up in an American school, I knew how to act like an American. I was literate in the discourse of an American public school and I didn’t feel out of place in any way.
                    </p>
                  </CardTextArea>
                </Card>
              </Col>
              <Col xs={12} md={6}>
                <Card>
                  <CardTextArea>
                    <p>
                      During my elementary school years, I got the opportunity to visit Malaysia several times. While I got along great with my Malaysian cousins, it striked me as a bit odd that my brothers and I were the “American cousins.” I did not give it much thought at the time, but in hindsight I think it was because I was still unsure of what my cultural identity was. When in Malaysia, besides just having paler skin than my cousins, the distinction that really set us apart was our language. Even though we both spoke English, my cousins spoke like Malaysians whereas I spoke like an American – I was not fluent in the Malaysian discourse like my cousins were.
                    </p>
                  </CardTextArea>
                </Card>
              </Col>
            </Row>
            <h4 className={'centered'}>Literacies of Caleb Present</h4>
            <Row>
              <Col xs={12} md={6}>
                <Card>
                  <CardTextArea>
                    <p>
                      When I got to college, I found that many of the same forces pulling apart my identity were still at play. Even though I felt like I had established an identity that I was comfortable with in high school, this had to evolve when I came to college. In high school, I was cognizant that most of my friends were white and that I was different by being of mixed race. However, in college the tables turned. While asians make up a little less than half of the total student body at UC Berkeley, I feel that as an Electrical Engineering and Computer Science (EECS) major, that 40% is often a lower bound. Between students of South Asian and East Asian descent, that already accounts for the large majority of students with whom I interact. The student organization that I’ve been most involved with is the Computer Science Undergraduate Association (CSUA), but sometimes I joke that the C in CSUA stands for Chinese. Most of our members’ families come from either mainland China or Taiwan. Only a couple members that are regularly in the CSUA office are white – a marked change from the racial demographics of my high school.
                    </p>
                  </CardTextArea>
                </Card>
              </Col>
              <Col xs={12} md={6}>
                <Card>
                  <CardTextArea>
                    <p>
                      As most of the CSUA members are American-born (as opposed to international students), we all speak American English fluently and share that literacy. While at first this might seem like I might not have had to do any code switching, I’ve noticed that there are more subtleties like spontaneous karaoke in the CSUA office is something that I would have never expected around my white high school friends, even if the songs were not in Mandarin. I find that seeing lots of Asian friends and feeling more free to express my Asian heritage because those friends will understand me allows me to feel much more Asian than I did in high school surrounded by white people. My friends in the CSUA will also sometimes make puns in Mandarin that I do not always understand. In these cases I have to ask them to explain the joke to me. Sometimes it feels embarrassing to not understand Mandarin as well as my friends, even though we are in America. Some of my closest friends I have met through CSUA, but I still sometimes feel inadequate for not being Chinese enough.
                    </p>
                  </CardTextArea>
                </Card>
              </Col>
              <Col xs={12} md={6}>
                <Card>
                  <CardTextArea>
                    <p>
                      The most obvious literacy that I am acquiring while at Cal is technical literacy. This means not only being able to read and write technical documentation, but in general being able to navigate the technical landscape. When I talk to others who are CS majors or someone working in the CS industry, I feel comfortable using a technical discourse using jargon and terms specific to computer science. By taking classes at Cal, I have the opportunity to widen and deepen my fluency in this discourse. For example, by taking the computer graphics course, I can now speak the discourse relevant to this subfield of computer science. I can also build other skills upon this literacy. Several other CSUA members are also taking the computer graphics course this semester, and so we can use our new shared discourse to solve challenging problems. Beyond simply understanding the material and the terminology, acquiring this literacy helps us work together more effectively and achieve even more.
                    </p>
                  </CardTextArea>
                </Card>
              </Col>
              <Col xs={12} md={6}>
                <Card>
                  <CardTextArea>
                    <p>
                      Besides just learning from Professors and GSI’s, I have learned a lot of technical literacy from hanging out at the CSUA. The CSUA maintains all of its own technological infrastructure which includes a computer lab and a rack of servers. The CSUA Root Staff, of which I am a part, maintains these resources. Some of the most effective learning I have done is through working with Root Staff, and in hindsight, I attribute that to the application of Paulo Freire’s concept of problem-posing education. Freire writes that “‘problem-posing’ education, responding to the essence of consciousness—intentionality—rejects communiques and embodies communication.” Root Staff would present a problem and I would have the freedom to explore the issue and creatively solve it, while having access to more experienced Root Staff members who could mentor me. In this way, no one was telling me the right way to do something, but instead I could exercise my own creative problem solving skills, and in that way my mentors could communicate to me in a far more effective way than lecturing me.
                    </p>
                  </CardTextArea>
                </Card>
              </Col>
              <Col xs={12} md={6}>
                <Card>
                  <CardTextArea>
                    <p>
                      Another literacy that I have acquired while at UC Berkeley is that necessary to be an independent adult. This has been my first time living on my own and so I have had to figure out the literacies necessary to ffunction as an independent. For example, I’ve had to learn how to navigate grocery store to get the ingredients I want for cooking with. I’ve had to become literate in the different labelling schemes so that I can buy the food that is more healthy without being overcharged. I’ve also had to file taxes as an independent without having my dad standing over my shoulder stepping me though what I need to fill out. I’ve mostly learned how to be a literate adult just by trial and error, which might not be the most efficient way to learn, but in no way does that make it invalid.
                    </p>
                  </CardTextArea>
                </Card>
              </Col>
            </Row>
            <h4 className={'centered'}>Literacies of Caleb Future</h4>
            <Row>
              <Col xs={12} md={6}>
                <Card>
                  <CardTextArea>
                    <p>
                      I grew up going to church with my family and I am fluent in the religious discourse. Likewise, I found a lot of my identity in this spiritual context. I realized that I can analyze my multicultural background with a Biblical context. Moses from the Old Testament also grew up in a mixed culture environment: he was raised by both Hebrews and Egyptians. He was never Egyptian enough to fit in with the Egyptians, but he was always too Egyptian to be accepted by the Hebrews either. I felt that I could really relate to this. Even though my mom is very culturally Malaysian, I never felt like I was Malaysian enough to fit in with even my cousins. Even though my mom is ethnically Chinese and would make Chinese food and celebrate Chinese New Year, I never felt like I was Chinese enough to fit in with Chinese people. My dad and growing up in America taught me how to live as a white American and I felt that I could almost blend in with my lighter skin, but I still felt like an imposter at times. I find it encouraging to analyze my situation from a Biblical lens, because Moses only found his calling in his misery and that led him to become a great leader. This leads me to realize that I do not have to necessarily fit in: I’ve been given these mix of cultures, but I can use this to actually extend my reach because I can relate to people of all my cultures as well as other people of mixed cultures.
                    </p>
                  </CardTextArea>
                </Card>
              </Col>
              <Col xs={12} md={6}>
                <Card>
                  <CardTextArea>
                    <p>
                      In the immediate future, I am planning on becoming a software developer and moving back to the Seattle area. I expect that my technical literacies I have picked up during my time studying EECS at Cal will transfer to my role as a software developer. There is a large percentage of Asian employees in the tech sector in Seattle, but there are also more white people, too, so I hope to leverage the discourses I have developed while living in Silverdale and while living in Berkeley.
                    </p>
                  </CardTextArea>
                </Card>
              </Col>
              <Col xs={12} md={6}>
                <Card>
                  <CardTextArea>
                    <p>
                      Although I do not have any solid plans in place, I would like to become an educator in the future. One plan would involve teaching computer science to high school students. My high school computer science teacher was incredibly inspiring and I would like to inspire other students to the same degree. I feel like having this position of influence over students would also give me a platform to help students who may be struggling by caring for them and pouring into their lives. I believe that coming from mixed cultures gives me a unique ability to empathize with students who might come from different backgrounds. I certainly have a lot to grow in expressing this to students. For example, when I was building a robot with a student on Saturday, he counted the number of holes he needed to put a screw in. I heard him counting to himself in Spanish and I wanted to validate speaking in his home language. As Gloria E. Anzaldúa wrote in <u>How to Tame a Wild Tongue</u>, “if you want to really hurt me, talk badly about my language.” I certainly did not want him to feel that his native language was somehow inadequate. But I also did not want to devalue his efforts to speak English like an American, so I ended up not saying anything to him about it, which was probably the least useful of any of my options.
                    </p>
                  </CardTextArea>
                </Card>
              </Col>
              <Col xs={12} md={6}>
                <Card>
                  <CardTextArea>
                    <p>
                      I also hope to start a family at some indeterminate time in the future. I hope that I can pass on the great opportunities that my parents afforded me in my childhood. I believe that by giving me so many opportunities to acquire literacies at such a young age contributed substantially to my intellectual capabilities growing to the level it did at later points in my life, because the foundation for success had already been set up. As I am a multicultural being, my progeny most certainly will be too, as I will contribute to their culture.
                    </p>
                  </CardTextArea>
                </Card>
              </Col>
              <Col xs={12} md={6}>
                <Card>
                  <CardTextArea>
                    <p>
                      The most profound literacy I have gained is the cultural literacy relating the mixed cultures with which I identify. If I can pass this on as something, not to be ashamed of, but as an opportunity for empathy and compassion, then they will have the most valuable legacy of my multicultural identity.
                    </p>
                  </CardTextArea>
                </Card>
              </Col>
            </Row>
          </div>
      </div>
    );
  }
}

About = Guac(About);

export default About;
export {About};
