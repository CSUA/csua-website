import * as React from 'react';

import LazyLoad from 'react-lazy-load';

import {Row, Col} from 'yui-md/lib';
import {Card, CardImageArea, CardTextArea} from 'yui-md/lib/Card';

class Sp18 extends React.Component {
  constructor() {
    super();
    this.render = this.render.bind(this);
  }

  render() {
    return (
      <div className={'wrapper'}>
        <div className={'title-area'}>
          <h3 className={'centered page-title'}>CSUA x IEEE Hackathon</h3>
          <p className={'centered header'}>Spring 2018</p>
          <p className={'centered subheader'}>It's happening</p>
          <br/>
        </div>
        <div className={'info-area'}>


          <Row>
            <Col xs={12} md={6}>
            <Card>
              <CardImageArea>
                <LazyLoad debounce={false} throttle={50}>
                  <img src="https://www.csua.berkeley.edu:8080/static/images/events/fall2015/hackathonfa15.jpg" />
                </LazyLoad>
              </CardImageArea>
            </Card>
            </Col>
            <Col xs={12} md={6}>
            <Card>
              <CardTextArea>
                <a className="linkbutton" href="https://www.facebook.com/events/190920791296789/">
                  RSVP on Facebook!
                </a>
                <div>
                  <div className="headers">
                    Time:
                  </div>
                  <div className="text">
                    Hacking starts at 8:00 PM on Friday, April 1st. You will have 18 hours to hack whatever you want.
                  </div>
                </div>
                <div>
                  <div className="headers">
                    Judges:
                  </div>
                  <div className="text">
                    <div className="judge">Three judges from Meraki</div>
                  </div>
                </div>
                <div>
                  <div className="headers">
                    Schedule:
                  </div>
                  <div className="text">
                    <div className="day">Friday, April 1st
                      <div className="schedule-item">8:00 PM - Hacking Begins</div>
                    </div>
                    <div className="day">Saturday, April 2nd
                      <div className="schedule-item">2:00 PM - Hacking ends</div>
                      <div className="schedule-item">2:30 PM - Presentations/Judging</div>
                      <div className="schedule-item">4:00 PM - Prizes/Closing</div>
                    </div>
                  </div>
                </div>
              </CardTextArea>
            </Card>
            </Col>
          </Row>
          <Row>
            <Col xs={12} md={6}>
            <Card>
              <CardTextArea>
                <div>
                  <div className="headers">
                    Registration:
                  </div>
                  <div className="text">
                    Registration for the Hackathon is day-of.
                  </div>
                </div>
                <div>
                  <div className="headers">
                    Submission Requirements:
                  </div>
                  <div className="text">
                    Set up a GitHub repository for your team. You will use this repo to submit your project. Though your repo may be private during development, it must be public after submission and accessible to the judges.
                  </div>
                  <div className="text">
                    GitHub has excellent tutorials on how to use git and how to set up a repository on GitHub. This type of technology can be life-saving for group projects.
                  </div>
                  <a className="linkbutton" href="http://help.github.com/">GitHub Help</a>
                </div>
                <div>
                  <div className="headers">
                    Judging Criteria:
                  </div>
                  <div className="text">
                    Completion will be a factor in judging, but incomplete submissions will not be disqualified. Bugs are okay! You are building a quick hack, not production-quality software!
                  </div>
                  <div className="text">
                    If you make any special claims about the capabilities of your software, please present proof of your claims in your presentation. The presentation itself doesn't need to be super high quality, but don't forget to substantiate claims. The description is not graded, but it will be used to help the judges refer to teams' projects while judging.
                  </div>
                </div>
                <div>
                  <div className="headers">
                    Prize Pool:
                  </div>
                  <ul className="prizes">
                    <li>Four Large HD Monitors</li>
                    <li>Four Large HD Monitors</li>
                    <li>Four Large HD Monitors</li>
                    <li>Four Large HD Monitors</li>
                  </ul>
                </div>
              </CardTextArea>
            </Card>
            </Col>
            <Col xs={12} md={6}>
            <Card>
              <CardTextArea>
                <div>
                  <div className="headers">
                    Prize Rules:
                  </div>
                  <div className="text">
                    You can code alone or in pairs or in a group of four, but we will only but giving one prize to a lone star, two prizes to a pair, and up to 4 prizes for a team of 4+ people. You'll have to distribute the prizes amongst your group.
                  </div>
                  <div className="text">
                    To be eligible for prizes, you team must consist entirely of CAL undergraduates, with teams of 4 or lower receiving preference.
                  </div>
                  <div className="text">
                    There are three large prize groups. 1st place winners get first pick at the prize groups, then 2nd place group gets second pick, and 3rd place gets the final pick. This means that the 1st place winner may choose the 2nd place prize if they so desire.
                  </div>
                </div>
                <div>
                  <div className="headers">
                    Pre-Hackathon Rules:
                  </div>
                  <div className="text">
                    All code written must be written in the 18-hour period, or explicitly flagged as written beforehand. Making significant use of pre-written non-framework/non-library code is strongly discouraged.
                  </div>
                  <div className="text">
                    Libraries are fine, and anything reasonably called a "framework" should also be fine. Improvements to a library may not be considered in the main body of a work if they are merely incidental to the project, rather than a major component. Non-coding design pre-work and product development is acceptable. Fleshing out and preparation work, in general, should be no big deal.
                  </div>
                  <div className="text">
                    If a project does not pass a "smell test," judges may, at their discretion, take this into consideration when evaluating the project. It is recommended that a README file be included which summarizes the work done and explains the necessary disclaimers for pre-work, libraries, etc. However, this is neither required nor scored.
                  </div>
                </div>
              </CardTextArea>
            </Card>
            </Col>
          </Row>
          <Row>
            <Col xs={12} md={12}>
            <Card className="submission">
              <CardTextArea>
                <div className="div">
                  <div className="headers">
                    Submission:
                  </div>
                  <div className="flex">
                    Congrats on finishing your hack! You can now submit your GitHub repo here! The judges look forward to reviewing your work!
                    <a className="linkbutton half" href="http://goo.gl/forms/EZoXeXxMAk">Submit Project</a>
                  </div>
                </div>
              </CardTextArea>
            </Card>
            </Col>
          </Row>


        </div>
      </div>
    );
  }
}

export default Sp18;
export {Sp18};
