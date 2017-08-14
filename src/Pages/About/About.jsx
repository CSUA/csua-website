import * as React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {withRouter} from 'react-router';

import LazyLoad from 'react-lazy-load';

import {Row, Col} from 'yui-md/lib';
import {IconButton} from 'yui-md/lib/Button';
import {Icon} from 'yui-md/lib/Icon';
import {Card, CardImageArea, CardTextArea} from 'yui-md/lib/Card';

import _PaperBorder from './_PaperBorder';
import officersImg from 'static/images/Officers_FA16.jpg';
import wozImg from 'static/images/Woz.jpg';

class About extends React.Component {
  constructor() {
    super();
    this.render = this.render.bind(this);
  }

  render() {
    return (
      <div className={'about-page page'}>
        <_PaperBorder/>
          <div className={'title-area'}>
            <h1 className={'centered'}>CSUA</h1>
            <h4 className={'centered'}>The home for all things CS.</h4>
            <div className={'centered subtitle'}>
                <IconButton large icon='keyboard_arrow_down'/>
            </div>
          </div>
          <div className={'info-area'}>
            <h4 className={'centered'}>The Computer Science Undergraduate Association</h4>
            <br/>
            <Row>
              <Col xs={12} md={6}>
                <Card>
                  <CardTextArea>
                    <p className={'centered title'}>Hello World!</p>
                    <Icon className={'centered'}>lightbulb_outline</Icon>
                    <p>The CSUA is here to make every step of
                      your undergraduate computer science experience smoother, easier,
                      and more fun! Looking for an internship or a job? Want to learn more CS skills?
                      Need help in a class? We have it all! Come to our events or visit
                      us at 311 Soda Hall to check us out.
                    </p>
                  </CardTextArea>
                </Card>
              </Col>
              <Col xs={12} md={6}>
                <Card>
                  <CardTextArea>
                    <p className={'centered title'}>Who We Are</p>
                    <Icon className={'centered'}>face</Icon>
                    <p>We are a group of smart, enthusiastic,
                      and fun-loving EECS and CS students who are passionate about
                      computer science. We are researchers, TAs, GSIs, hackers, hardware
                      gurus, open-sourcers, professionals, geeks, women, men, and in between.
                      But most importantly, we're proud members of the CS community.
                    </p>
                  </CardTextArea>
                </Card>
              </Col>
              <Col xs={12}>
                <Card>
                  <CardImageArea>
                    <img src={wozImg} style={{maxHeight: '100%', maxWidth: '100%', alignSelf: 'center'}}/>
                  </CardImageArea>
                  <CardTextArea>
                    <small>CSUA members hacking into the night.</small>
                  </CardTextArea>
                </Card>
              </Col>
              <Col xs={12} md={6}>
                <Card>
                  <CardTextArea>
                    <p className={'centered title'}>Need Help?</p>
                    <Icon className={'centered'}>help_outline</Icon>
                    <p>The CSUA offers tutoring services,
                    major declaration panels, internship workshops, and recruiting events.
                    You can find a list of available tutors and office hours here.
                    For events, click here. You can also drop by the office any time,
                    and an available tutor will help you.
                    </p>
                  </CardTextArea>
                </Card>
              </Col>
              <Col xs={12} md={6}>
                <Card>
                  <CardTextArea>
                    <p className={'centered title'}>Upcoming Events</p>
                    <Icon className={'centered'}>event_note</Icon>
                    <p> 9/1 - 5PM - Wozniak Lounge
                    </p>
                  </CardTextArea>
                </Card>
              </Col>
              <Col xs={12} lg={8}>
                <Card>
                  <CardImageArea>
                    <img src={officersImg} style={{width: '100%'}}/>
                  </CardImageArea>
                  <CardTextArea>
                    <small>CSUA officers at Hearst Mining Circle.</small>
                  </CardTextArea>
                </Card>
              </Col>
              <Col xs={12} lg={4}>
                <Card>
                  <CardTextArea>
                    <p className={'centered title'}>Resources</p>
                    <Icon className={'centered'}>bookmark_border</Icon>
                  </CardTextArea>
                </Card>
              </Col>
            </Row>
          </div>
      </div>
    );
  }
}

function mapStateToProps(state, ownProps) {
  return {

  };
}

function mapDispatchToProps(dispatch, ownProps) {
  return {

  };
}

About = withRouter(connect(mapStateToProps, mapDispatchToProps)(About));

export default About;
export {About};
